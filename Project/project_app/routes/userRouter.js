const express = require('express');
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

const users = require('../models/users.js') // get the array db
const userController = require('../controllers/userController')

const initPassport = require('../config/passport')
initPassport(passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

const userRouter = express.Router();

// make the form variable accessable by the get and post method
userRouter.use(express.urlencoded( {extended: false}))

userRouter.use(flash())
userRouter.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false
}) )
userRouter.use(passport.initialize())
userRouter.use(passport.session())


// GET log in page
userRouter.get('/login', (req, res) => {
    res.render("login.ejs")
});

// GET sign up page
userRouter.get('/signup', (req, res) => {
    res.render("signup.ejs")
});

// POST log in
userRouter.post('/login', passport.authenticate('local', {
    successRedirect: '../',
    failureRedirect: '/login',
    failureFlash: true
}))

// POST sign up
userRouter.post('/signup', userController.userSignup);

module.exports = userRouter;