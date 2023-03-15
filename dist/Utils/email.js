"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePasswordHashToMakeToken = exports.transporter = exports.resetPasswordTemplate = exports.getPasswordResetURL = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _mail = _interopRequireDefault(require("@sendgrid/mail"));
_mail["default"].setApiKey(process.env.SENDGRID_API);
_dotenv["default"].config();
var usePasswordHashToMakeToken = function usePasswordHashToMakeToken(_ref) {
  var passwordHash = _ref.password,
    userId = _ref.id,
    createdAt = _ref.createdAt;
  var secret = "".concat(passwordHash - createdAt);
  var token = _jsonwebtoken["default"].sign({
    userId: userId
  }, secret, {
    expiresIn: 3600 // 1 hour
  });

  return token;
};
exports.usePasswordHashToMakeToken = usePasswordHashToMakeToken;
var transporter = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(msg, res) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _mail["default"].send(msg);
        case 3:
          return _context.abrupt("return", res.status(200).json({
            message: 'Mail sent successfully'
          }));
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            'Error sending email': _context.t0
          }));
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function transporter(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();
exports.transporter = transporter;
var getPasswordResetURL = function getPasswordResetURL(user, token) {
  return "".concat(process.env.RESET_PASSWORD_URL).concat(user.id, "/").concat(token);
};
exports.getPasswordResetURL = getPasswordResetURL;
var resetPasswordTemplate = function resetPasswordTemplate(user, url) {
  var from = 'bright@storescantopay.com';
  var to = user.email;
  var subject = 'ScanToPay Password Reset';
  var html = "\n    <p>Hey ".concat(user.name || user.email, ",</p>\n    <p>We heard that you lost your ScanToPay password. Sorry about that!</p>\n    <p>But don\u2019t worry! You can use the following link to reset your password:</p>\n    <a href=").concat(url, ">").concat(url, "</a>\n    <p>If you don\u2019t use this link within 1 hour, it will expire.</p>\n    <p>Enjoy Awesome Shopping Experience! </p>\n    <p>\u2013Your friends at ScanToPay</p>\n    ");
  return {
    from: from,
    to: to,
    subject: subject,
    html: html
  };
};
exports.resetPasswordTemplate = resetPasswordTemplate;