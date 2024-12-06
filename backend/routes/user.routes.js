const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/user.controller");

router.post(
  "/register",
  [
    body("email").trim().isEmail().withMessage("Invalid email address"),
    body("fullName.firstName")
      .trim()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Password must be at least 3 characters long"),
  ],
  userController.registerUser
);

router.post("/login", [
  body("email").trim().isEmail().withMessage("Invalid email address"),
  body("password")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Invalid Password"),
], userController.loginUser);

module.exports = router;
