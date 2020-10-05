// var article = require('../../db/article')
// var articleInfo = require('../../db/articleInfo')
const express = require("express")
// const articlemessageDB = require("../../db/articlemessage.js")

let router = express.Router()
router.get('/chat', (req, res) => {
    console.log(req.body,'bb');
  

})


module.exports = router
