const { validationResult } = require("express-validator");
// const usersModel

let usersController = {
  login: function (req, res) {
    res.render("login", { title: "Log in" });

    const errores = validationResult(req);

    if (!errores.isEmpty()) {
      console.log(errores.array());
    } else {
      console.log("No hay errores");
    }
  },
  processLogin: function (req, res, next) {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {

      for (let i = 0; i < users.length; i++) {
        if(users[i].email === req.body.email && bcrypt.compareSync(req.body.password, users[i].password)) {
          req.session.loggedUser = users[i];
          res.redirect("/");
        }

        if (users[i] == undefined) {
          return res.render('login', {errors: [{message: 'Incorrect email or password'}]});
        }
      }

    } else {
      res.render('login', { errors: errors.errors })
    }
  },
  logout: function (req, res) {
    res.redirect("logout");
  },
  signup: function (req, res) {
    let errors = validationResult(req);

    // bcrypt.hash(req.body.password, 10)

    if (!errors.isEmpty()) {
      let userId = req.body;

      userId = usersModel.create(user);

      res.redirectd(`/users/${userId}`);
    } else {
      res.render("/users/create", { errors: errors.mapped(), old: req.body });
    }
  },
  edit: function (req, res) {},
  create: function (req, res) {
    res.send(req.body);
  },
  update: function (req, res) {},
  delete: function (req, res) {},
  destroy: function (req, res) {},
};

module.exports = usersController;
