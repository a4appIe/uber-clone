const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");

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
