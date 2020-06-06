const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
//const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    _id : {
        type: String,
        require: true},
    type: ['Employee', 'Employer'],
    gender: ['m', 'f', 'x'],
    first_name : {
        type: String,
        require: true},
    last_name : {
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
        require: false},
    company_name: {
        type: String,
        require: false},
    company_addr: {
        type: String,
        require: false},
    resume: {jobs: String},
    applyingJobId: {
        type: Array,
        "default": []
    }
});

User.methods.generateHash = function(pass){
    return bcrypt.hashSync(pass, bcrypt.genSaltSync(10));
}

User.methods.validatePassword = function(pass){
    return bcrypt.compareSync(pass, this.password);
}


//User.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', User);
