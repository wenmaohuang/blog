import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        articleList:'test',
        article:{},
        articleContent:'',
        articleMessage:{},
        articleMessageList:{},
        // user:''
        ifLogin: false,
        userInfo:'',
        mongoLogin:false,
        showQQLogin:true
    },
    mutations:{
        // handleClick(){

        // },
        // edit(state){
        //     state.name = 'jack'
        // },
        // handleArticleList:(state,data)=>{
        //     console.log(data);
        // }

    },
    getters:{

    },
    actions:{

    },
    modules:{
        
    }


})