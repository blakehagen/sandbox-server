'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'budgets',
      'name',
      {
        type: Sequelize.STRING,
        allowNull: false
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('budgets', 'name')
  }
};
