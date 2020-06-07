const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./uploads/");
    },
    filename :function(req, file, callback) {
        callback(null, new Date().toISOString().split(":").join("-") + file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null, true);
    }
    else {
        //reject a file
        callback(new Error("not correct type!"), false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
    fileSize: 1024 * 1024 * 5 //only accepting filesize up to 5MB
    },
    fileFilter: fileFilter,
});

//add router
const jobRouter = express.Router();

//import the jobController
const jobController = require('../controllers/jobController');

jobRouter.use(express.urlencoded( {extended: false}));
//handle the get request
jobRouter.get('/', (req, res) => jobController.getAllJob(req, res));
jobRouter.get('/byKeyword/:keyword?', (req, res) => jobController.getJobByKeyword(req, res));
jobRouter.get('/byTag/:jobTag?', (req, res) => jobController.getJobByTag(req, res));
jobRouter.get('/byArea/:jobArea?', (req, res) => jobController.getJobByArea(req, res));
jobRouter.get('/job-posting', (req, res) => jobController.getPostJob(req, res));
jobRouter.get('/apply-job', (req, res) => jobController.getApplyJob(req, res));
jobRouter.get('/jobInfo/:_id?', jobController.getJobById);

//handle delete

jobRouter.delete('/job-deleting/:_id?', (req, res) => jobController.deleteJob(req, res));
//handle post
jobRouter.post('/job-posting', upload.single('jobImg'), (req, res) => jobController.postJob(req, res));
jobRouter.post('/apply-job', (req, res) => jobController.postApplyJob(req, res));

//export the router
module.exports = jobRouter;
