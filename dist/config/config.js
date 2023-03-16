"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var _process$env = process.env,
  DB_HOST = _process$env.DB_HOST,
  DB_USERNAME = _process$env.DB_USERNAME,
  DB_PASSWORD = _process$env.DB_PASSWORD,
  DATABASE_NAME = _process$env.DATABASE_NAME;
module.exports = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE_NAME,
    "host": DB_HOST,
    "dialect": "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  "test": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE_NAME,
    "host": DB_HOST,
    "dialect": "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  },
  "production": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": DATABASE_NAME,
    "host": DB_HOST,
    "dialect": "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
};

// export default database;