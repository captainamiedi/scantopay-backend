"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _authMiddleware = require("../middleware/authMiddleware.js");
var _productController = _interopRequireDefault(require("../Controller/productController.js"));
var _productValidator = _interopRequireDefault(require("../Validator/productValidator.js"));
var route = (0, _express.Router)();
var createProduct = _productController["default"].createProduct,
  updateProduct = _productController["default"].updateProduct,
  deleteProduct = _productController["default"].deleteProduct;
var validateProduct = _productValidator["default"].validateProduct;
route.post('/product', _authMiddleware.getToken, _authMiddleware.verifyToken, validateProduct, createProduct);
route.put('/product/:id', _authMiddleware.getToken, _authMiddleware.verifyToken, validateProduct, updateProduct);
route["delete"]('/product/:id', _authMiddleware.getToken, _authMiddleware.verifyToken, validateProduct, deleteProduct);
var _default = route;
exports["default"] = _default;