const models = require('../models/index');

module.exports = {

  createUser (req, res) {
    models.User.create(req.body)
      .then(user => {
        res.status(200).json({user: user, success: true});
      })
      .catch(err => {
        console.log('err', err);
        res.status(400).json({error: err});
      });
  },

  getAllUsers (req, res) {
    models.User.findAll({
      include: {
        model: models.Budget,
        attributes: ['name']
      },
      attributes: ['id', 'firstName', 'lastName', 'email']
    })
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(400).json({error: err});
      });
  },

  getOneUser (req, res) {
    models.User.findById(req.params.id, {
      include: {
        model: models.Budget,
        include: [models.Category],
        attributes: ['name']
      },
      attributes: ['id', 'firstName', 'lastName', 'email']
    })
      .then(user => {
        res.status(200).json(user);
      })
      .catch(err => {
        res.status(400).json({error: err});
      });
  }

};