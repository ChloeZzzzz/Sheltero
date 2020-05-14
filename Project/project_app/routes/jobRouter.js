const express = require('express');

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
jobRouter.post('/job-posting', (req, res) => jobController.postJob(req, res));

//export the router
module.exports = jobRouter;
