var article = require('../../db/article')
var articleInfo = require('../../db/articleInfo')
const express = require("express")
let router = express.Router()
router.post('/getInfo', (req, res) => {
    articleInfo.findOne({}, {_id: 0, __v: 0})
        .then(data => {
            console.log(data,444);
            res.send({
                code: 0,
                msg: '请求成功',
                data
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: '服务器错误',
                data: null
            })
        })

})
router.post('/getHot', (req, res) => {
    article.find({}, {_id: 0, __v: 0}, {sort: {pv: -1}, skip: 0, limit: 8})
        .then(data => {
            // console.log(data)
            res.send({
                code: 0,
                msg: '请求成功',
                data
            })
        })
        .catch(() => {
            res.send({
                code: 4,
                msg: "服务器错误",
                data: null
            })
        })
})

router.post('/getShow', (req, res) => {
    let {skip, limit, tag} = req.body
    let options = tag ? {tag} : {}
    // console.log(skip, limit, tag,'test');

    article.find(options, {__v:0}, {skip, limit,sort:{pv:-1}})
        .then(data => {
            res.send({
                code: 0,
                data,

            })
        })
        .catch(err => {
            res.send({
                code: 4,
                msg: '服务器错误'
            })
        })
})

router.post('/delete',(req,res)=>{
    console.log(req.body,'bbb')
    let title = req.body.title
    article.deleteOne({title:title})
    .then(data=>{
        res.send({
            code:'hhh'
        })
    })
    .catch(err=>{
        res.send({
            code:'err'
        })
    })
    
})

module.exports = router
