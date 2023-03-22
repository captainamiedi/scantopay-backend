"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authMiddleware = require("../middleware/authMiddleware.js");
var _createOrder = require("../middleware/createOrder");
var _orderController = _interopRequireDefault(require("../Controller/orderController.js"));
var route = (0, _express.Router)();
var createOrderDetails = _orderController["default"].createOrderDetails;
route.post('/order', _authMiddleware.getToken, _authMiddleware.verifyToken, _createOrder.createOrder, createOrderDetails);
var _default = route;
exports["default"] = _default;