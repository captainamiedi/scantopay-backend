"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _orderService = require("../Service/orderService");
var _response = require("../Utils/response");
var _statusCode = _interopRequireDefault(require("../Utils/statusCode"));
var _default = {
  createOrderDetails: function () {
    var _createOrderDetails = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var cart, cartData;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            cart = req.body.cart;
            cartData = JSON.parse(cart);
            cartData.map( /*#__PURE__*/function () {
              var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(item) {
                var orderItem;
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) switch (_context.prev = _context.next) {
                    case 0:
                      orderItem = {
                        productId: item.productId,
                        quantity: item.quantity,
                        discount: item.discount,
                        orderId: req.orderData
                      };
                      _context.next = 3;
                      return (0, _orderService.createOrderItemService)(orderItem);
                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }, _callee);
              }));
              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }());
            return _context2.abrupt("return", (0, _response.successResponse)(res, _statusCode["default"].created, 'successfully created!'));
          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0, 'from controller error');
            return _context2.abrupt("return", (0, _response.errorResponse)(res, _context2.t0.statusCode || _statusCode["default"].serverError, _context2.t0));
          case 11:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[0, 7]]);
    }));
    function createOrderDetails(_x, _x2) {
      return _createOrderDetails.apply(this, arguments);
    }
    return createOrderDetails;
  }()
};
exports["default"] = _default;