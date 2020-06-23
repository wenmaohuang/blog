import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueWechatTitle from 'vue-wechat-title'; 


Vue.use(VueWechatTitle)

Vue.use(ElementUI)
Vue.config.productionTip = false



new Vue({
    router,
    
    render: h => h(App)
}).$mount('#app')

// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title
    
//     next()
// })

// router.beforeEach((to, from, next) => {
//     /* 路由发生变化修改页面title */
//     if (to.meta.title) {
//       document.title = to.meta.title
//     }
//     next()
//   })