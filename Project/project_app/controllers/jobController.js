//provide the controller a link to the job model for job data
var job_data = require('../models/job');


//function for searching all jobs
const getAllJob = (req, res) => {
    job_data.find({}, function(err, result) {
      var jobMap = {};

      jobs.forEach(function(job) {
        jobMap[job._id] = job;
      })

      res.send(jobMap);
    })
}



//function for getting a particular type of jobs
const getJobByKeyword = (req, res) => {
    job_data.find({$text: {$search: {"$regex": req.params.keyword}}});
}



//function for getting jobs by a tag
const getJobByTag = (req, res) => {
    job_data.find({"jobTag" : req.params.jobTag});

}

//function for getting jobs by area
const getJobByArea = (req, res) => {
    job_data.find({"jobArea" : req.params.jobArea}});

}


//export the functions
module.exports = {
    getAllJob,
    getJobByKeyword,
    getJobByTag,
    getJobByArea,
}
