var express = require("express");
var router = express.Router();
let usersController = require("../controllers/usersController");
const { check } = require("express-validator");

// Validations
const validateSignUpForm = [
  check("username").notEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("Email is required"),
  check("password").notEmpty().withMessage("Password is required"),
  check("confirmPassword").notEmpty().withMessage("Confirm Password is required"),
]
router.get("/login", usersController.login);
router.post("/login", usersController.login);
router.post("/logout", usersController.logout);
router.get("/signup", usersController.signup);
router.post("/create", validateSignUpForm, usersController.create);

module.exports = router;
