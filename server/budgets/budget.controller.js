const models = require('../models/index');

module.exports = {

  createBudget (req, res) {
    console.log('req.body ----> ', req.body);
    models.Budget.create(req.body)
      .then(budget => {
        res.status(200).json({budget: budget, success: true});
      })
      .catch(err => {
        console.log('err', err);
        res.status(400).json({error: err});
      });
  },

  getAllBudgets (req, res) {

    console.log('hello');

    models.Budget.findAll({
      include: [{
        model: models.Category
      }],
      attributes: ['name', 'id']

    })
      .then(budgets => {
        res.status(200).json(budgets);
      })
      .catch(err => {
        res.status(400).json({error: err});
      });
  }

};