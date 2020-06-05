const email_validator = require('email-validator');
const bcrypt = require('bcrypt');

const Users = require('../models/users.js');
const mongoose = require('mongoose');

const getUserHomepage = (req, res) => {
    if (req.user) {
        console.log("== REQ.USER ==");
        console.log(req.user);
        res.json("happy");
        return res.end();
    } else {
        res.redirect('../');
    }
}

const successLogin = (req, res) => {
    if (req.session) {
        res.json(req.session);
        return res.end();
    } else {
        res.json("successLogin no req.user");
        return res.end();
    }
}

const failureLogin = (req, res) => {
    res.json("failureLogin")
    return res.end();
}

const getUserSignup = (req, res) => {
    if (req.user) {
        res.json("getUserSignup req.user true!");
    } else {
        res.render("signup.ejs");
    }
}

const getUserLogin = (req, res) => {
    res.render("login.ejs");
}

const getUserLogout = (req, res) => {
    if (req.session.passport.user) {
        req.logOut();
        res.render("logout.ejs");
    } else {
        res.redirect('../')
    }
}

// post user sign up
// -> encrypt the user's password before store it into the database for security issues
// -> has to use async since have to wait for encryption completet
const postUserSignup = async (req, res) => {
    console.log(req);
    try {
        if (await email_validator.validate(req.body.email) && await emailNotSignedUp(req.body.email)) {
            const cryptedpw = await bcrypt.hash(req.body.password, 10);
            const user = new Users({
                "_id" : new mongoose.Types.ObjectId(),
                "gender" : req.body.gender,
                "first_name" : req.body.first_name,
                "last_name": req.body.last_name,
                "email" : req.body.email,
                "password" : cryptedpw,
                "contact": req.body.contact,
                "company_name": req.body.company_name,
                "company_addr": req.body.company_addr,
                "type" : req.body.type,
                "resume": {job: 'programmer'}
            });

            user.save().then(result => {
                console.log("== SAVED TO DATABASE ==")
                console.log(result);
            }).catch(err => {
                console.log(user);
                console.log(err);
            });

            res.json('success');
        } else {
            console.log("Invalid email or email already signed up!");
            res.json('fail: invalid email or email already signed up');
            //res.redirect('signup');
        }

    } catch (e) {
        console.log("Failed to Sign up");
        console.log(e);
        res.json('fail')
        //res.redirect('signup');
    }
}

// a helper function, checks whether this email is exist in the database
const emailNotSignedUp = async (email) => {
    const user = await Users.findOne({'email': email}, (err, result) => {
        console.log("inside find function");
        if (err) {
            console.log("==ERROR==");
            console.log(err);
        }
        console.log("==RESULT==");
        console.log(result);
    })
    console.log("==USER==");
    console.log(user);
    if (user == null) {
        return true;
    }
    return false;
}

const postUpdateUser = async(req, res) => {
    if (req.user) {
        const userData = await Users.find({"email": req.user.email}, (err, result) => {
            if (err) {
                console.log("==ERROR==");
                console.log(err);
            }
            console.log("==RESULT==");
            console.log(result);
        });
        if (req.body.contact != null) {
            userData.contact = req.body.contact;
        }
        if (req.body.company_name != null) {
            userData.company_name = req.body.company_name;
        }
        if (req.body.company_addr != null) {
            userData.company_addr = req.body.company_addr;
        }
        userData.save();

    }
    else {
      res.redirect("login.ejs");
    }
}

const getUpdateUser = (req, res) => {
    if (req.user) {
        res.render('user-update.ejs', {useremail: req.user.email});
    } else {
        res.redirect('login.ejs');
    }
}

module.exports = {
    getUserHomepage,
    getUserSignup,
    getUserLogin,
    getUserLogout,
    postUserSignup,
    //postUpdateUser,
    successLogin,
    failureLogin,
}
