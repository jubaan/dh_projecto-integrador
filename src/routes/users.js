var express = require("express");
var router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
let usersController = require("../controllers/usersController");
const { check } = require("express-validator");

// Validations
const validateSignUp = [
  check("username").notEmpty().withMessage("Username is required"),
  check("email").isEmail().withMessage("Email is required"),
  check("password").notEmpty().withMessage("Password is required"),
  check("confirmPassword")
    .notEmpty()
    .withMessage("Confirm Password is required")
    .custom(async (confirmPassword, { req }) => {
      const password = req.body.password;

      if (password !== confirmPassword) {
        throw new Error("Passwords do not match");
      }
    }),
];

const validatesLogin = [
  check("email").isEmail().withMessage("Email is required"),
  check("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];

router.get("/login", usersController.login);
// router.post("/login", validatesLogin, usersController.processlogin);
router.post("/logout", usersController.logout);
router.get("/signup", usersController.signup);
// router.post("/create", validateSignUp, usersController.create);

module.exports = router;
