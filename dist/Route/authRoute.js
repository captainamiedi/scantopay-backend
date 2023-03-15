"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authValidator = _interopRequireDefault(require("../Validator/authValidator.js"));
var _authController = _interopRequireDefault(require("../Controller/authController.js"));
var _resetPassword = _interopRequireDefault(require("../Controller/resetPassword.js"));
var route = (0, _express.Router)();
var validateSignup = _authValidator["default"].validateSignup,
  validateLogin = _authValidator["default"].validateLogin,
  forgotPassword = _authValidator["default"].forgotPassword,
  resetPasswordValidation = _authValidator["default"].resetPasswordValidation;
var signup = _authController["default"].signup,
  login = _authController["default"].login;
var sendPasswordResetEmail = _resetPassword["default"].sendPasswordResetEmail,
  receiveNewPassword = _resetPassword["default"].receiveNewPassword;

// handle signup
route.post('/auth/signup', validateSignup, signup);

// handle login

route.post('/auth/login', validateLogin, login);
route.post('/forgot', forgotPassword, sendPasswordResetEmail);
route.post('/receive_new_password/:userId/:token', resetPasswordValidation, receiveNewPassword);
var _default = route;
exports["default"] = _default;