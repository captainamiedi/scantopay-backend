"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successResponseWithData = exports.successResponse = exports.errorResponse = void 0;
// functions for success and error responses

var successResponse = function successResponse(res, statusCode, message) {
  return res.status(statusCode).send({
    statusCode: statusCode,
    message: message
  });
};
exports.successResponse = successResponse;
var successResponseWithData = function successResponseWithData(res, statusCode, message, data) {
  return res.status(statusCode).send({
    statusCode: statusCode,
    data: data,
    message: message
  });
};
exports.successResponseWithData = successResponseWithData;
var errorResponse = function errorResponse(res, statusCode, error) {
  return res.status(statusCode).send({
    statusCode: statusCode,
    error: error
  });
};
exports.errorResponse = errorResponse;