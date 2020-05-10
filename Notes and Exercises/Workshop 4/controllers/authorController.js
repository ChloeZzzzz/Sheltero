var authors = require('../models/author');

function getAllAuthors(req,res){
    res.send(authors);
}

function getAuthorById(req,res){
    const author = authors.find(author => author.id === req.params.id);

    if(author){
        res.send(author);
    }
    else{
        res.send([]);
    }
}

function addAuthor(req,res){
    console.log(req.body.author_name);
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
};