const express = require('express')
const path = require('path')
var logger = require('morgan');
const app = express()
const cookieParser = require('cookie-parser')



app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../client/dist')))
//app.use(express.static(path.join(__dirname, './public')))

app.use((req,res,next)=>{
    res.header({
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Origin':req.headers.origin || '*',
        'Access-Control-Allow-Headers':'Content-Type',
        'Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type':'application/json;charset=utf-8'
    })
    if(req.method === 'OPTIONS'){
        res.sendStatus(200)
    }else{
        next()
    }
})
app.use(require('./middleware/session'))
app.use('/',require('./routes/index'))

module.exports = app

