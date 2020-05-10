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
    const author = authors.find(author=> author.id ===req.body.author_id);

    if(author){
        author.first_name = req.body.author_fn;
        author.last_name = req.body.author_ln;
    }
    else{
        authors.push({
            id:req.body.author_id,
            first_name:req.body.author_fn,
            last_name:req.body.author_ln
        })
    }

    console.log(authors);

    res.redirect('/');
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    addAuthor,
};