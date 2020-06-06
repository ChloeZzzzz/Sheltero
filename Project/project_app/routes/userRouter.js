const express = require('express');
const userRouter = express.Router();
//const flash = require('connect-flash');
const passport = require('passport');

//userRouter.use(flash())

const userController = require('../controllers/userController')

// make the form variable accessable by the get and post method
userRouter.use(express.urlencoded( {extended: false}))

// ======== GET request ========

// GET homepage-authorized
/*
userRouter.get('/', 
    passport.authenticate("check session", {failureFlash:true},userController.getUserHomepage));
*/
userRouter.get('/', userController.getUserHomepage);
// GET user signup
userRouter.get('/signup', userController.getUserSignup);

// GET user lognin
userRouter.get('/login', userController.getUserLogin);

// GET user logout
userRouter.get('/logout', userController.getUserLogout);

userRouter.get('/successlogin', userController.successLogin);
userRouter.get('/failurelogin', userController.failureLogin);
userRouter.get('/successsignup', userController.successSignup);
userRouter.get('/failuresignup', userController.failureSignup);

// GET user update
//userRouter.get('/updateUser', (req, res) => userController.getUpdateUser(req, res));

// ======== POST request ========
userRouter.post('/signup', 
    passport.authenticate("local-signup", { successRedirect: './successsignup',
                                            failureRedirect: './failuresignup',
                                            failureFlash:true}));

userRouter.post('/login',
    passport.authenticate("cookie-login", { successRedirect: './successlogin',
                                            failureRedirect: './failurelogin',
                                            failureFlash:true}
))

//userRouter.post('/updateUser', userController.postUpdateUser);

module.exports = userRouter;
