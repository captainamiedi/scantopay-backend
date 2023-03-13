import { findUserByEmail, findUserById, updatePassword } from "../Service/authService"
import ApiErrors from "../Utils/ApiErrors"
import { getPasswordResetURL, resetPasswordTemplate, transporter, usePasswordHashToMakeToken } from "../Utils/email"
import { errorResponse, successResponse } from "../Utils/response"
import statusCode from "../Utils/statusCode"
import jwt from "jsonwebtoken"
import bcrypt from 'bcrypt'

export default {
    sendPasswordResetEmail: async (req, res) => {
        const {email} = req.body

        try {
            const user = await findUserByEmail(email)
            if(user === null || user === undefined) {
                throw new ApiErrors('Email not found', statusCode.notFound)
            }
            const token = usePasswordHashToMakeToken(user)
            const url = getPasswordResetURL(user, token)
            const emailTemplate = resetPasswordTemplate(user, url)
            return transporter(emailTemplate, res)
        } catch (error) {
            console.log(error, 'error');
            return errorResponse(res, error.statusCode || statusCode.serverError, error)
        }
    },

    receiveNewPassword: async (req, res) => {
        try {
            const { userId, token } = req.params;
            const { password } = req.body;
            const user = await findUserById(userId)
            const secret = `${user.password}-${user.createdAt}`;
            const payload = jwt.decode(token, secret);
            if (payload.userId === user.id) {
                const salt = await bcrypt.genSalt(6);
                const hashed = await bcrypt.hash(password, salt);
                await updatePassword(hashed, user.id)
                return successResponse(res, statusCode.success, 'Password Reset Successful')
            }
            return errorResponse(res, statusCode.badRequest, 'Something went wrong')
        } catch (error) {
            console.log(error);
            return errorResponse(res, error.statusCode || statusCode.serverError, error) 
        }
    }
}