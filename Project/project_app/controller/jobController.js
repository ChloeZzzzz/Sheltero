//provide the controller a link to the job model for job data
var job_data = require('../models/job');

//function for searching all jobs
const getAllJob = (req, res) => {
    res.send(job_data);
}

//function for getting a particular type of jobs
const getJobByTag = (req, res) => {
    const output = [];

    job_data.forEach(job => addJob(output, job, req));

    if (output) {
        res.send(output);
    }
    else {
        res.send("no records");
    }
}

function addJob(output, job, req) {
    if (job.jobTag === req.params.jobTag) {
        output.push(job);
    }
}



//export the functions
module.exports = {
    getAllJob,
    getJobByTag,
}
