const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initPassport(passport, getUserByEmail, getUserById) {
    const authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        if (!user) {
            console.log("invalid email")
            return done(null, false, {message: "Invalid email address"})
        }
    
        try {
            if (await bcrypt.compare(password, user.password)) {
                console.log("find user, log in succed")
                return done(null, user)
            } else {
                console.log("invalid password")
                return done(null, false, {message: "Invalid password"})
            }
        } catch (e) {
            return done(e)
        }
    }

    passport.use(new LocalStrategy({usernameField : 'email'}, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
         return done(null, getUserById(id))
    })
}

module.exports = initPassport