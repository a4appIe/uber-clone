const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: "First name is required",
      minlength: [3, "First name must be at least 3 characters long"],
    },
    lastName: {
      type: String,
    },
  },
  email: {
    type: String,
    required: "Email is required",
    unique: true,
  },
  password: {
    type: String,
    required: "Password is required",
    minlength: [6, "Password must be at least 6 characters long"],
    select: false,
  },
  socketId: {
    type: String,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this.id }, process.env.JWT_SECRET, {expiresIn: '24h'});
  return token;
};

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
