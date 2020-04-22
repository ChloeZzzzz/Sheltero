const express = require('express');

//add router
const jobRouter = express.Router();

//import the jobController
const jobController = require('../controller/jobController');

//handle the get request
jobRouter.get('/', (req, res) => jobController.getAllJob(req, res));
jobRouter.get('/:jobTag', (req, res) => jobController.getJobByTag(req, res));

//export the router
module.exports = jobRouter;
