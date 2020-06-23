const express = require('express')
const path = require('path')
const app = express()
const cookieParser = require('cookie-parser')
var logger = require('morgan');

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, '../client/dist')))
app.use(express.static(path.join(__dirname, './public')))

app.use((req, res, next) => {
    res.header({
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'PUT,POST,GET,DELETE,OPTIONS',
        'Content-Type': 'application/json;charset=utf-8'
    })
    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})
app.use(require('./middleware/session'))
app.use('/', require('./routes/index'))


const routesList = [{
    path: '/',
    name: 'Home',
    meta: {
        title: '主页'
    },
    component: () => import('../views/Home')
},
{
    path: '/about',
    name: 'About',
    meta: {
        title: '关于'
    },
    component: () => import('../views/About')
},

{
    path: '/blog/:id',
    name: 'Blog',
    meta: {
        title: '博客'
    },
    component: () => import('../views/Blog'),
    children:[
        {
            path: '/全部文章',
            name: '全部文章',
            meta: {
                title: '博客'
            },
            component: () => import('../views/Blog'),
        },
        {
            path: '/HTML&CSS',
            name: 'HTML&CSS',
            meta: {
                title: '博客'
            },
            component: () => import('../views/Blog'),
        },
        {
            path: '/JavaScript',
            name: 'JavaScript',
            meta: {
                title: '博客'
            },
            component: () => import('../views/Blog'),
        },
        {
            path: '/Node',
            name: 'Node',
            meta: {
                title: '博客'
            },
            component: () => import('../views/Blog'),
        },
        {
            path: '/Vue&React',
            name: 'Vue&React',
            meta: {
                title: '博客'
            },
            component: () => import('../views/Blog'),
        },
        {
            path: '/Other',
            name: 'Other',
            meta: {
                title: '博客'
            },
            component: () => import('../views/Blog'),
        },
    ]
},
{
    path: '/daily',
    name: 'Daily',
    meta: {
        title: '日记'
    },
    component: () => import('../views/Daily')
},
{
    path: '/links',
    name: 'Links',
    meta: {
        title: '友链'
    },
    component: () => import('../views/Links')
},
{
    path: '/message',
    name: 'Message',
    meta: {
        title: '留言'
    },
    component: () => import('../views/Message')
},
]

routesList.forEach(item => {
    if(item.children){
        item.children.forEach(i =>{
            app.get(i.path, (req, res) => {
                // console.log(item.path)
                res.sendFile(require('path').join(__dirname, '../client/dist/index.html'))
            })
        })
    }else{
        app.get(item.path, (req, res) => {
            console.log(item.path)
            res.sendFile(require('path').join(__dirname, '../client/dist/index.html'))
        })
    }
})

module.exports = app