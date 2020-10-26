import Vue from 'vue'
import App from './App.vue'
import router from '../router'
import VueWechatTitle from 'vue-wechat-title';
import store from '../store/index'
import vueAplayer from 'vue-aplayer'
import VideoPlayer from 'vue-video-player';
import 'video.js/dist/video-js.css';
import 'videojs-flash';
Vue.use(vueAplayer)
import vConsole from 'vconsole'
if (process.env.NODE_ENV === 'development') {
    let vconsole = new vConsole()
    Vue.use(vconsole)
}
Vue.use(VueWechatTitle)
Vue.use(VideoPlayer)
Vue.config.productionTip = false
console.log(process.env.NODE_ENV, '@!');
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

