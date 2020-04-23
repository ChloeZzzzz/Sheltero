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

// GET home page
userRouter.get('/', (req, res) => {
    // display different page according to the login state
    if (req.user != null) {
        res.render("home.ejs", {name: '<H2>'+ req.user.email+'</H2><br/><a href = "/logout">Logout</a>'})
    } else {
        res.render("home.ejs", {name: '<a href = "/login">Login</a><br/><a href = "/signup">Signup</a>'})
    }
})

// GET log in page
userRouter.get('/login', (req, res) => {
    // display different page according to the login state
    if (req.user == null) {
        res.render("login.ejs")
    } else {
        res.redirect("/")
    }
});

// GET sign up page
userRouter.get('/signup', (req, res) => {
    // display different page according to the login state
    if (req.user == null) {
        res.render("signup.ejs")
    } else {
        res.redirect("/")
    }
});

// GET log out
userRouter.get('/logout', (req, res) => {
    // only allow the logout when a user is logging in
    if (req.user) {
        req.logOut()
        res.render("logout.ejs")
    } else {
        res.redirect('/')
    }
})

// POST log in
userRouter.post('/login', passport.authenticate('local', {
    successRedirect: '../',
    failureRedirect: '/login',
    failureFlash: true
}))

// POST sign up
userRouter.post('/signup', userController.userSignup);

module.exports = userRouter;