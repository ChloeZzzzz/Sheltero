//provide the controller a link to the job model for job data
var job_data = require('../models/job');

//function for searching all jobs
const getAllJob = (req, res) => {
    res.send(job_data);
}

//function for getting a particular type of jobs
const getJobByKeyword = (req, res) => {
    const output = [];
    job_data.forEach(job => addJob(output, job, req, "keyword"));

    if (output.length != 0) {
        res.send(output);
    }
    else {
        res.send("no records including " + req.query.keyword);
    }
}

function findKeyword(job, req) {
    for (var property in job) {
        if (job[property].includes(req.query.keyword)) {
            return true;
        }
    }
    return false;
}


function addJob(output, job, req, kwd) {

    if ((kwd == "keyword") && findKeyword(job, req)) {
        output.push(job);
    }
    else if (kwd == "jobTag") {
        if (job.jobTag === req.query.jobTag) {
            output.push(job);
        }
    }
    else if (kwd == "jobArea") {
         if (job.jobArea === req.query.jobArea) {
            output.push(job);
         }
    }
}


//function for getting jobs by a tag
const getJobByTag = (req, res) => {
    const output = [];

    job_data.forEach(job => addJob(output, job, req, "jobTag"));

    if (output.length != 0) {
        res.send(output);
    }
    else {
        res.send("no records matching this tag: " + req.params.jobTag);
    }
}

//function for getting jobs by area
const getJobByArea = (req, res) => {
    const output = [];

    job_data.forEach(job => addJob(output, job, req, "jobArea"));

    if (output.length != 0) {
        res.send(output);
    }
    else {
        res.send("no records in this area: " + req.params.jobArea);
    }

}


//export the functions
module.exports = {
    getAllJob,
    getJobByKeyword,
    getJobByTag,
    getJobByArea,
}
