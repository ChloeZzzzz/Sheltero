const email_validator = require('email-validator');
const bcrypt = require('bcrypt');

const Users = require('../models/users.js');
const mongoose = require('mongoose');

const getUserHomepage = async (req, res) => {
    let session = req.session;
    if (session.passport) {
        try {
            let user = await Users.findOne({"_id": session.passport.user}, (err, result) => {
                if (err) throw err;
                console.log(result);
            });
            res.json(user);
            return res.end();
        } catch(e) {
            console.log(e);
        }
        return res.end();
    }
    else{
        res.json("no user session");
        return res.end()
    }
}

const successSignup = (req, res) => {
    res.json(req.session);
    return res.end();
}

const failureSignup = (req, res) => {
    res.json(req.session)
    return res.end();
}

const successLogin = (req, res) => {
    res.json(req.session);
    return res.end();
}

const failureLogin = (req, res) => {
    res.json(req.session);
    return res.end();
}

const getUserSignup = (req, res) => {
    res.render("signup.ejs");
}

const getUserLogin = (req, res) => {
    res.render("login.ejs");
}

const getUserLogout = (req, res) => {
    if (req.session.passport.user) {
        req.logOut();
        req.session.destroy();
        res.render("logout.ejs");
    } else {
        res.redirect('../')
    }
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
        if (req.body.userImg != null) {
            userData.userImg = req.file.path;
        }
        if (req.body.description != null) {
            userData.description = req.body.description;
        }
        userData.save();

    }
    else {
      res.redirect("login.ejs");
    }
}

const getUpdateUser = async (req, res) => {
    let session = req.session;
    if (session.passport) {
        try {
            let user = await Users.findOne({"_id": session.passport.user}, (err, result) => {
                if (err) throw err;
                console.log(result);
            });
            res.render('user-update.ejs', {useremail: user.email});
            //res.json(user);
            return res.end();
        } catch(e) {
            console.log(e);
        }
    } else {
        res.redirect('login');
    }
}

module.exports = {
    getUserHomepage,
    getUserSignup,
    getUserLogin,
    getUserLogout,
    //postUpdateUser,
    successLogin,
    failureLogin,
    successSignup,
    failureSignup,
    getUpdateUser,
    postUpdateUser,
}
