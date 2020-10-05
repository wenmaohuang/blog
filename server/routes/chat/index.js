// var article = require('../../db/article')
// var articleInfo = require('../../db/articleInfo')
const express = require("express")
// const articlemessageDB = require("../../db/articlemessage.js")

let router = express.Router()
router.get('/', (req, res) => {
    console.log(req.body,'bb');
  res.send(
      {
          code:1,
          msg:req.body
      }
  )

})


module.exports = router
