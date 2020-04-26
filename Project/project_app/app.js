const express = require('express')
//const flash = require('express-flash')
const app = express();

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

app.listen(PORT, () => {
    console.log('Sheltero is listening on port ' + PORT)
});
