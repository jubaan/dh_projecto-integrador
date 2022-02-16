var express = require('express');
var router = express.Router();
let usersController = require('../controllers/usersController');

router.get('/sign-up', usersController.signUp);
router.get('/sign-in', usersController.signIn);

module.exports = router;
