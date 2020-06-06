const express = require('express');
const userRouter = express.Router();
const multer = require('multer');

//for uploading img
const storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./uploads/");
    },
    filename :function(req, file, callback) {
        callback(null, new Date().toISOString().split(":").join("-") + file.originalname);
    }
});

const fileFilter = (req, file, callback) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        callback(null, true);
    }
    else {
        //reject a file
        callback(new Error("not correct type!"), false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
    fileSize: 1024 * 1024 * 5 //only accepting filesize up to 5MB
    },
    fileFilter: fileFilter,
});

//const flash = require('connect-flash');
const passport = require('passport');

//userRouter.use(flash())

const userController = require('../controllers/userController')

// make the form variable accessable by the get and post method
userRouter.use(express.urlencoded( {extended: false}));

isAuthenticated = (req,res,next)=>{
    if(req.user)
       return next();
    else
       return res.status(401).json({
         error: 'User not authenticated'
       })
 
 }

// ======== GET request ========

// GET homepage-authorized
/*
userRouter.get('/',
    passport.authenticate("check session", {failureFlash:true},userController.getUserHomepage));
*/
userRouter.get('/', isAuthenticated, userController.getUserHomepage);
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
userRouter.get('/updateUser', userController.getUpdateUser);
userRouter.get('/applyingJob', userController.getApplyingJob);
userRouter.get('/postedJob', userController.getPostedJob);
userRouter.get('/approveApplication', userController.getApproveApplication)

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

userRouter.post('/updateUser', isAuthenticated,(req, res) => {upload.single('userImg');userController.postUpdateUser(req, res)});

module.exports = userRouter;
