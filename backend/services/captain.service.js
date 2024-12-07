const captainModel = require("../models/captain.model");

module.exports.registerCaptain = async (
  { fullName, email, password, vehicle }
) => {
  try {
    if (!fullName || !email || !password || !vehicle) {
      throw new Error("Please fill in all fields");
    }
    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
      throw new Error("Email already exists");
    }
    const captain = await captainModel.create({
      fullName,
      email,
      password,
      vehicle,
    });
    return captain;
  } catch (error) {
    console.log(error)
  }
};
