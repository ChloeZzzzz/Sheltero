const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
      _id : mongoose.Schema.Types.ObjectId,
      first_name : String,
      last_name : String,
      email: String,
      password: String,
      type: String,
      resume: {jobs: String},
});


const User = mongoose.model("User", userSchema, "User");
module.exports = User;
