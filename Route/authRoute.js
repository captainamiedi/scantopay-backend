import { Router } from 'express';
import authValidator from '../Validator/authValidator.js';
import authController from '../Controller/authController.js';
import resetPassword from '../Controller/resetPassword.js';

const route = Router();

const {validateSignup, validateLogin, forgotPassword, resetPasswordValidation} = authValidator
const {signup, login} = authController
const {sendPasswordResetEmail, receiveNewPassword} = resetPassword

// handle signup
route.post('/auth/signup', validateSignup, signup)

// handle login

route.post('/auth/login', validateLogin, login)

route.post('/forgot',forgotPassword, sendPasswordResetEmail);

route.post('/receive_new_password/:userId/:token', resetPasswordValidation, receiveNewPassword);


export default route;