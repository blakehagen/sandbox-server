'use strict';

const fs        = require('fs');
const path      = require('path');
const Sequelize = require('sequelize');
const pg        = require('pg');
const dbConfig  = require('../config/dbConfig');

let sequelize = new Sequelize(dbConfig.development.url, {
  logging: false
});

let models = {
  Sequelize: Sequelize,
  sequelize: sequelize
};

fs.readdirSync(__dirname)
  .filter(function (file) {
    return ((file.indexOf('.') !== 0) && (file !== 'index.js') && (path.extname(file) === '.js'));
  })
  .forEach(function (file) {
    let model          = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach(function (modelName) {
  if (models[modelName].init) {
    models[modelName].init(models);
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection to postgres db has been established successfully.');
  })
  .catch(err => {
    console.log('Error connecting to the postgres database: ', err);
    process.exit(1);
  });

module.exports = models;