"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _fs = _interopRequireDefault(require("fs"));
var _path = _interopRequireDefault(require("path"));
var _sequelize = _interopRequireDefault(require("sequelize"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _inspector = require("inspector");
_dotenv["default"].config();
var env = process.env.NODE_ENV || 'development';
var config = require('../config/config.js')[env];
var db = {};
var _process$env = process.env,
  PGHOST = _process$env.PGHOST,
  PGDATABASE = _process$env.PGDATABASE,
  PGUSER = _process$env.PGUSER,
  PGPASSWORD = _process$env.PGPASSWORD,
  ENDPOINT_ID = _process$env.ENDPOINT_ID;
var sequelize;
var URL = "postgres://".concat(PGUSER, ":").concat(PGPASSWORD, "@").concat(PGHOST, "/").concat(PGDATABASE, "?options=project%3D").concat(ENDPOINT_ID, "&sslmode=require");
sequelize = new _sequelize["default"](process.env.DATABASE_URL, {
  dialect: 'postgres',
  Option: {
    "native": true,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false // very important
      }
    }
  }
});
// if (config.use_env_variable) {
// } else {
//   sequelize = new Sequelize(
//     config.database,
//     config.username,
//     config.password,
//     config,
//   );
// }

_fs["default"].readdirSync(__dirname).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== 'index.js' && file.slice(-3) === '.js';
}).forEach(function (file) {
  var model = require(_path["default"].join(__dirname, file))(sequelize, _sequelize["default"].DataTypes);
  db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = _sequelize["default"];
var _default = db;
exports["default"] = _default;
var test = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return sequelize.authenticate();
        case 3:
          console.log('Connection has been established successfully.');
          _context.next = 9;
          break;
        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error('Unable to connect to the database:', _context.t0);
        case 9:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 6]]);
  }));
  return function test() {
    return _ref.apply(this, arguments);
  };
}();
test();
// import fs from 'fs';
// import path from 'path';
// import Sequelize from 'sequelize';
// import enVariables from '../config/config.js';
// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = enVariables[env];
// const db = {};

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
//   .forEach(file => {
//     const model = require(path.join(__dirname, file)).default(sequelize, Sequelize.DataTypes);
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;