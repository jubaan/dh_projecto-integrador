const authMiddleware = function (req, res, next) {
  if (req.session.loggedUser) {
    next();
  } else {
    res.send("The user is not logged in");
  }
};

module.exports = authMiddleware;
