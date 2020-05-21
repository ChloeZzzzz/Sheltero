const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
      _id : String,
      jobTitle: String,
      salary: Number,
      creditLevel: Number,
      jobDetail: String,
      company_name: String,
      jobTag: String,
      contact: String,
      jobArea: String,
      jobImg: String,
});

JobSchema.index({ "$**": "text" });

module.exports = mongoose.model("Job", JobSchema);
