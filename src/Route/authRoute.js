import { Router } from 'express';
import authValidator from '../Validator/authValidator.js';
import authController from '../Controller/authController.js';
import resetPassword from '../Controller/resetPassword.js';
import uploadImage from "../middleware/ImageUpload.js";

const route = Router();

const {validateSignup, validateLogin, forgotPassword, resetPasswordValidation, validateLoginStore, validateSignupStore, forgotPasswordStore, resetPasswordValidationStore} = authValidator
const {signup, login, createStoreUser, loginStoreUser} = authController
const {sendPasswordResetEmail, receiveNewPassword, sendStorePasswordResetEmail, receiveNewStorePassword} = resetPassword

// handle signup
route.post('/auth/signup', validateSignup, signup)
route.post('/auth/signup/store',  validateSignupStore, createStoreUser)

// handle login

route.post('/auth/login', validateLogin, login)
route.post('/auth/login/store', uploadImage.single('image'), validateLoginStore, loginStoreUser)

route.post('/forgot',forgotPassword, sendPasswordResetEmail);

route.post('/receive_new_password/:userId/:token', resetPasswordValidation, receiveNewPassword);

// handle store password reset
route.post('/forget/store', forgotPasswordStore, sendStorePasswordResetEmail)
route.post('/receive/store/:userId/:token', resetPasswordValidationStore, receiveNewStorePassword)


export default route;