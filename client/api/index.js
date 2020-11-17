import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.baseURL = 'https://www.fyyd.vip'
// axios.defaults.baseURL = process.env.BASE_URL
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
export default {
    getArticleInfo(){
        // console.log(333);
        return axios.post('/blog/article/getInfo')
    },
    getUser(){
        // console.log(333);
        return axios.post('/blog/visitor/getUser')
    },
    getArticleHot(){
        return axios.post('/blog/article/getHot')
    },
    getArticleTitle(){
        return axios.get('/blog/article/getTitle')
    },
    getArticleShow:(function(){
        let skip = 0
        let limit = 10
        return function(index = 0,ifFresh = false){
            if(ifFresh){
                skip = 0
                limit = 10
            }
            // let tag = ['全部文章','HTML&CSS','JavaScript','Node',"Vue&React",'other'][index]
            let tag = index
            if(tag === '全部文章'){
                tag = ''
            }
            
            let data = {skip,limit,tag}
            skip += limit
            return axios.post('/blog/article/getShow',data)
        }
    })(),
    getRegisterVCode(){
        return axios.post('/blog/register/vcode')
    },
    getCheckVcode(svgCode){
        return axios.post('/blog/register/checkVcode',{svgCode})
    },
    postRegister(option){
        return axios.post('/blog/register',option)
    },
    postLogin(option){
        return axios.post('/blog/login',option)
    },
    postIfLogin(){
        return axios.post('/blog/login/ifLogin')
    },
    postLogout(){
        return axios.post('/blog/login/logout')
    },
    postMessage(options){
        return axios.post('/blog/message/commit',options)
    },
    postChildMessage(options){
        return axios.post('/blog/message/childCommit',options)
    },
    
    postArticleMessage(options){
        return axios.post('/blog/article/messageCommit',options)
    },
    postArticleComment(options){
        return axios.post('/blog/articlemessage/messageCommit',options)
    },
    postArticleChildMessage(options){
        return axios.post('/blog/articlemessage/childmessageCommit',options)
    },
    postArticleReadCount(options){
        return axios.post('/blog/article/readCount',options)
    },
    getMessage(){
        return axios.post('/blog/message/getList')
    },
    getArticleMessage(){
        return axios.post('/blog/article/message')
    },
    getArticlecomment(){
        return axios.post('/blog/articlemessage/message')
    },
    getDaily(){
        return axios.get('/blog/daily')
    },

    postUserList(){
        return axios.post('/blog/chat/getUserList')
    },

    postPepole(){
        return axios.post('/blog/chat/pepole')
    },
    getChat(){
        return axios.get('/blog/blog/chat')
    }

}

//
// export default {
//     getArticleInfo(){
//         // console.log(333);
//         return axios.post('/article/getInfo')
//     },
//     getUser(){
//         // console.log(333);
//         return axios.post('/visitor/getUser')
//     },
//     getArticleHot(){
//         return axios.post('/article/getHot')
//     },
//     getArticleTitle(){
//         return axios.get('/article/getTitle')
//     },
//     getArticleShow:(function(){
//         let skip = 0
//         let limit = 10
//         return function(index = 0,ifFresh = false){
//             if(ifFresh){
//                 skip = 0
//                 limit = 10
//             }
//             // let tag = ['全部文章','HTML&CSS','JavaScript','Node',"Vue&React",'other'][index]
//             let tag = index
//             if(tag === '全部文章'){
//                 tag = ''
//             }
//
//             let data = {skip,limit,tag}
//             skip += limit
//             return axios.post('/article/getShow',data)
//         }
//     })(),
//     getRegisterVCode(){
//         return axios.post('/register/vcode')
//     },
//     getCheckVcode(svgCode){
//         return axios.post('/register/checkVcode',{svgCode})
//     },
//     postRegister(option){
//         return axios.post('/register',option)
//     },
//     postLogin(option){
//         return axios.post('/login',option)
//     },
//     postIfLogin(){
//         return axios.post('/login/ifLogin')
//     },
//     postLogout(){
//         return axios.post('/login/logout')
//     },
//     postMessage(options){
//         return axios.post('/message/commit',options)
//     },
//     postChildMessage(options){
//         return axios.post('/message/childCommit',options)
//     },
//
//     postArticleMessage(options){
//         return axios.post('/article/messageCommit',options)
//     },
//     postArticleComment(options){
//         return axios.post('/articlemessage/messageCommit',options)
//     },
//     postArticleChildMessage(options){
//         return axios.post('/articlemessage/childmessageCommit',options)
//     },
//     postArticleReadCount(options){
//         return axios.post('./article/readCount',options)
//     },
//     getMessage(){
//         return axios.post('/message/getList')
//     },
//     getArticleMessage(){
//         return axios.post('/article/message')
//     },
//     getArticlecomment(){
//         return axios.post('/articlemessage/message')
//     },
//     getDaily(){
//         return axios.get('/daily')
//     },
//
//     postUserList(){
//         return axios.post('/chat/getUserList')
//     },
//
//     postPepole(){
//         return axios.post('/chat/pepole')
//     },
//     getChat(){
//         return axios.get('/chat')
//     }
//
// }
