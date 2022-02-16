let indexController = {
  index: (req, res) => {
    res.render('index', { title: 'Husqvarna Motorcycles' });
  },
};

module.exports = indexController;
