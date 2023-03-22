"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _default = {
  createCart: function () {
    var _createCart = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var cart, cartArr;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            try {
              cart = req.body.cart;
              cartArr = JSON.parse(cart);
            } catch (error) {}
          case 1:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function createCart(_x, _x2) {
      return _createCart.apply(this, arguments);
    }
    return createCart;
  }()
};
exports["default"] = _default;