'use strict';
const userCtrl = require('./user.controller');

module.exports = (app) => {

  app.route('/api/v1/createUser')
    .post(userCtrl.createUser);
};
