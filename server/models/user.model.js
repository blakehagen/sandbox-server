'use strict';

const BPromise = require('bluebird');

module.exports = (sequelize, DataTypes) => {
  let User;
  let models;

  User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: false,
    classMethods: {
      init: function (_models) {
        models = _models;
      }
    },
  });
  return User;
};