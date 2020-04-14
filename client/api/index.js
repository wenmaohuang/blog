import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost'
axios.defaults.baseURL = 'http://localhost'
// axios.defaults.baseURL = 'http://www.fyyd.vip'
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'



export default {
    getArticleInfo(){
        console.log(333);
        return axios.post('/article/getInfo')
    },
    getArticleHot(){
        return axios.post('/article/getHot')
    },
    getArticleShow:(function(){
        let skip = 0
        let limit = 5
        return function(index = 0,ifFresh = false){
            if(ifFresh){
                skip = 0
                limit = 5
            }
            let tag = ['','HTML&CSS','JavaScript','Node',"Vue&React",'other'][index]
            let data = {skip,limit,tag}
            skip += limit
            return axios.post('/article/getShow',data)
        }
    })()
}
