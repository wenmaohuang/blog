(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73e9f400"],{1026:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("div",{staticClass:"drawer"},[i("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"primary"},on:{click:function(e){t.drawer=!0}}},[i("i",{staticClass:"iconfont icon-caidan"})]),i("el-drawer",{attrs:{title:"",visible:t.drawer,"show-close":!0},on:{"update:visible":function(e){t.drawer=e}}},[i("div",{staticClass:"blog"},[i("el-button",{on:{click:t.handlerLogin}},[t._v("登录")]),i("router-link",{attrs:{to:"/blog"}},[t._v("博客")]),i("router-link",{attrs:{to:"/message"}},[t._v("留言")]),i("router-link",{attrs:{to:"/links"}},[t._v("友链")]),i("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1)])],1),i("div",{staticClass:"bgc",style:{height:t.bgHeight+"px"}},[i("Search")],1),i("footer",[i("div",{staticClass:"about"},[i("p",[t._v("风移影动")]),i("p",[t._v("自由自在的流浪")]),i("p",[i("router-link",{attrs:{to:"/about"}},[t._v("about me")])],1)]),i("div",{staticClass:"link"},[i("p",[t._v("相关链接")]),i("p",[i("router-link",{attrs:{to:"/blog/全部文章"}},[t._v("博客")])],1),i("p",[i("router-link",{attrs:{to:"/daily"}},[t._v("日记")])],1)]),t._m(0)]),i("el-collapse",{directives:[{name:"show",rawName:"v-show",value:t.ifLogin,expression:"ifLogin"}],on:{change:t.handleChange},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[i("el-collapse-item",{attrs:{title:"",name:"1"}},[i("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"infinite-list",staticStyle:{overflow:"scroll",height:"150px"}},t._l(t.obj,(function(e,o){return i("li",{key:o,staticClass:"infinite-list-item"},[i("a",{style:t.style,attrs:{href:e}},[t._v(t._s(o))])])})),0)])],1)],1)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"connect"},[i("p",[t._v("联系我")]),i("p",[t._v("地址:广州番禺小龙村")]),i("p",[t._v("QQ:648371113")]),i("p",[t._v("邮箱:648371113@qq.com")])])}],a=i("6ccc"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"search"},[i("div",{staticClass:"input"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],attrs:{type:"text"},domProps:{value:t.word},on:{input:[function(e){e.target.composing||(t.word=e.target.value)},t.fn],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleClick(e)}}}),i("button",{on:{click:t.handleClick}},[t._v("搜索")])]),i("ul",t._l(t.jsonArr,(function(e,o){return i("li",{key:o},[i("a",{attrs:{href:"https://www.baidu.com/s?wd="+e,target:"_blank"}},[t._v(t._s(e))])])})),0)])},c=[],l=(i("d3b7"),{name:"Search",methods:{fn:function(){var t=this;fetch("http://www.fyyd.vip:3002/search?word="+this.word).then((function(t){return t.json()})).then((function(e){t.jsonArr=e}))},handleClick:function(){function t(t){var e=JSON.parse(localStorage.getItem("list"))||[];e.push(t),e.length>8&&e.shift(),localStorage.setItem("list",JSON.stringify(e))}t(this.word),window.location.href="https://www.baidu.com/s?wd="+this.word}},data:function(){return{jsonArr:[],word:"",wordList:[]}},mounted:function(){console.log(localStorage,"aa")}}),r=l,d=(i("c24a"),i("2877")),h=Object(d["a"])(r,s,c,!1,null,"cfbc807c",null),u=h.exports,p=i("578a"),w=a["a"].postLogin,m=a["a"].postIfLogin,g={name:"index",data:function(){return{drawer:!1,isClick:!1,count:0,activeNames:[""],bgHeight:0,ifLogin:!1,style:{display:"block",textDecoration:"none",textAlign:"center"},obj:{mongoose:"https://mongoosejs.com/docs/guide.html",localServer:"http://localhost/#/blog/0",localClient:"http://localhost:8080/#/blog/0",github:"https://github.com/",npm:"https://www.npmjs.com/",expressServer:"http://www.fyyd.vip/#/blog/0",expressServer3002:"http://www.fyyd.vip:3002",nginxServer:"http://www.fyyd.vip:3000",elementUI:"https://element.eleme.cn/#/zh-CN/component/installation",VUE:"https://vuejs.org/",layUI:"https://www.layui.com/",qqMusic:"https://y.qq.com/portal/player.html",aliCloud:"https://www.aliyun.com/",aliIcon:"https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1811983",translateBaidu:"https://fanyi.baidu.com/?aldtype=16047#auto/zh",searchBaidu:"http://baidu.com",photoGirls:"https://www.umei.cc/bizhitupian/meinvbizhi/",yinshi:"https://www.shiguangkey.com/video/1346?videoId=141606&classId=9262&playback=1",afei:"https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997",remi:"https://www.shiguangkey.com/video/903?videoId=242629&classId=17830&playback=1",zhuimeng:"https://www.shiguangkey.com/video/1561?videoId=53934&classId=4298&playback=1",haiwen:"https://www.shiguangkey.com/video/1561?videoId=86919&classId=6240&playback=1",wanzhang:"https://www.shiguangkey.com/video/5404?videoId=125677&classId=8638&playback=1",designModeWanZhang:"https://www.shiguangkey.com/video/903?videoId=191211&classId=12327&playback=1",cctv:"http://tv.cctv.com/live/",exampleBlog:"https://www.yanshisan.cn/Blog/Article",interview:"https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md",jobLagou:"https://www.lagou.com/resume/myresume.html","51job":"https://i.51job.com/userset/my_51job.php?lang=c",zhilian:"https://i.zhaopin.com/","58tongcheng":"https://my.58.com/pro/myjob/index/?PGTID=0d000000-0000-05c4-710e-6428d7138f3a&ClickID=1",boss:"https://www.zhipin.com/web/geek/recommend?ka=header-personal",xiaochengxu:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/",xiaochengxuAdmin:"https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=174094833&lang=zh_CN",bilibili:"https://www.bilibili.com/video/BV1nE41117BQ?p=9",move:"http://27k.cc/?m=vod-play-id-37805-src-1-num-1.html",flutter:"https://flutter.dev/docs/development/tools/android-studio"}}},methods:{getWindowHeight:function(){this.bgHeight=window.innerHeight},handleChange:function(t){console.log(t)},load:function(){this.count+=2},handlerLogin:function(){var t=this.$createElement;this.$msgbox({title:"登录",message:t(p["a"]),showCancelButton:!0,showConfirmButton:!0,closeOnClickModal:!1,confirmButtonText:"马上登录",cancelButtonText:"取消",beforeClose:function(t,e,i){"confirm"===t?function(){var t=this;this.$refs["form"].validate((function(e){if(!e)return!1;w(t.form).then((function(e){console.log(e),e.data.code?t.$message({message:e.data.msg,type:"error",duration:2e3}):(t.$message({message:e.data.msg,type:"success",duration:2e3}),i(),setTimeout((function(){window.location.reload()})))})).catch((function(){t.$message({message:"登录失败,稍后再试",type:"error",duration:2e3})}))}))}.call(e.$children[2]):i()}}).then((function(){})).catch((function(){}))}},components:{Search:u},mounted:function(){this.getWindowHeight(),window.addEventListener("resize",this.getWindowHeight)},created:function(){var t=this;m().then((function(e){e.data.userInfo?t.ifLogin=!0:t.ifLogin=!1}))},destroyed:function(){window.removeEventListener("resize",this.getWindowHeight)}},v=g,f=(i("109a"),i("3921"),Object(d["a"])(v,o,n,!1,null,"373ca58e",null));e["default"]=f.exports},"109a":function(t,e,i){"use strict";var o=i("691a"),n=i.n(o);n.a},3921:function(t,e,i){"use strict";var o=i("4fbb"),n=i.n(o);n.a},"4fbb":function(t,e,i){},"691a":function(t,e,i){},"9e9b":function(t,e,i){},c24a:function(t,e,i){"use strict";var o=i("9e9b"),n=i.n(o);n.a}}]);
//# sourceMappingURL=chunk-73e9f400.62914e61.js.map