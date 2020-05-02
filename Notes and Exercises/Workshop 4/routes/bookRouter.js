const express = require('express');
const bookRouter = express.Router();

const bookController = require('../controllers/bookController');

bookRouter.get('/', (req, res)=>{
    bookController.getAllBooks(req, res);
});

bookRouter.get('/:author_id', (req,res) =>{
    bookController.searchAuthor(req,res);
});

module.exports = bookRouter;