const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
      errors: errors.array(),
    });
  }
  const { fullName, email, password } = req.body;
  try {
    const hashPassword = await userModel.hashPassword(password);
    const user = await userService.createUser(
      {
        fullName,
        email,
        password: hashPassword,
      },
      res
    );

    const token = user.generateAuthToken();
    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      user: {
        user,
        token,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
      errors: errors.array(),
    });
  }
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const validateUser = user.comparePassword(password);
    if (!validateUser) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }
    const token = user.generateAuthToken();
    res.cookie("token", token);
    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        user,
        token,
      },
    });
  } catch (error) {}
};

module.exports.getUserProfile = async (req, res) => {
  const user = req.user;
  return res.status(200).json({
    success: true,
    message: "User profile fetched successfully",
    user,
  });
};

module.exports.logoutUser = async (req, res) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  try {
    await blacklistTokenModel.create({ token });
    res.status(200).json({
      success: true,
      message: "Logout successful",
    })
  } catch (error) {}
};
