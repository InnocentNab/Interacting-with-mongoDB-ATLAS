// const mongoose = require("mongoose");
// require("dotenv").config();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection_Url = process.env.MongoDB_Connecion_Url;

function connectToMongoDB() {
  mongoose.connect(Connection_Url);

  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB succesfully");
  });

  mongoose.connection.on("error", (err) => {
    console.log(err);
    console.log(`This is the error: ${err}`);
  });
}

export default connectToMongoDB;

// module.exports = { connectToMongoDB };
