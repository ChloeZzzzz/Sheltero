const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
      _id : mongoose.Schema.Types.ObjectId,
      jobTitle: String,
      salary: Number,
      creditLevel: Number,
      jobDetail: String,
      companyID: String,
      jobTag: String,
      contactEmail: String,
      jobArea: String,
      jobImg: String,
});

JobSchema.index({ "$**": "text" });

module.exports = mongoose.model("Job", JobSchema);
