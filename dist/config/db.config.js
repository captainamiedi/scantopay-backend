"use strict";

module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "12345",
  DB: "peer_logistics",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};