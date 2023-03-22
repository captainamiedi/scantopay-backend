"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCartItem = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _models = _interopRequireDefault(require("../models"));
var CartItem = _models["default"].CartItem;
var createCartItem = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cartObj) {
    var cartRes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return CartItem.create(cartObj);
        case 3:
          cartRes = _context.sent;
          return _context.abrupt("return", cartRes);
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
  return function createCartItem(_x) {
    return _ref.apply(this, arguments);
  };
}();

// export const createCartItem = async (cartObj) => {
//     try {
//         const cartRes = await CartItem.create(cartObj)
//         return cartRes
//     } catch (error) {
//         throw error
//     }
// }
exports.createCartItem = createCartItem;