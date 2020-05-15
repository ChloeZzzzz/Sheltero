const email_validator = require('email-validator');
const bcrypt = require('bcrypt');

const Users = require('../models/users.js');
const mongoose = require('mongoose');

const getUserHomepage = async (req, res) => {
    if (req.user) {
        const user = await req.user.exec();
        console.log("== REQ.USER ==");
        console.log(user);
        console.log("++TEST++");
        console.log(user._id);
        res.render('home-auth.hbs', {useremail: user.email});
    } else {
        res.redirect('../');
    }
}

const getUserSignup = (req, res) => {
    if (req.user) {
        res.redirect('./');
    } else {
        res.render("signup.ejs");
    }
}

const getUserLogin = (req, res) => {
    if (req.user) {
        res.redirect('./');
    } else {
        res.render("login.ejs");
    }
}

const getUserLogout = (req, res) => {
    if (req.user) {
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
    try {
        if (await email_validator.validate(req.body.email) && await emailNotSignedUp(req.body.email)) {
            const cryptedpw = await bcrypt.hash(req.body.password, 10);
            const user = new Users({
                "first_name" : req.body.first_name,
                "last_name": req.body.last_name,
                "email" : req.body.email,
                "password" : cryptedpw,
                "contact": req.body.contact,
                "company_name": req.body.company_name,
                "company_addr": req.body.company_addr,
                "type" : req.body.role,
                "resume": {job: 'programmer'}
            });
            user.save().then(result => {
                console.log("== SAVED TO DATABASE ==")
                console.log(result);
            }).catch(err => {
                console.log(err);
            });
            res.redirect('login');
        } else {
            console.log("Invalid email or email already signed up!");
            res.redirect('signup');
        }

    } catch (e) {
        console.log("Failed to Sign up");
        console.log(e);
        res.redirect('signup');
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

module.exports = {
    getUserHomepage,
    getUserSignup,
    getUserLogin,
    getUserLogout,
    postUserSignup
}
