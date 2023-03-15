"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _index = _interopRequireDefault(require("./Route/index.js"));
_dotenv["default"].config();
var app = (0, _express["default"])();
var prefix = '/api/v1';
app.use((0, _cors["default"])());

// parse requests of content-type - application/json
app.use(_express["default"].json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(_express["default"].urlencoded({
  extended: true
}));
(0, _index["default"])(prefix, app);
// set port, listen for requests
var PORT = process.env.PORT || 8080;
app.get('/', function (req, res) {
  res.send("Hello, scan to pay");
});
app.listen(PORT, function () {
  console.log("Server is up at ".concat(PORT));
});