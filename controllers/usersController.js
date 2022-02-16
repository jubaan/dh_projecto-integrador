let usersController = {
  signIn: function (req, res) {
    res.render('login', { title: 'Log in' });
  },
  signUp: function (req, res) {
    res.render('login', { title: 'Log in' });
  },
};

module.exports = usersController;