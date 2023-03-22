"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createOrder = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _orderService = require("../Service/orderService");
var createOrder = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _req$body, total, storeId, serviceCharge, orderObj, orderRes;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, total = _req$body.total, storeId = _req$body.storeId, serviceCharge = _req$body.serviceCharge;
          orderObj = {
            userId: req.userData.id,
            total: total,
            storeId: storeId,
            serviceCharge: serviceCharge
          };
          _context.next = 4;
          return (0, _orderService.createOrderDetailsService)(orderObj);
        case 4:
          orderRes = _context.sent;
          console.log(orderRes.id, 'resp1111');
          console.log(orderRes.OrderDetails, 'resp');
          // console.log(orderRes, 'resp');
          req.orderData = orderRes.id;
          return _context.abrupt("return", next());
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createOrder(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
exports.createOrder = createOrder;