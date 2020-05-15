const express = require('express');
const userRouter = express.Router();

const passport = require('passport');
const session = require('express-session');

const initPassport = require('../config/passport');
initPassport(passport);

userRouter.use(session({
    secret: "sheltero",
    resave: true,
    saveUninitialized: true
}))
userRouter.use(passport.initialize())
userRouter.use(passport.session())

const userController = require('../controllers/userController')

// make the form variable accessable by the get and post method
userRouter.use(express.urlencoded( {extended: false}))

// ======== GET request ========

// GET homepage-authorized
userRouter.get('/', userController.getUserHomepage);

// GET user signup
userRouter.get('/signup', userController.getUserSignup);

// GET user lognin
userRouter.get('/login', userController.getUserLogin);

// GET user logout
userRouter.get('/logout', userController.getUserLogout)

// ======== POST request ========
userRouter.post('/signup', userController.postUserSignup);

userRouter.post('/login', 
    passport.authenticate("local", { successRedirect: './',
                                     failureRedirect: './login'}
))

module.exports = userRouter;