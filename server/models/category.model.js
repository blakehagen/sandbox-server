'use strict';

module.exports = (sequelize, DataTypes) => {
  let Category;
  let models;

  Category = sequelize.define('Category', {
    name: DataTypes.TEXT,
    total: DataTypes.TEXT
  }, {
    tableName: 'categories',
    timestamps: true,
    classMethods: {
      init: function (_models) {
        models = _models;
        Category.belongsTo(models.Budget)
      }
    },
  });
  return Category;
};