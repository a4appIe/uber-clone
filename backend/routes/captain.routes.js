const express = require("express");
const router = express.Router();
const captainController = require("../controllers/captain.controller");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth.middleware");

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
    body("vehicle.color").trim().isLength({ min: 3 }).withMessage("Vehicle color must be at least 3 characters long"),
    body("vehicle.plate").trim().isLength({ min: 3 }).withMessage("Plate number must be at least 3 characters long"),
    body("vehicle.capacity").isNumeric().withMessage("Vehicle capacity must be a number"),
    body("vehicle.vehicleType").isIn(["car", "motorcycle", "auto"]).withMessage("Invalid vehicle type"),
  ],
  captainController.registerCaptain
);

router.post(
    "/login",
    [
      body("email").trim().isEmail().withMessage("Invalid email address"),
      body("password")
        .trim()
        .isLength({ min: 3 })
        .withMessage("Invalid Password"),
    ],
    captainController.loginCaptain
  );

router.get("/profile", authMiddleware.authCaptain, captainController.getCaptainProfile);

router.get("/logout", authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;
