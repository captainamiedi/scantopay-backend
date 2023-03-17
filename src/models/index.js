import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import { url } from 'inspector';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];

const db = {};
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

let sequelize;
const URL = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?options=project%3D${ENDPOINT_ID}&sslmode=require`;

sequelize = new Sequelize(URL, {
  dialect: 'postgres',
  Option: {
    native: true,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // very important
      }
    }

  },
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

fs.readdirSync(__dirname)
  .filter(
    file => file.indexOf('.') !== 0
        && file !== 'index.js'
        && file.slice(-3) === '.js',
  )
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;

const test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
test()
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
