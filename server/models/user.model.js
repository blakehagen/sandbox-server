'use strict';

module.exports = (sequelize, DataTypes) => {
  let User;
  let models;

  User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
  }, {
    tableName: 'users',
    timestamps: true,
    classMethods: {
      init: function (_models) {
        models = _models;
        User.hasMany(models.Budget)
      }
    },
  });
  return User;
};