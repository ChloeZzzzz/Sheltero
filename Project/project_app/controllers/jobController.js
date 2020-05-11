//provide the controller a link to the job model for job data
var job_data = require('../models/job');


//function for searching all jobs
const getAllJob = (req, res) => {
    job_data.find({}, function(err, jobs) {
        if (err) {
            res.send("cannot query any data");
        }
        res.json(jobs);
    });
}

//function for getting a particular type of jobs
const getJobByKeyword = (req, res) => {
    job_data.find({$text: {$search: {"$regex": req.params.keyword}}}, function(err, jobs) {
        if (err) {
            res.send("cannot query any data for this keyword");
        }
        res.json(jobs);
    });
}



//function for getting jobs by a tag
const getJobByTag = (req, res) => {
    job_data.find({"jobTag" : req.params.jobTag}, function(err, jobs) {
        if (err) {
            res.send("cannot query any data for this jobTag");
        }
        res.json(jobs);
    });
}

//function for getting jobs by area
const getJobByArea = (req, res) => {
    job_data.find({"jobArea" : req.params.jobArea}, function(err, jobs) {
        if (err) {
            res.send("cannot query any data for this jobArea");
        }
        res.json(jobs);
    });

}


//export the functions
module.exports = {
    getAllJob,
    getJobByKeyword,
    getJobByTag,
    getJobByArea,
}
