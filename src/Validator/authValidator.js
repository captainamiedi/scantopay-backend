import { errorResponse } from "../Utils/response.js"
import statusCode from "../Utils/statusCode.js"

export default {
    validateSignup: (req, res, next) => {
        const {fullName, email, phone, password} = req.body

        if(!fullName) {
            return errorResponse(res, statusCode.badRequest, 'Full name is required')
        }
        if(!email) {
            return errorResponse(res, statusCode.badRequest, 'Email is required')
        }
        if(!phone) {
            return errorResponse(res, statusCode.badRequest, 'Phone Number is required')
        }
        if(!password) {
            return errorResponse(res, statusCode.badRequest, 'Password is required')
        }

        return next()
    },

    validateLogin: (req, res, next) => {
        const {email, password} = req.body

        if (!email) {
            return errorResponse(res, statusCode.badRequest, 'Email is required')
        }
        if (!password) {
            return errorResponse(res, statusCode.badRequest, 'Password is required')
        }

        return next()
    },
    forgotPassword: (req, res, next) => {
        const {email} = req.body

        if (!email || !email.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Email is required')
        }

        next()
    },
    forgotPasswordStore: (req, res, next) => {
        const {email} = req.body

        if (!email || !email.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Email is required')
        }

        next()
    },
    resetPasswordValidation: (req, res, next) => {
        const {password} = req.body

        if (!password || !password.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Email is required')
        }

        next()
    }, 
    resetPasswordValidationStore: (req, res, next) => {
        const {password} = req.body

        if (!password || !password.trim()) {
            return errorResponse(res, statusCode.badRequest, 'Email is required')
        }

        next()
    }, 

    validateLoginStore: (req, res, next) => {
        const {email, password} = req.body

        if (!email) {
            return errorResponse(res, statusCode.badRequest, 'Email is required')
        }
        if (!password) {
            return errorResponse(res, statusCode.badRequest, 'Password is required')
        }
        next()
    },

    validateSignupStore: (req, res, next) => {
        const {name, contactEmail, phoneNumber, password, state} = req.body

        if(!name) {
            return errorResponse(res, statusCode.badRequest, 'Full name is required')
        }
        if(!contactEmail) {
            return errorResponse(res, statusCode.badRequest, 'Email is required')
        }
        if(!phoneNumber) {
            return errorResponse(res, statusCode.badRequest, 'Phone Number is required')
        }
        if(!password) {
            return errorResponse(res, statusCode.badRequest, 'Password is required')
        }
        if(!state) {
            return errorResponse(res, statusCode.badRequest, 'State is required')
        }

        return next()
    },
}