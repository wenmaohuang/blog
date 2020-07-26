import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import ELEMENT from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import VueWechatTitle from 'vue-wechat-title'; 
import store from '../store/index'
import axios from 'axios'

import vueAplayer from 'vue-aplayer'
 
Vue.use(vueAplayer)

import vConsole from 'vconsole'
let vconsole = new vConsole()
Vue.use(vconsole)

Vue.use(VueWechatTitle)

Vue.use(ELEMENT)


Vue.config.productionTip = false

import global_ from '../config/global.js'
Vue.prototype.GLOBAL = global_;
axios.defaults.baseURL=global_.BASE_URL;





// import global_ from './Base.vue'
// Vue.prototype.GLOBAL = global_;
// axios.defaults.baseURL=global_.BASE_URL;


// axios.defaults.baseURL = process.env.BASE_URL
// Vue.prototype.baseURL = process.env.BASE_URL

// console.log(Vue,777)           

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

