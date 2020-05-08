const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
      _id : mongoose.Schema.Types.ObjectId,
      jobTitle: String,
      salary: Number,
      creditLevel: Number,
      jobDetail: String,
      companyID: String,
      jobTag: String,
      contactEmail: String,
      jobArea: String,
})

module.exports = mongoose.model("Job", jobSchema);
