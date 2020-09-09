import Vue from 'vue'
import App from './App.vue'
import router from '../router'
// import ELEMENT from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import VueWechatTitle from 'vue-wechat-title';
import store from '../store/index'
import axios from 'axios'

import vueAplayer from 'vue-aplayer'
// window.router=router
Vue.use(vueAplayer)

import vConsole from 'vconsole'

if (process.env.NODE_ENV === 'development') {
    let vconsole = new vConsole()

    Vue.use(vconsole)
}


Vue.use(VueWechatTitle)

// Vue.use(ELEMENT)


Vue.config.productionTip = false

// import global_ from '../config/global.js'

// Vue.prototype.GLOBAL = global_;
// axios.defaults.baseURL=global_.BASE_URL;
console.log(process.env.NODE_ENV, '@!');






// Vue.prototype.baseURL = process.env.BASE_URL

// Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/proxy'  //关键代码




axios.defaults.baseURL = process.env.BASE_URL



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

