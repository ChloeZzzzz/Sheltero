var mongoose = require('mongoose');

const uri = "mongodb+srv://sheltero:Webit@cluster0-bf9ka.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,
    function(err){
    if(!err){
        console.log('Connected to mongo.');
    }else{
        console.log('Failed to connect to mongo!', err);
    }
});

require('./cafe.js');
