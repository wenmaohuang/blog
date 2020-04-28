const express = require('express')
const path = require('path')
var logger = require('morgan');
const app = express()
const cookieParser = require('cookie-parser')
let session = require('express-session')
let connectMongo = require('connect-mongo')(session)


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../client/dist')))
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
app.use(session({
    secret:'afei',
    cookie:{maxAge:30*60*1000},
    rolling:false,
    resave:false,
    saveUninitialized:false,
    store:new connectMongo({url:'mongodb://localhost:27017/blog'})
}))
app.use('/',require('./routes/index'))

module.exports = app

