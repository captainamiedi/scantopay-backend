"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _response = require("../Utils/response.js");
var _statusCode = _interopRequireDefault(require("../Utils/statusCode.js"));
var _default = {
  validateStore: function validateStore(req, res, next) {
    var _req$body = req.body,
      name = _req$body.name,
      contactEmail = _req$body.contactEmail,
      phoneNumber = _req$body.phoneNumber,
      state = _req$body.state;
    if (!name || !name.trim()) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Store name is Required');
    }
    if (!contactEmail || !contactEmail.trim()) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Email is Required');
    }
    if (!phoneNumber || !phoneNumber.trim()) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'Phone Number is Required');
    }
    if (!state || !state.trim()) {
      return (0, _response.errorResponse)(res, _statusCode["default"].badRequest, 'State is Required');
    }
    return next();
  }
};
exports["default"] = _default;