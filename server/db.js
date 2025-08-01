// db.js
const mongoose = require("mongoose");


const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://singhpriyansh1391:T9lY3pPSuK9RWSUZ@user.khewknm.mongodb.net/?retryWrites=true&w=majority&appName=User");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

module.exports = connectToMongoDB;
