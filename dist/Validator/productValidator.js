"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _response = require("../Utils/response.js");
var _statusCode = _interopRequireDefault(require("../Utils/statusCode.js"));
var _default = {
  validateProduct: function validateProduct(req, res, next) {
    var _req$body = req.body,
      name = _req$body.name,
      price = _req$body.price,
      storeId = _req$body.storeId;
    if (!name || !name.trim()) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Name is Required');
    }
    if (!price) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Price is Required');
    }
    if (!storeId || !storeId.trim()) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'store id is Required');
    }
    return next();
  }
};
exports["default"] = _default;