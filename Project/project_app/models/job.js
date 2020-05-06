const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
      _id : mongoose.Schema.Types.ObjectId,
      jobTitle: String,
      salary: Number,
      credit_level: Number,
      jobdetail: String,
      companyID: String,
      jobTag: String,
      contact_email: String,
      jobArea: String,
})

module.exports = mongoose.model("Job", jobSchema);
