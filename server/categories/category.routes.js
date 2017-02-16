'use strict';
const budgetCtrl = require('./category.controller.js');

module.exports = (app) => {

  app.route('/api/v1/categories/create')
    .post(budgetCtrl.createCategory);

  app.route('/api/v1/categories')
    .get(budgetCtrl.getAllCategories);
};
