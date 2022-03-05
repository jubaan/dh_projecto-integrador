const { validationResult } = require('express-validator');
// const usersModel

let usersController = {
  login: function (req, res) {
    res.render('login', { title: 'Log in' });
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      console.log(errores.array());
    } else {
      console.log('No hay errores');
    }
  },
  logout: function (req, res) {
    res.redirect('logout');
  },
  signup: function (req, res) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      let userId = req.body;

      userId = usersModel.create(user);

      res.redirectd(`/users/${userId}`);
    } else {
      res.render('/users/create', { errors: errors.mapped(), old: req.body });
    }
  },
  edit: function (req, res) { },
  create: function (req, res) {
    res.send(req.body)
   },
  update: function (req, res) { },
  delete: function (req, res) { },
  destroy: function (req, res) { },
};

module.exports = usersController;
