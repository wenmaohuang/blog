import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
{
    path:'/',
    name:'Home',
    component: ()=>import('../views/Home')
},
{
    path:'/about',
    name:'About',
    component: ()=>import('../views/About')
},
{
    path:'/blog/:id',
    name:'Blog',
    component: ()=>import('../views/Blog')
},
{
    path:'/daily',
    name:'Daily',
    component: ()=>import('../views/Daily')
},
{
    path:'/links',
    name:'Links',
    component: ()=>import('../views/Links')
},
{
    path:'/message',
    name:'Message',
    component: ()=>import('../views/Message')
},


]

const router = new VueRouter({
    routes
})
export default router


