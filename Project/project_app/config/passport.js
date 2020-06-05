const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Users = require('../models/users.js');
const mongoose = require('mongoose');

module.exports = (passport)=>{
    passport.use("cookie-login", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true},
        async (req, email, password, done)=>{
            try{
                await Users.findOne({'email':email}).then((user)=>{
                    if(!user){
                        return done(null, false, req.flash("loginMessage", "No user found"));
                    }
                    else if(!user.validatePassword(password)){
                        return done(null, false, req.flash("loginMessage", "Wrong password"));
                    }
                    else{
                        req.session.email = email;
                        return done(null, user, req.flash("loginMessage", "Successful login"));
                    }
                });
            }
            catch(err){
                return done(err);
            }
        }
    ));

    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true},
       async  (req, email, password, done)=>{
           if (req.user) {
               console.log("user already logged in");
               console.log(req.user);
               return done(null, user, req.flash("signupMessage", "User already logged in"));
           }
            try{
                await Users.findOne({'email': email}).then((existsuser)=>{
                    if(existsuser){
                        return done(null, false, req.flash("signupMessage", "Email already taken"));
                    }
                    else{
                        var user = new Users({
                            "_id" : new mongoose.Types.ObjectId(),
                            "gender" : req.body.gender,
                            "first_name" : req.body.first_name,
                            "last_name": req.body.last_name,
                            "contact": req.body.contact,
                            "company_name": req.body.company_name,
                            "company_addr": req.body.company_addr,
                            "type" : req.body.type,
                            "resume": {job: 'programmer'}
                        });
                        user.email = email;
                        user.password = user.generateHash(password);
                        user.save((err)=>{
                            if(err){
                                throw err;
                            }
                            return done(null, user, req.flash("signupMessage", "Signup Success"));
                        });
                        req.session.email=email;
                    }
                });
            }
            catch(err){
                done(err);
            }
        })
    );
    
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser(async (_id, done) => {
        Users.findById(_id, (err,user) =>{
            done(null, user);
        })
    });
}
