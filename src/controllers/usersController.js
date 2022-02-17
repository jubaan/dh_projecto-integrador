let usersController = {
  login: function (req, res) {
    res.render('login', { title: 'Log in' });
  },
  logout: function (req, res) {
    res.redirect('logout');
  },
  signup: function (req, res) {
    res.render('signUp', { title: 'Log in' });
  },
};

module.exports = usersController;
