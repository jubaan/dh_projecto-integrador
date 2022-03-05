let productsController = {
  list: (req, res, next) => {

  },
  favorites: (req, res, next) => {
    res.render("favorites");
  },
  create: (req, res, next) => {
    const file = req.file;
    if (!file) {
      const error = new Error("Please upload a file");
      error.httpStatusCode = 400;
      return next(error);
    }
    res.send(file);
  },
  upload: (req, res, next) => {},
};

module.exports = productsController;
