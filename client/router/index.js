import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)
const routes = [{
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

const router = new VueRouter({
    // mode: "history",
    routes
})
export default router