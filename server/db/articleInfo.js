const mongoose = require('mongoose')
let articleInfo = mongoose.model('articleInfo',new mongoose.Schema({
    tags:[String],
    num:Number
}))
articleInfo.create({
    tags:['全部文章','HTML&CSS','JavaScript','Node',"Vue&React",'other'],
    num:100
})
// console.log(1);
module.exports = articleInfo