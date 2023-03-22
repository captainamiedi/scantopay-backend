"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTransactionService = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _index = _interopRequireDefault(require("../models/index.js"));
var Transaction = _index["default"].Transaction;
var createTransactionService = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(transactionObj) {
    var transactionRes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return Transaction.create(transactionObj);
        case 3:
          transactionRes = _context.sent;
          return _context.abrupt("return", transactionRes);
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
  return function createTransactionService(_x) {
    return _ref.apply(this, arguments);
  };
}();
exports.createTransactionService = createTransactionService;