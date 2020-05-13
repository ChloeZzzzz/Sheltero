// reference: https://www.youtube.com/watch?v=-RCnNyD0L-s
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const users = require('../models/users.js');

const initializePassport = (passport) => {
    // initial set up for using passport
    const authenticateUser = async (email, password, done) => {
        const user = await users.findOne({'email': email}, (err, result) => {
            console.log("== INSIDE PASSPORT ==")
            if (err) {
                console.log("==ERROR==")
                console.log(err)
            }
            console.log("==RESULT==")
            console.log(result)
        })
        if (!user) { // invalid email address
            console.log("Can't find email address")
            return done(null, false, { message: "Can't find email address"});
        }
        try {
            console.log("===user._id===")
            console.log(user._id);
            // valid email address -> check password
            if (await !bcrypt.compare(password, user.password)) {
                console.log("Wrong password")
                return done(null, false, { message: "Wrong password"});
            } else {
                console.log("Log in successed");
                return done(null, user);
            }
        } catch (e) {
            return done(e);
        }
        
    }

    passport.use(new LocalStrategy({usernameField : 'email'}, authenticateUser))
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    passport.deserializeUser((_id, done) => {
        done(null, users.find({'_id': _id}));
    });
}

module.exports = initializePassport;