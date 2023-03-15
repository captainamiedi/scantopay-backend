"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _authMiddleware = require("../middleware/authMiddleware.js");
var _authService = require("../Service/authService.js");
var _response = require("../Utils/response.js");
var _statusCode = _interopRequireDefault(require("../Utils/statusCode.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _ApiErrors = _interopRequireDefault(require("../Utils/ApiErrors.js"));
var _excluded = ["password"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  signup: function () {
    var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, fullName, email, phone, password, salt, hashed, userObj, user, data;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, fullName = _req$body.fullName, email = _req$body.email, phone = _req$body.phone, password = _req$body.password;
            _context.next = 4;
            return _bcrypt["default"].genSalt(6);
          case 4:
            salt = _context.sent;
            _context.next = 7;
            return _bcrypt["default"].hash(password, salt);
          case 7:
            hashed = _context.sent;
            userObj = {
              fullName: fullName,
              email: email,
              password: hashed,
              phone: phone
            };
            _context.next = 11;
            return (0, _authService.signupService)(userObj);
          case 11:
            user = _context.sent;
            data = user.dataValues;
            data.token = (0, _authMiddleware.generateToken)(data.id, email, fullName);
            delete data.password;
            return _context.abrupt("return", (0, _response.successResponseWithData)(res, _statusCode["default"].created, 'Signup Successful', data));
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _response.errorResponse)(res, _context.t0.statusCode || _statusCode["default"].serverError, _context.t0));
          case 21:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 18]]);
    }));
    function signup(_x, _x2) {
      return _signup.apply(this, arguments);
    }
    return signup;
  }(),
  login: function () {
    var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var _req$body2, email, password, validUser, _validUser$dataValues, hashedPassword, data, validPassword, token;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
            _context2.next = 4;
            return (0, _authService.findUserByEmail)(email);
          case 4:
            validUser = _context2.sent;
            if (!(validUser === null || validUser === undefined)) {
              _context2.next = 7;
              break;
            }
            throw new _ApiErrors["default"]('User is not found', _statusCode["default"].notFound);
          case 7:
            _validUser$dataValues = validUser.dataValues, hashedPassword = _validUser$dataValues.password, data = (0, _objectWithoutProperties2["default"])(_validUser$dataValues, _excluded);
            _context2.next = 10;
            return (0, _authService.comparePassword)(password, hashedPassword);
          case 10:
            validPassword = _context2.sent;
            if (validPassword) {
              _context2.next = 15;
              break;
            }
            throw new _ApiErrors["default"]('Password or email is not correct', _statusCode["default"].badRequest);
          case 15:
            token = (0, _authMiddleware.generateToken)(data.id, email, data.fullName);
            return _context2.abrupt("return", (0, _response.successResponseWithData)(res, _statusCode["default"].success, 'login successful', _objectSpread(_objectSpread({}, data), {}, {
              token: token
            })));
          case 17:
            _context2.next = 23;
            break;
          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            return _context2.abrupt("return", (0, _response.errorResponse)(res, _context2.t0.statusCode || _statusCode["default"].serverError, _context2.t0));
          case 23:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 19]]);
    }));
    function login(_x3, _x4) {
      return _login.apply(this, arguments);
    }
    return login;
  }()
};
exports["default"] = _default;