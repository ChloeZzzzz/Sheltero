//provide the controller a link to the job model for job data
var job_data = require('../models/job');

//function for searching all jobs
const getAllJob = (req, res) => {
    res.send(job_data);
}

//function for getting a particular type of jobs
const getJobByKeyword = (req, res) => {
    const output = [];

    job_data.forEach(job => addJob(output, job, req));

    if (output) {
        res.send(output);
    }
    else {
        res.send("no records");
    }
}

function findKeyword(job, req) {
    for (var property in job) {
        if (job[property].includes(req.params.keyword)) {
            return true;
        }
    }
    return false;
}


function addJob(output, job, req) {
    if (findKeyword(job, req)) {
        output.push(job);
    }
}


//export the functions
module.exports = {
    getAllJob,
    getJobByKeyword,
}
