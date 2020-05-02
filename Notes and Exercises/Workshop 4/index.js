const express = require('express');
const app = express();

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');

app.get('/', (req, res)=>{
    res.send("<H1> Library System </H1>");
});

app.use('/author-management', authorRouter);

app.use('/books', bookRouter);

app.listen(3000, ()=>{
    console.log('the library app is listening on port 3000!');
});
