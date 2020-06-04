const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Users = require('../models/users.js');

const passportJWT = require("passport-jwt");
const JwtStrategy = passportJWT.Strategy;
const ExtractJwt = passportJWT.ExtractJwt;

module.exports = (passport)=>{
    passport.use("cookie-login", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true},
        (req, email, password, done)=>{
            process.nextTick(()=>{
                Users.findOne({'email':email},(err, user)=>{
                    if(err){
                        return done(err);
                    }
                    else if(!user){
                        return done(null, false, req.flash("loginMessage", "No user found"));
                    }
                    else if(!user.validatePassword(password)){
                        return done(null, false, req.flash("loginMessage", "Wrong password"));
                    }
                    else{
                        req.session.email = email;
                        return done(null, user, req.flash("loginMessage", "Successful login"));
                    }
                })
            })
        }
    ));

    passport.use("local-signup", new LocalStrategy({
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true},
        (req, email, password, done)=>{
            Users.findOne({'email': email},(err, existsuser)=>{
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

    passport.use(new LocalStrategy({usernameField : 'email'}, authenticateUser));
                    user.save((err)=>{
                        if(err){
                            throw err;
                        }
                        return done(null,user);
                    });
                    req.session.email=email;
                }
            });
        })
    );
    
    passport.serializeUser((user, done) => {
        done(null, user);
        done(null, user._id);
    });
    passport.deserializeUser(async (_id, done) => {
        const user = await Users.findById(_id);
        done(null, user);
        Users.findById(_id, (err,user) =>{
            done(null, user);
        })
    });
    
    let opts = {}

    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'sheltero_inf_top_secret_secret_code';
    passport.use('jwt', new JwtStrategy(opts,(payload, done)=>{
        Users.findOne({'email': payload.body._id}, (err,user)=>{
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
