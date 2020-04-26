const express = require('express')
//const flash = require('express-flash')
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));
//app.use(flash())
// set the view engine to ejs
app.set('view engine', 'ejs');

// get the user Router for login and signin
const userRouter = require('/Project/project_app/routes/userRouter');
const jobRouter = require('/Project/project_app/routes/jobRouter');

app.use('/user', userRouter)

app.use('/job-search', jobRouter);

// GET homepage
app.get('/', (req, res) => {
    res.render("/Project/project_app/views/home.ejs");
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Sheltero is listening on port ' + PORT)
});
