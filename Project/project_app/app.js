const express = require('express');
//const flash = require('express-flash')
require('dotenv').config();
const app = express();
require('./models');


const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
//app.use(flash())
// set the view engine to ejs
app.set('view engine', 'ejs');

// get the user Router for login and signin
const userRouter = require('./routes/userRouter');
const jobRouter = require('./routes/jobRouter');

app.use('/user', userRouter)

app.use('/job-search', jobRouter);

// GET homepage
app.get('/', (req, res) => {
    res.render("home.ejs");
})

// Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status(404);
    next(error);
})

app.use((error, req, res, next) => {
    res.status(err.status);
    res.log("gooodsofsdfsdfsdfsdfsdf 404 !!!");
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Sheltero is listening on port ' + PORT)
});
