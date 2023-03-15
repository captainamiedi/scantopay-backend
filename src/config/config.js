import dotenv from 'dotenv';

dotenv.config();
const { DB_HOST, DB_USERNAME, DB_PASSWORD } = process.env;
module.exports  = {
  "development": {
    "username": DB_USERNAME,
    "password": DB_PASSWORD,
    "database": "scanToPay_dev",
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
    "database": "scanToPay_test",
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
    "database": "scanToPay_prod",
    "host": DB_HOST,
    "dialect": "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

// export default database;