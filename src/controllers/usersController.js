let usersController = {
  login: function (req, res) {
    res.render('login', { title: 'Log in' });
  },
  logout: function (req, res) {
    res.redirect('logout');
  },
  signup: function (req, res) {
    res.render('signUp', { title: 'Sign Up' });
  },
  show: function (req, res) { },
  edit: function (req, res) { },
  create: function (req, res) { },
  update: function (req, res) { },
  delete: function (req, res) { },
  destroy: function (req, res) { },
};

module.exports = usersController;
