// var mongoose = require('mongoose');

const mongoose = require('./connection/connection')

var Schema = mongoose.Schema;
var chatconObj = new Schema({
    chatName: String,
    chatTime: String,
    chatContent: String
});
module.exports = mongoose.model('chatcontents',chatconObj);