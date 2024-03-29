// const mongoose = require("mongoose");
// const mongoose = require('./connection/connection')
const mongoose = require('./connection/connection')

let Schema = mongoose.Schema;

let articleMessage = mongoose.model("articleMessage",new Schema({

  //关联用户表
  user : {type:Schema.Types.ObjectId , ref:"user" , required:true},
  // comment : {type:Schema.Types.ObjectId , ref:"article" , required:true},

  //留言内容
  content : {type:String,required: true},

  //日期
  date : {type:Date,default:Date.now},

  //子留言
  children : [
    {
      //子留言 用户
      user : {type:Schema.Types.ObjectId , ref:"user" , required:true},
      // comment : {type:Schema.Types.ObjectId , ref:"article" , required:true},
      //子留言 内容
      content : {type:String,required: true},
      //子留言 评论对象
      reUser : {type:String,required: true},
      //子留言 日期
      date : {type:Date,default:Date.now}
    }
  ]

}));


//测试
// for (let i =0;i<2;i++){
//   articleMessage.create({
//     user : "5e8738da2230e71848f0a971",
//     content : "<p>哈哈哈哈哈哈我来评论啦</p>"
//   });
// }



module.exports = articleMessage;