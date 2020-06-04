const express = require('express');
const userRouter = express.Router();
//const flash = require('connect-flash');
const passport = require('passport');
const session = require('express-session');

const initPassport = require('../config/passport');
initPassport(passport);

//userRouter.use(flash())

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

// GET user update
//userRouter.get('/updateUser', (req, res) => userController.getUpdateUser(req, res));

// ======== POST request ========
userRouter.post('/signup', passport.authenticate("local-signup",
                                    {failureFlash:true}));

userRouter.post('/login', passport.authenticate("cookie-login", 
                                    { successRedirect: './',
                                    failureRedirect: './login',
                                    failureFlash:true}
))

//userRouter.post('/updateUser', userController.postUpdateUser);

module.exports = userRouter;
