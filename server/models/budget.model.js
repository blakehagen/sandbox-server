'use strict';

const BPromise = require('bluebird');

module.exports = (sequelize, DataTypes) => {
  let Budget;
  let models;

  Budget = sequelize.define('Budget', {
    name: DataTypes.STRING
  }, {
    tableName: 'budgets',
    timestamps: true,
    classMethods: {
      init: function (_models) {
        models = _models;
        Budget.belongsTo(models.User);
        Budget.hasMany(models.Category);
      }
    },
  });
  return Budget;
};