"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _authService = require("../Service/authService.js");
var _ApiErrors = _interopRequireDefault(require("../Utils/ApiErrors.js"));
var _email = require("../Utils/email.js");
var _response = require("../Utils/response.js");
var _statusCode = _interopRequireDefault(require("../Utils/statusCode.js"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _default = {
  sendPasswordResetEmail: function () {
    var _sendPasswordResetEmail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var email, user, token, url, emailTemplate;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            email = req.body.email;
            _context.prev = 1;
            _context.next = 4;
            return (0, _authService.findUserByEmail)(email);
          case 4:
            user = _context.sent;
            if (!(user === null || user === undefined)) {
              _context.next = 7;
              break;
            }
            throw new _ApiErrors["default"]('Email not found', _statusCode["default"].notFound);
          case 7:
            token = (0, _email.usePasswordHashToMakeToken)(user);
            url = (0, _email.getPasswordResetURL)(user, token);
            emailTemplate = (0, _email.resetPasswordTemplate)(user, url);
            return _context.abrupt("return", (0, _email.transporter)(emailTemplate, res));
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0, 'error');
            return _context.abrupt("return", (0, _response.errorResponse)(res, _context.t0.statusCode || _statusCode["default"].serverError, _context.t0));
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[1, 13]]);
    }));
    function sendPasswordResetEmail(_x, _x2) {
      return _sendPasswordResetEmail.apply(this, arguments);
    }
    return sendPasswordResetEmail;
  }(),
  receiveNewPassword: function () {
    var _receiveNewPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$params, userId, token, password, user, secret, payload, salt, hashed;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$params = req.params, userId = _req$params.userId, token = _req$params.token;
            password = req.body.password;
            _context2.next = 5;
            return (0, _authService.findUserById)(userId);
          case 5:
            user = _context2.sent;
            secret = "".concat(user.password, "-").concat(user.createdAt);
            payload = _jsonwebtoken["default"].decode(token, secret);
            if (!(payload.userId === user.id)) {
              _context2.next = 18;
              break;
            }
            _context2.next = 11;
            return _bcrypt["default"].genSalt(6);
          case 11:
            salt = _context2.sent;
            _context2.next = 14;
            return _bcrypt["default"].hash(password, salt);
          case 14:
            hashed = _context2.sent;
            _context2.next = 17;
            return (0, _authService.updatePassword)(hashed, user.id);
          case 17:
            return _context2.abrupt("return", (0, _response.successResponse)(res, _statusCode["default"].success, 'Password Reset Successful'));
          case 18:
            return _context2.abrupt("return", (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Something went wrong'));
          case 21:
            _context2.prev = 21;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", (0, _response.errorResponse)(res, _context2.t0.statusCode || _statusCode["default"].serverError, _context2.t0));
          case 25:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 21]]);
    }));
    function receiveNewPassword(_x3, _x4) {
      return _receiveNewPassword.apply(this, arguments);
    }
    return receiveNewPassword;
  }()
};
exports["default"] = _default;