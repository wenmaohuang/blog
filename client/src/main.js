import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueWechatTitle from 'vue-wechat-title'; 
import store from '../store/index'

import vueAplayer from 'vue-aplayer'
 
Vue.use(vueAplayer)

import vConsole from 'vconsole'
let vconsole = new vConsole()
Vue.use(vconsole)

Vue.use(VueWechatTitle)

Vue.use(ElementUI)
Vue.config.productionTip = false

// console.log(Vue,777)           

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

