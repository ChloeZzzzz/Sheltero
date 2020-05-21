//provide the controller a link to the job model for job data
var job_data = require('../models/job');
const mongoose = require('mongoose');

//function for searching all jobs
const getAllJob = (req, res) => {
    job_data.find({}, function(err, jobs) {
        if (err) {
            res.send("database error");
        }
        res.json(jobs);
    });
}

//function for getting a particular type of jobs
const getJobByKeyword = (req, res) => {
    var keyword = req.params.keyword;
    var regex = RegExp("." + keyword + ".");
    job_data.find({$text : {$search : regex}}, function(err, jobs) {
        if (err) {
            res.send("database error");
        }
        res.json(jobs);
    })
}

//function for getting jobs by a tag
const getJobByTag = (req, res) => {
    job_data.find({"jobTag" : req.params.jobTag}, function(err, jobs) {
        if (err) {
            res.send("database error");
        }
        res.json(jobs);
    });
}

//function for getting jobs by area
const getJobByArea = (req, res) => {
    job_data.find({"jobArea" : req.params.jobArea}, function(err, jobs) {
        if (err) {
            res.send("database error");
        }
        res.json(jobs);
    });

}

const getPostJob =  (req, res) => {
    res.render("job-posting.ejs");
}

const postJob = async(req, res) => {
    try {
        const job = new job_data({
            "_id" : new mongoose.Types.ObjectId(),
            "jobTitle": req.body.jobTitle,
            "salary": req.body.salary,
            "creditLevel": req.body.creditLevel,
            "jobDetail": req.body.jobDetail,
            "companyID": req.body.companyID,
            "jobTag": req.body.jobTag,
            "contactEmail": req.body.contactEmail,
            "jobArea": req.body.jobArea,
            "jobImg": req.file.path,
        })
        console.log(req.jobImg);
        job.save().then(result => {
            console.log(result);
            console.log("job saved");
        }).catch(err => {
            console.log(err);
        });
    } catch (e) {
        console.log("job posting error");
        console.log(e);
    }
    res.redirect('../');
}

const getJobID = (req, res) => {
    job_data.find({"jobTitle": req.params.jobTitle}, function(err, jobs) {
        if (err) {
            res.send(err);
        }
        else {
            res.json(jobs._id);
        }
    })
}

//the delete method is not yet tested and finished
const deleteJob = (req, res) => {
    job_data.findByIdAndRemove({"_id": req.params._id}, function (err) {
        if (!err) {
            res.send("successfully deleted");
            //delete the image in uploads folder
        }
        else {
            res.send(err);
        }
    });
}

//export the functions
module.exports = {
    getAllJob,
    getJobByKeyword,
    getJobByTag,
    getJobByArea,
    getPostJob,
    postJob,
    getJobID,
    deleteJob,
}