const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    _id : {
        type: String,
        require: true},
    role: ['employee', 'employer'],
    gender: ['Male', 'Female', 'X'],
    firstName : {
        type: String,
        require: true},
    lastName : {
        type: String,
        require: true},
    email: {
        type: String,
        require: true},
    password: {
        type: String,
        require: true},
    contact: {
        type: String,
        require: true},
    company_name: {
        type: String,
        require: true},
    company_addr: {
        type: String,
        require: true},
    resume: {jobs: String},
});


//User.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', User);
