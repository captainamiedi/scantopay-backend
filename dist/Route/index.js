"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _authRoute = _interopRequireDefault(require("./authRoute.js"));
var _storeRoute = _interopRequireDefault(require("./storeRoute.js"));
var _productRoute = _interopRequireDefault(require("./productRoute.js"));
var _default = function _default(prefix, app) {
  app.use(prefix, _authRoute["default"]);
  app.use(prefix, _storeRoute["default"]);
  app.use(prefix, _productRoute["default"]);
};
exports["default"] = _default;