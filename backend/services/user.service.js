const userModel = require("../models/user.model");

module.exports.createUser = async ({ fullName, email, password }, res) => {

  // Validate input
  if (!fullName || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Please fill in all fields",
    });
  }

  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  const user = await userModel.create({
    fullName: {
      firstName: fullName.firstName,
      lastName: fullName.lastName,
    },
    email,
    password,
  });

  return user;
};
