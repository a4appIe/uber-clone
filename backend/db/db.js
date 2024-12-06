const mongoose = require("mongoose");
require("dotenv").config();
const { MONGO_URI } = process.env;

function connectToDb() {
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log("Error connecting to DB: ", err);
    });
}

module.exports = connectToDb;
