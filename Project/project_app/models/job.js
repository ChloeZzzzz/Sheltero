const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
      _id : String,
      jobTitle: String,
      salary: Number,
      creditLevel: Number,
      jobDetail: String,
      company_ID: String,
      jobTag: String,
      contactEmail: String,
      jobArea: String,
      jobImg: String,
      applyingEmployeeEmail: {
          type: Array,
          "default": []
      }
});

JobSchema.index({ "$**": "text" });

module.exports = mongoose.model("Job", JobSchema);
