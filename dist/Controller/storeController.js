"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _storeService = require("../Service/storeService.js");
var _response = require("../Utils/response.js");
var _statusCode = _interopRequireDefault(require("../Utils/statusCode.js"));
var _default = {
  createStore: function () {
    var _createStore2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, name, image, description, discount, contactEmail, phoneNumber, address, state, storeObj, store;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, image = _req$body.image, description = _req$body.description, discount = _req$body.discount, contactEmail = _req$body.contactEmail, phoneNumber = _req$body.phoneNumber, address = _req$body.address, state = _req$body.state;
            storeObj = {
              name: name,
              image: image,
              description: description,
              discount: discount,
              contactEmail: contactEmail,
              phoneNumber: phoneNumber,
              address: address,
              state: state
            };
            _context.next = 5;
            return (0, _storeService.createStore)(storeObj);
          case 5:
            store = _context.sent;
            return _context.abrupt("return", (0, _response.successResponseWithData)(res, _statusCode["default"].created, 'Store Created', store));
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            return _context.abrupt("return", (0, _response.errorResponse)(res, _context.t0.statusCode || _statusCode["default"].serverError, _context.t0));
          case 13:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    function createStore(_x, _x2) {
      return _createStore2.apply(this, arguments);
    }
    return createStore;
  }(),
  updateStore: function () {
    var _updateStore = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var id, _req$body2, name, image, description, discount, contactEmail, phoneNumber, address, state, storeObj, store;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, image = _req$body2.image, description = _req$body2.description, discount = _req$body2.discount, contactEmail = _req$body2.contactEmail, phoneNumber = _req$body2.phoneNumber, address = _req$body2.address, state = _req$body2.state;
            storeObj = {
              name: name,
              image: image,
              description: description,
              discount: discount,
              contactEmail: contactEmail,
              phoneNumber: phoneNumber,
              address: address,
              state: state,
              id: id
            };
            _context2.next = 6;
            return (0, _storeService.updateStoreService)(storeObj);
          case 6:
            store = _context2.sent;
            return _context2.abrupt("return", (0, _response.successResponseWithData)(res, _statusCode["default"].success, 'Store Update', store));
          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", (0, _response.errorResponse)(res, _context2.t0.statusCode || _statusCode["default"].serverError, _context2.t0));
          case 13:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 10]]);
    }));
    function updateStore(_x3, _x4) {
      return _updateStore.apply(this, arguments);
    }
    return updateStore;
  }(),
  deleteStore: function () {
    var _deleteStore = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var id;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return (0, _storeService.deleteStoreService)(id);
          case 4:
            return _context3.abrupt("return", (0, _response.successResponse)(res, _statusCode["default"].success, 'Delete Successful'));
          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", (0, _response.errorResponse)(res, _context3.t0.statusCode || _statusCode["default"].serverError, _context3.t0));
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 7]]);
    }));
    function deleteStore(_x5, _x6) {
      return _deleteStore.apply(this, arguments);
    }
    return deleteStore;
  }(),
  getAllStores: function () {
    var _getAllStores = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var stores;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return (0, _storeService.getAllStoreService)();
          case 3:
            stores = _context4.sent;
            return _context4.abrupt("return", (0, _response.successResponseWithData)(res, _statusCode["default"].success, 'Stores Successfully Retrieved', stores));
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            console.log(_context4.t0);
            return _context4.abrupt("return", (0, _response.errorResponse)(res, _context4.t0.statusCode || _statusCode["default"].serverError, _context4.t0));
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    function getAllStores(_x7, _x8) {
      return _getAllStores.apply(this, arguments);
    }
    return getAllStores;
  }(),
  getAllStoresByState: function () {
    var _getAllStoresByState = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
      var state, stores;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            state = req.params.state;
            _context5.next = 4;
            return (0, _storeService.getAllStoreServiceByState)(state);
          case 4:
            stores = _context5.sent;
            return _context5.abrupt("return", (0, _response.successResponseWithData)(res, _statusCode["default"].success, 'Stores Successfully Retrieved', stores));
          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", (0, _response.errorResponse)(res, _context5.t0.statusCode || _statusCode["default"].serverError, _context5.t0));
          case 11:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 8]]);
    }));
    function getAllStoresByState(_x9, _x10) {
      return _getAllStoresByState.apply(this, arguments);
    }
    return getAllStoresByState;
  }(),
  getAllStoresByName: function () {
    var _getAllStoresByName = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
      var name, stores;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            name = req.params.name;
            _context6.next = 4;
            return (0, _storeService.getAllStoreServiceByName)(name);
          case 4:
            stores = _context6.sent;
            return _context6.abrupt("return", (0, _response.successResponseWithData)(res, _statusCode["default"].success, 'Stores Successfully Retrieved', stores));
          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0, 'error');
            return _context6.abrupt("return", (0, _response.errorResponse)(res, _context6.t0.statusCode || _statusCode["default"].serverError, _context6.t0));
          case 12:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[0, 8]]);
    }));
    function getAllStoresByName(_x11, _x12) {
      return _getAllStoresByName.apply(this, arguments);
    }
    return getAllStoresByName;
  }()
};
exports["default"] = _default;