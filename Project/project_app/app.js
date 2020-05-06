const express = require('express');
const mongoose = require('mongoose');
//const flash = require('express-flash')
const app = express();


const mongoDB_url = "mongodb+srv://Shetero_20:sheltero20@cluster0-yekum.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB_url, {useMongoClient: true});
const database = mongoose.connection;

database.on('error', console.error.bind(console, 'MongoDB connection error:'));

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

app.listen(process.env.PORT || 3000, () => {
    console.log('Sheltero is listening on port ' + PORT)
});
