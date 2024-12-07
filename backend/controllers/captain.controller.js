const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const captainService = require("../services/captain.service");

module.exports.registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: errors.array(),
      });
    }
    const { fullName, email, password, vehicle } = req.body;
    const hashPassword = await captainModel.hashPassword(password);
    const captain = await captainService.registerCaptain({
      fullName,
      email,
      password: hashPassword,
      vehicle,
    });
    if (!captain) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }
    const token = captain.generateAuthToken();
    res.cookie("token", token);
    return res.status(201).json({
      success: true,
      message: "Captain registered successfully",
      captain,
      token,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
