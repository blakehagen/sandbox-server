'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users',
      'updatedAt',
      {
        type: Sequelize.DATE,
        allowNull: true
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('users', 'updatedAt')

  }
};
