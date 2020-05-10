const express = require('express');
const app = express();
const fs = require("fs");

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');

app.get('/', (req, res)=>{
    fs.readFile("home.html", null, (err, data)=>{
        if (err){
            res.send("something went wrong :(");
        }
        else{
            res.send(data);
        }
        res.end();
    });
});

app.use('/author-management', authorRouter);

app.use('/books', bookRouter);

app.listen(3000, ()=>{
    console.log('the library app is listening on port 3000!');
});
