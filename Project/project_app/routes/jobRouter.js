const express = require('express');

//add router
const jobRouter = express.Router();

//import the jobController
const jobController = require('../controllers/jobController');

//handle the get request
jobRouter.get('/', (req, res) => jobController.getAllJob(req, res));
jobRouter.get('/:keyword', (req, res) => jobController.getJobByKeyword(req, res));

//export the router
module.exports = jobRouter;
