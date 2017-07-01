const fs = require('fs');
const path = require('path');

const Sequelize = require('sequelize');

const config = {
  host: process.env.DB_SERVER,
  dialect: 'mysql',

  pool: { max: 5, min: 0, idle: 10000 },

  define: {
    freezeTableName: true
  }
};

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, config);
const database = {};

const fileFilter = file => file.indexOf('.') !== 0 && file !== 'index.js';

const addToDB = file => {
  const model = sequelize.import(path.join(__dirname, file));

  database[model.name] = model;
};

fs
  .readdirSync(__dirname)
  .filter(fileFilter)
  .forEach(addToDB);

Object.keys(database).forEach(modelName => {
  if ('associate' in database[modelName])
    database[modelName].associate(database);
});

database.sequelize = sequelize;
database.Sequelize = Sequelize;

module.exports = database;