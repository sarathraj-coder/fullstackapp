//var mongoose = require('mongoose');
var mongoose = require('mongoose');
var Schema = mongoose.Schema; // AFTER THIS LINE
var Promise = require('bluebird'); //ADD THIS LINE
Promise.promisifyAll(mongoose); //AND THIS LINE
var UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    updated_date: { type: Date, default: Date.now },
  });

module.exports = mongoose.model('User', UserSchema);  