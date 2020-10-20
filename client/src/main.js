import Vue from 'vue'
import App from './App.vue'
import router from '../router'
// import ELEMENT from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import VueWechatTitle from 'vue-wechat-title';
import store from '../store/index'
// import axios from 'axios'

import vueAplayer from 'vue-aplayer'
// window.router=router
Vue.use(vueAplayer)

import vConsole from 'vconsole'

if (process.env.NODE_ENV === 'development') {
    let vconsole = new vConsole()

    Vue.use(vconsole)
}
Vue.use(VueWechatTitle)

import VideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import 'videojs-flash';
Vue.use(VideoPlayer)
Vue.config.productionTip = false
console.log(process.env.NODE_ENV, '@!');

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

