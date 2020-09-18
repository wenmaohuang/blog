var express = require('express');
var router = express.Router();
var chatModel = require('../../db/chat');
var chatConModel = require('../../db/chatcontent');
// 保存登陆用户
router.post('/pepole', function (req, res, next) {
    console.log(req,'zl');


    let newDate = new Date();
    let pepoleList = new chatModel({
        groupPepole: req.body.loginName,
        groupTime: newDate.toLocaleDateString() + ' ' + newDate.toLocaleTimeString()
    });
    pepoleList.save(function (err, doc) {
        if (err) {
            res.json({
                states: 0,
                msg: err.message
            });
        } else {
            res.json({
                states: 1,
                msg: '保存成功'
            });
        }
    });
})
// 保存用户发布内容
router.post('/content', function (req, res, next) {
    let newDate = new Date();
    let conList = new chatConModel({
        chatName: req.body.chatName,
        chatContent: req.body.chatContent,
        chatTime: newDate.toLocaleDateString() + ' ' + newDate.toLocaleTimeString()
    });
    conList.save(function (err, doc) {
        if (err) {
            res.json({
                states: 0,
                msg: err.message
            });
        } else {
            res.json({
                states: 1,
                msg: '保存成功'
            });
        }
    });
});
//获取内容并返回
router.post('/geContentList', function (req, res, next) {
    chatConModel.find({}, function (err, doc) {
        if (err) {
            res.json({
                states: 0,
                msg: err.message
            });
        } else {
            res.json({
                states: 1,
                msg: doc,
                count: doc.length
            });
        }
    });
});
//获取用户列表
router.post('/getUserList', function (req, res, next) {
    chatModel.find({}, function (err, doc) {
        if (err) {
            res.json({
                states: 0,
                msg: err.message
            });
        } else {
            res.json({
                states: 1,
                msg: doc,
                count: doc.length
            });
        }
    });
});
//退出登陆
router.post('/out', function (req, res, next) {
    let conditions = {
        groupPepole: req.body.loginName
    }
    chatModel.remove(conditions, function (err, doc) {
        if (err) {
            res.json({
                states: 0,
                msg: err.message
            });
        } else {
            res.json({
                states: 1,
                msg: 'doc'
            });
        }
    });
});
module.exports = router;
