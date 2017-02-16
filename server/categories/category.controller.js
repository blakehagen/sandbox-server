const models = require('../models/index');

module.exports = {

  createCategory (req, res) {
    console.log('req.body ----> ', req.body);
    models.Category.create(req.body)
      .then(category => {
        res.status(200).json({category: category, success: true});
      })
      .catch(err => {
        console.log('err', err);
        res.status(400).json({error: err});
      });
  },

  getAllCategories (req, res) {

    console.log('hello cats');

    models.Category.findAll()
      .then(categories => {
        res.status(200).json(categories);
      })
      .catch(err => {
        res.status(400).json({error: err});
      });
  }

};