import { generateToken } from "../middleware/authMiddleware.js"
import { comparePassword, findUserByEmail, signupService } from "../Service/authService.js"
import { errorResponse, successResponseWithData } from "../Utils/response.js"
import statusCode from "../Utils/statusCode.js"
import bcrypt from 'bcrypt'
import ApiErrors from "../Utils/ApiErrors.js"

export default{
    signup: async (req, res) => {
        try {
            const {fullName, email, phone, password} = req.body
            const salt = await bcrypt.genSalt(6);
            const hashed = await bcrypt.hash(password, salt);

            const userObj = {
                fullName,
                email,
                password: hashed,
                phone
            }
            
    
            const user = await signupService(userObj)
    
            const data = user.dataValues
            data.token = generateToken(data.id, email, fullName)
            delete data.password;
    
            return successResponseWithData(res, statusCode.created, 'Signup Successful', data) 
        } catch (error) {
           return errorResponse(res, error.statusCode || statusCode.serverError, error); 
        }
    },
    
    login: async (req, res) => {
        try {
            const {email, password} = req.body
            const validUser = await findUserByEmail(email)
            if (validUser === null || validUser === undefined) {
                throw new ApiErrors(
                  'User is not found',
                  statusCode.notFound
                );
            }
            const { password: hashedPassword, ...data } = validUser.dataValues;
            const validPassword = await comparePassword(password, hashedPassword);
            if (!validPassword) {
              throw new ApiErrors('Password or email is not correct', statusCode.badRequest);
            } else {
              const token = generateToken(data.id, email, data.fullName);
              return successResponseWithData(
                res,
                statusCode.success,
                'login successful',
                { ...data, token }
              );
            }
        } catch (error) {
            console.log(error);
            return errorResponse(res, error.statusCode || statusCode.serverError, error);    
        }
    }
}