var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

router.get('/login', usersController.login);
router.post('/logout', usersController.logout);
router.get('/signup', usersController.signup);

module.exports = router;
