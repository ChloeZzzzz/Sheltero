const bcrypt = require('bcrypt')

const users = require('../models/users.js') // get the array db

const userSignup = async (req, res) => {
    try {
        console.log(req.body)
        const cryptedpw = await bcrypt.hash(req.body.password, 10)
        users.push({
            "id" : Date.now().toString(),
            "first_name" : req.body.first_name,
            "last_name": req.body.last_name,
            "role" : req.body.role,
            "email" : req.body.email,
            "password" : cryptedpw
        })
        console.log(users)
        res.redirect('/login') // redirect the user to login page
    } catch {
        console.log("Failed to sign up")
        res.redirect('/signup')
    }
}

module.exports = {
    userSignup
}