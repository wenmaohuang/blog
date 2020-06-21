const express = require('express')
let router = express.Router()
let dailyDB = require('../../db/daily')

router.get('/',(req,res)=>{
    // res.send({code:666})
    console.log(req.body,111)
    dailyDB.find({}).then(data=>{
        res.send({code:0,data})
    }).catch((res)=>{
        // res.send({code:1})
    })
})
module.exports = router