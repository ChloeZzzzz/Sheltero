const email_validator = require('email-validator');
const bcrypt = require('bcrypt');

const Users = require('../models/users.js');
const mongoose = require('mongoose');

const getUserHomepage = (req, res) => {
    console.log(req);
    console.log("HELP ME PLEASE");
    console.log(res);
    const message = req.flash("loginMessage");
    console.log(message);
    console.log(message === "Successful login");
    if (message == "Successful login") {
        res.json({"user":req.user,
                    "message": message});
        return res.end();
    }
    else{
        res.json({"message": message})
        return res.end();
    }
}

const getUserSignup = (req, res) => {
    if (req.user) {
        res.json(req.user);
        return res.end();
    }
    else {
        return res.render("signup.ejs");
    }
}

const getUserLogin = (req, res) => {
    if (req.user) {
        res.json(req.user);
        return res.end();
    }
    else {
        res.json({"message": req.flash("loginMessage")});
        return res.end();
    }
}

const getUserLogout = (req, res) => {
    if (req.user) {
        return req.logOut();
    } 
    else {
        return res.redirect('../')
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
      return res.redirect("login.ejs");
    }
}

const getUpdateUser = (req, res) => {
    if (req.user) {
        return res.render('user-update.ejs', {useremail: req.user.email});
    } else {
        return res.redirect('login.ejs');
    }
}

module.exports = {
    getUserHomepage,
    getUserSignup,
    getUserLogin,
    getUserLogout,
    //postUpdateUser,
}
