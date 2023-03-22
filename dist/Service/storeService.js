"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateStoreService = exports.getAllStoreServiceByState = exports.getAllStoreServiceByName = exports.getAllStoreService = exports.deleteStoreService = exports.createStore = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _sequelize = require("sequelize");
var _index = _interopRequireDefault(require("../models/index.js"));
var Store = _index["default"].Store;
var createStore = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(storeObj) {
    var storeRes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Store.create(storeObj);
        case 3:
          storeRes = _context.sent;
          return _context.abrupt("return", storeRes);
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
  return function createStore(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.createStore = createStore;
var updateStoreService = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(storeUpdateObj) {
    var storeRes;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return Store.update(storeUpdateObj, {
            where: {
              id: storeUpdateObj.id
            }
          });
        case 3:
          storeRes = _context2.sent;
          return _context2.abrupt("return", storeRes);
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw _context2.t0;
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function updateStoreService(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.updateStoreService = updateStoreService;
var deleteStoreService = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var storeRes;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return Store.destroy({
            where: {
              id: id
            }
          });
        case 3:
          storeRes = _context3.sent;
          return _context3.abrupt("return", storeRes);
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          throw _context3.t0;
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function deleteStoreService(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
exports.deleteStoreService = deleteStoreService;
var getAllStoreService = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
    var storeRes;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Store.findAll();
        case 3:
          storeRes = _context4.sent;
          return _context4.abrupt("return", storeRes);
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          throw _context4.t0;
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 7]]);
  }));
  return function getAllStoreService() {
    return _ref4.apply(this, arguments);
  };
}();
exports.getAllStoreService = getAllStoreService;
var getAllStoreServiceByState = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(state) {
    var storeRes;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return Store.findAll({
            where: {
              state: (0, _defineProperty2["default"])({}, _sequelize.Op.iLike, "%".concat(state, "%"))
            }
          });
        case 3:
          storeRes = _context5.sent;
          return _context5.abrupt("return", storeRes);
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          throw _context5.t0;
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function getAllStoreServiceByState(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
exports.getAllStoreServiceByState = getAllStoreServiceByState;
var getAllStoreServiceByName = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(name) {
    var storeRes;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return Store.findAndCountAll({
            where: {
              name: (0, _defineProperty2["default"])({}, _sequelize.Op.iLike, "%".concat(name, "%"))
            },
            raw: true
          });
        case 3:
          storeRes = _context6.sent;
          return _context6.abrupt("return", storeRes);
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          throw _context6.t0;
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function getAllStoreServiceByName(_x5) {
    return _ref6.apply(this, arguments);
  };
}();
exports.getAllStoreServiceByName = getAllStoreServiceByName;