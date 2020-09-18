// var mongoose = require('mongoose');
const mongoose = require('./connection/connection')


var Schema = mongoose.Schema;
var chatObj = new Schema({
    groupPepole: String,
    groupTime: String
});
module.exports = mongoose.model('chats',chatObj);
// chatName: String,
// chatTime: String