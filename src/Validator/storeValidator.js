import { errorResponse } from "../Utils/response.js";
import statusCode from "../Utils/statusCode.js";

export default {
    validateStore: (req, res, next) => {
        const {name, contactEmail, phoneNumber, state} = req.body;
        if (!name || !name.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Store name is Required')
        }
        if (!contactEmail || !contactEmail.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Email is Required')
        }
        if (!phoneNumber || !phoneNumber.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Phone Number is Required')
        }
        if (!state || !state.trim()) {
            return errorResponse(res, statusCode.badRequest, 'State is Required')
        }

        return next()
    }
}