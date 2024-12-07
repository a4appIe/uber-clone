const userModel = require("../models/user.model");

module.exports.createUser = async ({ fullName, email, password }, res) => {
  try {
    // Validate input
    if (!fullName || !email || !password) {
      throw new Error("Please fill in all fields");
    }

    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      throw new Error("Email already exists");
    }

    const user = await userModel.create({
      fullName,
      email,
      password,
    });

    return user;
  } catch (error) {
    console.log(error);
  }
};
