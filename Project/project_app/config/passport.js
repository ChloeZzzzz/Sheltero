// reference: https://www.youtube.com/watch?v=-RCnNyD0L-s
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const Users = require('../models/users.js');

const initializePassport = (passport) => {
    // initial set up for using passport
    const authenticateUser = async (email, password, done) => {
        const user = await Users.findOne({'email': email}, (err, result) => {
            console.log("== INSIDE PASSPORT ==")
            if (err) {
                console.log("==ERROR==")
                console.log(err)
            }
            console.log("==RESULT==")
            console.log(result)
        }).exec();
        if (!user) { // invalid email address
            console.log("Can't find email address")
            return done(null, false, { message: "Can't find email address"});
        }
        try {
            console.log("===user._id===");
            console.log(user._id);
            // valid email address -> check password
            if (await !bcrypt.compare(password, user.password)) {
                console.log("Wrong password");
                return done(null, false, { message: "Wrong password"});
            } else {
                console.log("Log in success");
                return done(null, user);
            }
        } catch (e) {
            return done(e);
        }
        
    }

    passport.use(new LocalStrategy({usernameField : 'email'}, authenticateUser));
    passport.serializeUser((user, done) => {
        done(null, user);
    });
    passport.deserializeUser((_id, done) => {
        done(null, Users.find({'_id': _id}));
    });
}

module.exports = initializePassport;