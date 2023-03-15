"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePassword = exports.signupService = exports.findUserById = exports.findUserByEmail = exports.comparePassword = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = _interopRequireDefault(require("../models/index.js"));
var _bcrypt = require("bcrypt");
var User = _index["default"].User;
var signupService = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userObj) {
    var userRes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return User.create(userObj);
        case 3:
          userRes = _context.sent;
          return _context.abrupt("return", userRes);
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw _context.t0;
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function signupService(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.signupService = signupService;
var findUserByEmail = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(email) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return User.findOne({
            where: {
              email: email
            }
          });
        case 3:
          return _context2.abrupt("return", _context2.sent);
        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          throw _context2.t0;
        case 9:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 6]]);
  }));
  return function findUserByEmail(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.findUserByEmail = findUserByEmail;
var findUserById = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return User.findOne({
            where: {
              id: id
            }
          });
        case 3:
          return _context3.abrupt("return", _context3.sent);
        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          throw _context3.t0;
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return function findUserById(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
exports.findUserById = findUserById;
var updatePassword = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(hash, id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return User.update(hash, {
            where: {
              id: id
            }
          });
        case 3:
          return _context4.abrupt("return", _context4.sent);
        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          throw _context4.t0;
        case 9:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 6]]);
  }));
  return function updatePassword(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();
exports.updatePassword = updatePassword;
var comparePassword = function comparePassword(password, hashedPassword) {
  return (0, _bcrypt.compareSync)(password, hashedPassword);
};
exports.comparePassword = comparePassword;