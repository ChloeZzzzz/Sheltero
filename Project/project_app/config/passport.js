// reference: https://www.youtube.com/watch?v=-RCnNyD0L-s
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const users = require('../models/users');

const initializePassport = (passport) => {
    // initial set up for using passport
    const authenticateUser = async (email, password, done) => {
        var user = users.find(user => user.email === email);
        if (!user) { // invalid email address
            console.log("Can't find email address")
            return done(null, false, { message: "Can't find email address"});
        }
        try {
            // valid email address -> check password
            if (await !bcrypt.compare(password, user.password)) {
                console.log("Wrong password")
                return done(null, false, { message: "Wrong password"});
            }
            console.log("Log in successed");
            return done(null, user);
        } catch (e) {
            return done(e);
        }
        
    }

    passport.use(new LocalStrategy({usernameField : 'email'}, authenticateUser))
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        done(null, users.find(user => user.id === id));
    });
}

module.exports = initializePassport;