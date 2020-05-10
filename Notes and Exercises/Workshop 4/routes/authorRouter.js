const express = require('express');
const authorRouter = express.Router();

const authorController = require('../controllers/authorController.js');

authorRouter.get('/', (req,res)=>{
    authorController.getAllAuthors(req,res);
});

authorRouter.get('/:id',(req,res)=>{
    authorController.getAuthorById(req,res);
});

authorRouter.post("/add_author", (req,res)=>{
    authorController.addAuthor(req,res);
})

module.exports = authorRouter;