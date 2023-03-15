"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verifyToken = exports.getToken = exports.generateToken = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _response = require("../Utils/response.js");
var _statusCode = _interopRequireDefault(require("../Utils/statusCode.js"));
_dotenv["default"].config();
var jwtSecret = process.env.JWT_SECRET;

// This function generates a token
var generateToken = function generateToken(id, email, first_name) {
  var payload = {
    id: id,
    email: email,
    first_name: first_name
  };
  var option = {
    expiresIn: '1d'
  };
  // Adding the string bearer to jwt object and get token string
  return "Bearer ".concat(_jsonwebtoken["default"].sign(payload, jwtSecret, option));
};
exports.generateToken = generateToken;
var getToken = function getToken(req, res, next) {
  var bearerHeader = req.headers.authorization;
  if (typeof bearerHeader !== 'undefined') {
    var bearer = bearerHeader.split(' ');
    var bearerToken = bearer[1];
    req.token = bearerToken;
    return next();
  }
  return (0, _response.errorResponse)(res, _statusCode["default"].unauthorized, 'Not authorized.');
};
exports.getToken = getToken;
var verifyToken = function verifyToken(req, res, next) {
  _jsonwebtoken["default"].verify(req.token, jwtSecret, function (err, data) {
    if (err) {
      return (0, _response.errorResponse)(res, _statusCode["default"].unauthorized, 'Invalid Token, please login.');
    }
    req.userData = data;
    return next();
  });
};
exports.verifyToken = verifyToken;