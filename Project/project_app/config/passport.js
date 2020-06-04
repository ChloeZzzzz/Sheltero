// reference: https://www.youtube.com/watch?v=-RCnNyD0L-s
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users.js');
const mongoose = require('mongoose');

const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

module.exports = (passport)=>{
    passport.use("cookie-login", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true},
        (req, email, password, done)=>{
            try{
                Users.findOne({'email':email}).then((user)=>{
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
            catch (err){
                return req.json(err);
            }
        }
    ));

    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true},
        async (req, email, password, done)=>{
            try{
                await Users.findOne({'email': email}).then((err, existsuser)=>{
                    if(err){
                        return done(err);
                    }
                    else if(existsuser){
                        return done(null, false, req.flash("signupMessage", "Email already taken"));
                    }
                    else if(req.user){
                        var user = req.user;
                        user.email = email;
                        user.password = user.generateHash(password);
                        user.save((err)=>{
                            if(err){
                                throw err;
                            }
                            return done(null, user);
                        });
                        req.session.email=email;
                    }
                    else{
                        const user = new Users({
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
                            return done(null,user);
                        });
                        req.session.email=email;
                    }
                });
            }
            catch(err){
                throw err;
            }
        }
    ));
    
    passport.serializeUser((user, done) => {
        return done(null, user._id);
    });
    passport.deserializeUser(async (_id, done) => {
        try{
            Users.findById(_id).then((user) =>{
                return done(null, user);
            });
        }
        catch(err){
            throw err;
        }
    });
    
    let opts = {}

    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'sheltero_inf_top_secret_secret_code';
    passport.use('jwt', new JwtStrategy(opts,async (payload, done)=>{
        await Users.findOne({'email': payload.body._id}, (err,user)=>{
            if(err){
                return done(err,false);
            }
            else if (user){
                return done(null,user);
            }
            else{
                return done(null,false);
            }
        })
    }));
}

