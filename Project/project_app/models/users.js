const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
 
const User = new Schema({
    _id : mongoose.Schema.Types.ObjectId,
    first_name : String,
    last_name : String,
    email: String,
    password: String,
    type: ['employee', 'employer'],
    resume: {jobs: String},
});

 
User.plugin(passportLocalMongoose);
 
module.exports = mongoose.model('User', User);
