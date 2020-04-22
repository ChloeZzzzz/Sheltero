const express = require('express')
const app = express();
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')

// get the array db
const users = require('./models/users.js')
const initPassport = require('./.config/passport_config')
initPassport(passport, 
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
)

//const userRouter = require('./routes/userRouter');

app.set("view_engine", "ejs")
// make the form variable accessable by the get and post method
app.use(express.urlencoded( {extended: false}))
app.use(flash())
app.use(session({
    secret: "secretkey",
    resave: false,
    saveUninitialized: false
}) )
app.use(passport.initialize())
app.use(passport.session())

// GET home page
app.get('/', (req, res) => {
    res.send("<H1>Sheltero Homepage</H1>")
})

// GET log in page
app.get('/login', (req, res) => {
    res.render("login.ejs")
});

// GET sign up page
app.get('/signup', (req, res) => {
    res.render("signup.ejs")
});

// POST log in
app.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}))

// POST sign up
app.post('/signup', async (req, res) => {
    try {
        const cryptedpw = await bcrypt.hash(req.body.password, 10)
        users.push({
            "id" : Date.now().toString(),
            "first_name" : req.body.first_name,
            "last_name": req.body.last_name,
            "email" : req.body.email,
            "password" : cryptedpw
        })
        res.redirect('/login') // redirect the user to login page
    } catch {
        console.log("Failed to sign up")
        res.redirect('/signup')
    }
});

// calling the user route for handling post method
//app.use('/login', userRouter);

app.listen(3000, () => {
    console.log('Sheltero is listening on port 3000!')
});