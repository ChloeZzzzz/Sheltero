const email_validator = require('email-validator')
const bcrypt = require('bcrypt')

const users = require('../models/users.js') // get the array db

const getUserHomepage = (req, res) => {
    if (req.user) {
        res.render('home-auth.ejs', {useremail: req.user.email})
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
        req.logOut()
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
        if (email_validator.validate(req.body.email) && emailNotSignedUp(req.body.email)) {
            const cryptedpw = await bcrypt.hash(req.body.password, 10);
            users.push({
                "id" : Date.now().toString(),
                "first_name" : req.body.first_name,
                "last_name": req.body.last_name,
                "role" : req.body.role,
                "email" : req.body.email,
                "password" : cryptedpw
            })
            res.redirect('login');
        } else {
            console.log("Invalid email or email already signed up!");
            res.redirect('signup');
        }

    } catch (e) {
        console.log("Failed to Sign up")
        console.log(e)
        res.redirect('signup');
    }
}

// a helper function, checks whether this email is exist in the database
const emailNotSignedUp = (email) => {
    var user = users.find(user => user.email === email);
    if (user == null) {
        return true
    }
    return false
}

module.exports = {
    getUserHomepage,
    getUserSignup,
    getUserLogin,
    getUserLogout,
    postUserSignup
}