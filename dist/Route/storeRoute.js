"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _storeController = _interopRequireDefault(require("../Controller/storeController.js"));
var _authMiddleware = require("../middleware/authMiddleware.js");
var _storeValidator = _interopRequireDefault(require("../Validator/storeValidator.js"));
var route = (0, _express.Router)();
var createStore = _storeController["default"].createStore,
  updateStore = _storeController["default"].updateStore,
  getAllStoresByName = _storeController["default"].getAllStoresByName,
  getAllStoresByState = _storeController["default"].getAllStoresByState,
  deleteStore = _storeController["default"].deleteStore,
  getAllStores = _storeController["default"].getAllStores;
var validateStore = _storeValidator["default"].validateStore;
route.post('/store', _authMiddleware.getToken, _authMiddleware.verifyToken, validateStore, createStore);
route.put('/store/:id', _authMiddleware.getToken, _authMiddleware.verifyToken, updateStore);
route["delete"]('/store/:id', _authMiddleware.getToken, _authMiddleware.verifyToken, deleteStore);
route.get('/store/byState/:state', _authMiddleware.getToken, _authMiddleware.verifyToken, getAllStoresByState);
route.get('/store/byName/:name', _authMiddleware.getToken, _authMiddleware.verifyToken, getAllStoresByName);
route.get('/store', _authMiddleware.getToken, _authMiddleware.verifyToken, getAllStores);
var _default = route;
exports["default"] = _default;