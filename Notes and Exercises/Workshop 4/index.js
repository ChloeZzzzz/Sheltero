const express = require('express');
const app = express();
const fs = require("fs");
const path = require('path');

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');


app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + "/home.html"));
});

app.use('/author-management', authorRouter);

app.use('/books', bookRouter);

app.listen(3000, ()=>{
    console.log('the library app is listening on port 3000!');
});
