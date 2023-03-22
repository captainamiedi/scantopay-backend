"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _productService = require("../Service/productService.js");
var _response = require("../Utils/response.js");
var _statusCode = _interopRequireDefault(require("../Utils/statusCode.js"));
var _default = {
  createProduct: function () {
    var _createProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
      var _req$body, name, image, price, quantity, _productcode, storeId, productObj, product;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, name = _req$body.name, image = _req$body.image, price = _req$body.price, quantity = _req$body.quantity, _productcode = _req$body.productcode, storeId = _req$body.storeId;
            productObj = {
              name: name,
              image: image,
              price: price,
              quantity: quantity,
              productcode: _productcode,
              storeId: storeId
            };
            _context.next = 5;
            return (0, _productService.createProductService)(productObj);
          case 5:
            product = _context.sent;
            return _context.abrupt("return", (0, _response.successResponse)(res, _statusCode["default"].created, 'Product created successfully'));
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", (0, _response.errorResponse)(res, _context.t0.statusCode || _statusCode["default"].serverError, _context.t0));
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    function createProduct(_x, _x2) {
      return _createProduct.apply(this, arguments);
    }
    return createProduct;
  }(),
  updateProduct: function () {
    var _updateProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
      var id, _req$body2, name, image, price, quality, productCode, storeId, productObj, product;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, image = _req$body2.image, price = _req$body2.price, quality = _req$body2.quality, productCode = _req$body2.productCode, storeId = _req$body2.storeId;
            productObj = {
              name: name,
              image: image,
              price: price,
              quality: quality,
              productcode: productcode,
              storeId: storeId,
              id: id
            };
            _context2.next = 6;
            return (0, _productService.updateProductService)(productObj);
          case 6:
            product = _context2.sent;
            return _context2.abrupt("return", (0, _response.successResponse)(res, _statusCode["default"].success, 'Product updated successfully'));
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
    function updateProduct(_x3, _x4) {
      return _updateProduct.apply(this, arguments);
    }
    return updateProduct;
  }(),
  deleteProduct: function () {
    var _deleteProduct = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
      var id, product;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            id = req.params.id;
            _context3.next = 4;
            return (0, _productService.deleteProductService)(id);
          case 4:
            product = _context3.sent;
            return _context3.abrupt("return", (0, _response.successResponse)(res, _statusCode["default"].success, 'Product deleted successfully'));
          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", (0, _response.errorResponse)(res, _context3.t0.statusCode || _statusCode["default"].serverError, _context3.t0));
          case 11:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 8]]);
    }));
    function deleteProduct(_x5, _x6) {
      return _deleteProduct.apply(this, arguments);
    }
    return deleteProduct;
  }(),
  getProductByStore: function () {
    var _getProductByStore2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
      var id, products;
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            id = req.params.id;
            _context4.next = 4;
            return (0, _productService.getProductByStore)(id);
          case 4:
            products = _context4.sent;
            return _context4.abrupt("return", (0, _response.successResponseWithData)(res, _statusCode["default"].success, 'Product retrieved successfully', products));
          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", (0, _response.errorResponse)(res, _context4.t0.statusCode || _statusCode["default"].serverError, _context4.t0));
          case 11:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 8]]);
    }));
    function getProductByStore(_x7, _x8) {
      return _getProductByStore2.apply(this, arguments);
    }
    return getProductByStore;
  }()
};
exports["default"] = _default;