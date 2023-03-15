"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _response = require("../Utils/response.js");
var _statusCode = _interopRequireDefault(require("../Utils/statusCode.js"));
var _default = {
  validateSignup: function validateSignup(req, res, next) {
    var _req$body = req.body,
      fullName = _req$body.fullName,
      email = _req$body.email,
      phone = _req$body.phone,
      password = _req$body.password;
    if (!fullName) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Full name is required');
    }
    if (!email) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Email is required');
    }
    if (!phone) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Phone Number is required');
    }
    if (!password) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Password is required');
    }
    return next();
  },
  validateLogin: function validateLogin(req, res, next) {
    var _req$body2 = req.body,
      email = _req$body2.email,
      password = _req$body2.password;
    if (!email) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Email is required');
    }
    if (!password) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Password is required');
    }
    return next();
  },
  forgotPassword: function forgotPassword(req, res, next) {
    var email = req.body.email;
    if (!email || !email.trim()) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Email is required');
    }
    next();
  },
  resetPasswordValidation: function resetPasswordValidation(req, res, next) {
    var password = req.body.password;
    if (!password || !password.trim()) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Email is required');
    }
    next();
  }
};
exports["default"] = _default;