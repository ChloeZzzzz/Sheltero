const express = require('express');
//const flash = require('connect-flash');
//require('dotenv').config();
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const flash = require('connect-flash-plus');
const jwt = require('jsonwebtoken');
const morgan = require("morgan");
const passport = require("passport");
const session = require("express-session");


app.use(cors({
    credentials:true,
    origin: 'https://sheltero.herokuapp.com',
}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./models');

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

//cookies parsing
app.use(session({
    secret:"sheltero_inf_top_secret_secret_code"
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


// set the view engine to ejs
app.set('view engine', 'ejs');

// get the user Router for login and signin
const userRouter = require('./routes/userRouter');
const jobRouter = require('./routes/jobRouter');

app.use(morgan('dev'));

app.use('/user', userRouter);
app.use('/job-search', jobRouter);

//app.use('/uploads', express.static('uploads'));


// GET homepage
app.get('/', (req, res) => {
    if (req.user) {
        res.json({"user":req.user,
                    "message": req.flash("loginMessage")});
        return res.end();
    }
    return res.render("home.ejs");
});

// ==== Error Handling ====

// 404 Not Found
app.use((req, res, next) => {
    const error = new Error('404 Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: error
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Sheltero is listening on port ' + PORT)
});
