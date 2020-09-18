import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [{
        path: '/',
        name: 'Home',
        meta: {
            title: '风移影动'
        },
        component: () => import('../views/Home')
    },
    {
        path: '/content',
        name: 'content',
        meta: {
            title: '博客'
        },
        component:()=>import('../views/Blog/articleContent/ArticleContent.vue')
    },


    {
        path: '/nav',
        name: 'Nav',
        meta: {
            title: '关于'
        },
        
        component: () => import('../views/Nav'),
        children:[
            {
                path: 'about',
                name: 'About',
                meta: {
                    title: '关于'
                },
                component: () => import('../views/Nav/About')
            },
            {
                path: 'football',
                name: 'football',
                meta: {
                    title: '足球'
                },
                component:()=>import('../views/Football/Football.vue')
            },
            {
                path: 'links',
                name: 'Links',
                meta: {
                    title: '友链'
                },
                component: () => import('../views/Links')
            },
            {
                path: 'daily',
                name: 'Daily',
                meta: {
                    title: '日记'
                },
                component: () => import('../views/Daily')
            },
            {
                path: 'message',
                name: 'Message',
                meta: {
                    title: '留言'
                },
                component: () => import('../views/Message')
            },
            {
                path: 'blog',
                name: 'Blog',
                meta: {
                    title: '博客'
                },
                component: () => import('../views/Blog'),
               
            },
            {
                path: 'blog/:id',
                meta: {
                    title: '博客'
                },
                component: () => import('../views/Blog'),
               
              
            },
           
        ]
    },
    
    
   
    

    
    
    
   
]

const router = new VueRouter({
    mode: "history",
    routes
})
export default router