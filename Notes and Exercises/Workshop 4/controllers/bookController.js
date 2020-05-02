var books = require('../models/books');

function getAllBooks(req, res){
    res.send(books);
}

function searchAuthor(req, res){
    const book = books.find(book => book.authors_id.find(ids => ids === req.params.author_id));

    if(book){
        res.send(book);
    }
    else{
        res.send([]);
    }
}

module.exports = {
    getAllBooks,
    searchAuthor,
}