const email_validator = require('email-validator');
const bcrypt = require('bcrypt');

const Users = require('../models/users.js');
const mongoose = require('mongoose');

const getUserHomepage = async (req, res) => {
    console.log(req.user);
    if (req.user) {
        res.json(req.user)
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
    if (req.session) {
        req.logOut();
        req.session.destroy();
        res.render("logout.ejs");
    } else {
        res.redirect('../')
    }
}

const postUpdateUser = async(req, res) => {
    let userData = await Users.findById(req.session.passport.user);
    if (req.user) {
        if (req.body.contact != null) {
            userData.contact = req.body.contact;
        }
        if (req.body.company_name != null) {
            userData.company_name = req.body.company_name;
        }
        if (req.body.company_addr != null) {
            userData.company_addr = req.body.company_addr;
        }
        if (req.body.description != null) {
            userData.description = req.body.description;
        }
        if (req.file != null) {
            userData.userImg = req.file.path;
        }
        if (req.body.first_name != null) {
            userData.first_name = req.body.first_name;
        }
        if (req.body.last_name != null) {
            userData.last_name = req.body.last_name;
        }
        userData.save();
        res.json("user profile updated");
        return res.end();
    }
    else {
      res.json("user haven't login");
      return res.end();
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
        res.redirect('./login');
    }
}

const getApplyingJob = async (req, res) => {
    let session = req.session;
    if (session.passport) {
        try {
            let user = await Users.findOne({"_id": session.passport.user}, (err, result) => {
                if (err) throw err;
                console.log(result);
            });
            if (user.type[0] == 'Employee') {
                res.json(user.applyingJobId);
                return res.end();
            } else {
                res.json("You don't have applying job as an employer");
                return res.end();
            }
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
    getApplyingJob,
}
