(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c265fc6"],{"05dd":function(t,e,n){"use strict";var o=n("6346"),i=n.n(o);i.a},1026:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"drawer"},[n("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"primary"},on:{click:function(e){t.drawer=!0}}},[n("i",{staticClass:"iconfont icon-caidan"})]),n("el-drawer",{attrs:{title:"",visible:t.drawer,"show-close":!0},on:{"update:visible":function(e){t.drawer=e}}},[n("div",{staticClass:"blog"},[n("el-button",{on:{click:t.handlerLogin}},[t._v("登录")]),n("router-link",{attrs:{to:"/blog"}},[t._v("博客")]),n("router-link",{attrs:{to:"/message"}},[t._v("留言")]),n("router-link",{attrs:{to:"/links"}},[t._v("友链")]),n("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1)])],1),n("div",{staticClass:"bgc",style:{height:t.bgHeight+"px"}},[n("Search")],1),n("footer",[n("div",{staticClass:"about"},[n("p",[t._v("风移影动")]),n("p",[t._v("自由自在的流浪")]),n("p",[n("router-link",{attrs:{to:"/about"}},[t._v("about me")])],1)]),n("div",{staticClass:"link"},[n("p",[t._v("相关链接")]),n("p",[n("router-link",{attrs:{to:"/blog/全部文章"}},[t._v("博客")])],1),n("p",[n("router-link",{attrs:{to:"/daily"}},[t._v("日记")])],1)]),t._m(0)]),n("el-collapse",{on:{change:t.handleChange},nativeOn:{"~mouseenter":function(e){return t.handleEnter(e)},mouseover:function(e){return t.handleOver(e)}},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("el-collapse-item",{directives:[{name:"show",rawName:"v-show",value:t.ifLogin,expression:"ifLogin"}],attrs:{title:"",name:"1"}},[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"infinite-list",staticStyle:{overflow:"scroll",height:"250px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],ref:"autoFocus",staticStyle:{display:"block",width:"250px",height:"45px","font-size":"20px","text-indent":"1em",margin:"0 auto","border-radius":"10px","border-width":"1px","border-style":"solid"},attrs:{type:"text"},domProps:{value:t.word},on:{input:[function(e){e.target.composing||(t.word=e.target.value)},t.handleSearch],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.handleDelete(e)}}}),t._l(t.searchObj,(function(e,o){return n("li",{key:o,staticClass:"infinite-list-item"},[n("a",{style:t.style,attrs:{href:e}},[t._v(t._s(o))])])}))],2)])],1)],1)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"connect"},[n("p",[t._v("联系我")]),n("p",[t._v("地址:广州番禺小龙村")]),n("p",[t._v("QQ:648371113")]),n("p",[t._v("邮箱:648371113@qq.com")])])}],r=(n("d81d"),n("b64b"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("6ccc")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],ref:"autoFocus",attrs:{type:"text"},domProps:{value:t.word},on:{input:[function(e){e.target.composing||(t.word=e.target.value)},t.fn],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleClick(e)},focus:t.handleFocus}}),n("button",{on:{click:t.handleClick}},[t._v("搜索")])]),n("ul",t._l(t.jsonArr,(function(e,o){return n("li",{key:o},[n("a",{attrs:{href:"https://www.baidu.com/s?wd="+e,target:"_blank"}},[t._v(t._s(e))])])})),0)])},s=[],c=(n("d3b7"),{name:"Search",methods:{fn:function(){var t=this;fetch("https://test.fyyd.vip:3102/search?word="+this.word).then((function(t){return t.json()})).then((function(e){t.jsonArr=e,console.log(t.jsonArr,"e1")}))},handleClick:function(){function t(t){var e=JSON.parse(localStorage.getItem("list"))||[];e.push(t),e.length>8&&e.shift(),localStorage.setItem("list",JSON.stringify(e))}t(this.word),window.location.href="https://www.baidu.com/s?wd="+this.word},handleFocus:function(){this.jsonArr=JSON.parse(localStorage.getItem("list")),console.log(this.jsonArr,"d1")}},data:function(){return{jsonArr:[],word:"",wordList:[]}},mounted:function(){console.log(localStorage,"aa"),this.$refs.autoFocus.focus()}}),l=c,u=(n("1fda"),n("2877")),d=Object(u["a"])(l,a,s,!1,null,"405482e0",null),h=d.exports,p=n("578a"),f=r["a"].postLogin,g=r["a"].postIfLogin,v={name:"index",data:function(){return{drawer:!1,isClick:!1,count:0,activeNames:["1"],bgHeight:0,ifLogin:!1,word:"",style:{display:"block",textDecoration:"none",textAlign:"center",fontSize:"20px"},ifFocus:!1,reg:{},searchObj:{},newObj:{},searchKye:"",obj:{github:"https://github.com/",mongoosejs:"https://mongoosejs.com/docs/guide.html",npmjs:"https://www.npmjs.com/",element:"https://element.eleme.cn/#/zh-CN/component/installation",vuejs:"https://vuejs.org/",layui:"https://www.layui.com/",qqMusic:"https://y.qq.com/portal/player.html",aliyun:"https://www.aliyun.com/",iconfont:"https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1811983",fanyi:"https://fanyi.baidu.com/?aldtype=16047#auto/zh",photoGirls:"https://www.umei.cc/bizhitupian/meinvbizhi/",yinshi:"https://www.shiguangkey.com/video/1346?videoId=141606&classId=9262&playback=1",afei:"https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997",remi:"https://www.shiguangkey.com/video/903?videoId=242629&classId=17830&playback=1",zhuimeng:"https://www.shiguangkey.com/video/1561?videoId=53934&classId=4298&playback=1",haiwen:"https://www.shiguangkey.com/video/1561?videoId=86919&classId=6240&playback=1",wanzhang1:"https://www.shiguangkey.com/video/5404?videoId=125677&classId=8638&playback=1",wanZhang2:"https://www.shiguangkey.com/video/903?videoId=191211&classId=12327&playback=1",cctv:"http://tv.cctv.com/live/",yanshisan:"https://www.yanshisan.cn/Blog/Article",afeifeifei:"https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md",lagou:"https://www.lagou.com/resume/myresume.html","51job":"https://i.51job.com/userset/my_51job.php?lang=c",zhaopin:"https://i.zhaopin.com/","58tongcheng":"https://my.58.com/pro/myjob/index/?PGTID=0d000000-0000-05c4-710e-6428d7138f3a&ClickID=1",zhipin:"https://www.zhipin.com/web/geek/recommend?ka=header-personal",weixin:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/",weixinAdmin:"https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=174094833&lang=zh_CN",bilibili:"https://www.bilibili.com/video/BV1nE41117BQ?p=9",movie:"http://27k.cc/?m=vod-play-id-37805-src-1-num-1.html",flutter:"https://flutter.dev/docs/development/tools/android-studio",typescript:"https://www.typescriptlang.org/docs/handbook/gulp.html",node:"https://nodejs.org/dist/latest-v14.x/docs/api/",webpack:"https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax",react:"https://reactjs.org/docs/getting-started.html",angular:"https://angular.io/docs",nginx:"http://nginx.org/en/docs/",centos:"https://www.linuxidc.com/Linux/2018-06/152959.htm",express:"https://www.expressjs.com.cn/5x/api.html",blogadmin:"http://www.fyyd.vip:3002/",reactblog:"http://www.fyyd.vip:3001/",mysql:"https://dev.mysql.com/doc/refman/8.0/en/connection-options.html",apache:"http://httpd.apache.org/docs/2.4/"}}},computed:{},watch:{},methods:{getWindowHeight:function(){this.bgHeight=window.innerHeight},handleChange:function(t){console.log(t)},handleEnter:function(){this.searchObj=Object.assign({},this.newObj)},handleOver:function(){console.log("c2"),this.$refs.autoFocus.focus()},handleSearch:function(){for(var t in this.obj)this.word&&(this.$delete(this.searchObj,t),console.log("e2"),this.reg=new RegExp("^"+this.word),this.searchKey=t.match(this.reg),null!==this.searchKey&&(this.searchKeyInput=this.searchKey["input"],console.log(this.searchKey,"p1"),this.$set(this.searchObj,this.searchKeyInput,this.obj[this.searchKeyInput]))),""===this.word&&console.log("a2");console.log(this.searchObj,"j1")},handleDelete:function(){for(var t in console.log("u1"),this.searchObj)this.reg=new RegExp("^"+this.word),this.searchKey=t.match(this.reg),this.$delete(this.searchObj,t);""===this.word&&(this.searchObj=Object.assign({},this.newObj))},load:function(){this.count+=2},handlerLogin:function(){var t=this.$createElement;this.$msgbox({title:"登录",message:t(p["a"]),showCancelButton:!0,showConfirmButton:!0,closeOnClickModal:!1,confirmButtonText:"马上登录",cancelButtonText:"取消",beforeClose:function(t,e,n){"confirm"===t?function(){var t=this;this.$refs["form"].validate((function(e){if(!e)return!1;f(t.form).then((function(e){console.log(e),e.data.code?t.$message({message:e.data.msg,type:"error",duration:2e3}):(t.$message({message:e.data.msg,type:"success",duration:2e3}),n(),setTimeout((function(){window.location.reload()})))})).catch((function(){t.$message({message:"登录失败,稍后再试",type:"error",duration:2e3})}))}))}.call(e.$children[2]):n()}}).then((function(){})).catch((function(){}))}},components:{Search:h},mounted:function(){var t=this;this.getWindowHeight(),window.addEventListener("resize",this.getWindowHeight),this.newObj={},Object.keys(this.obj).sort().map((function(e){t.newObj[e]=t.obj[e]})),console.log(this.newObj,"g2")},created:function(){var t=this;g().then((function(e){e.data.userInfo?t.ifLogin=!0:t.ifLogin=!1}))},destroyed:function(){window.removeEventListener("resize",this.getWindowHeight)}},m=v,w=(n("192c"),n("05dd"),Object(u["a"])(m,o,i,!1,null,"0c18e3ce",null));e["default"]=w.exports},"14c3":function(t,e,n){var o=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==o(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"192c":function(t,e,n){"use strict";var o=n("ed56"),i=n.n(o);i.a},"1dde":function(t,e,n){var o=n("d039"),i=n("b622"),r=n("2d00"),a=i("species");t.exports=function(t){return r>=51||!o((function(){var e=[],n=e.constructor={};return n[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"1fda":function(t,e,n){"use strict";var o=n("d916"),i=n.n(o);i.a},"25f0":function(t,e,n){"use strict";var o=n("6eeb"),i=n("825a"),r=n("d039"),a=n("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=r((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&o(RegExp.prototype,s,(function(){var t=i(this),e=String(t.source),n=t.flags,o=String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n);return"/"+e+"/"+o}),{unsafe:!0})},"44e7":function(t,e,n){var o=n("861d"),i=n("c6b6"),r=n("b622"),a=r("match");t.exports=function(t){var e;return o(t)&&(void 0!==(e=t[a])?!!e:"RegExp"==i(t))}},"466d":function(t,e,n){"use strict";var o=n("d784"),i=n("825a"),r=n("50c4"),a=n("1d80"),s=n("8aa5"),c=n("14c3");o("match",1,(function(t,e,n){return[function(e){var n=a(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,n):new RegExp(e)[t](String(n))},function(t){var o=n(e,t,this);if(o.done)return o.value;var a=i(t),l=String(this);if(!a.global)return c(a,l);var u=a.unicode;a.lastIndex=0;var d,h=[],p=0;while(null!==(d=c(a,l))){var f=String(d[0]);h[p]=f,""===f&&(a.lastIndex=s(l,r(a.lastIndex),u)),p++}return 0===p?null:h}]}))},"4d63":function(t,e,n){var o=n("83ab"),i=n("da84"),r=n("94ca"),a=n("7156"),s=n("9bf2").f,c=n("241c").f,l=n("44e7"),u=n("ad6d"),d=n("9f7f"),h=n("6eeb"),p=n("d039"),f=n("69f3").set,g=n("2626"),v=n("b622"),m=v("match"),w=i.RegExp,b=w.prototype,y=/a/g,x=/a/g,k=new w(y)!==y,E=d.UNSUPPORTED_Y,j=o&&r("RegExp",!k||E||p((function(){return x[m]=!1,w(y)!=y||w(x)==x||"/a/i"!=w(y,"i")})));if(j){var _=function(t,e){var n,o=this instanceof _,i=l(t),r=void 0===e;if(!o&&i&&t.constructor===_&&r)return t;k?i&&!r&&(t=t.source):t instanceof _&&(r&&(e=u.call(t)),t=t.source),E&&(n=!!e&&e.indexOf("y")>-1,n&&(e=e.replace(/y/g,"")));var s=a(k?new w(t,e):w(t,e),o?this:b,_);return E&&n&&f(s,{sticky:n}),s},I=function(t){t in _||s(_,t,{configurable:!0,get:function(){return w[t]},set:function(e){w[t]=e}})},O=c(w),C=0;while(O.length>C)I(O[C++]);b.constructor=_,_.prototype=b,h(i,"RegExp",_)}g("RegExp")},6346:function(t,e,n){},"65f0":function(t,e,n){var o=n("861d"),i=n("e8b5"),r=n("b622"),a=r("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?o(n)&&(n=n[a],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},7156:function(t,e,n){var o=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var r,a;return i&&"function"==typeof(r=e.constructor)&&r!==n&&o(a=r.prototype)&&a!==n.prototype&&i(t,a),t}},"8aa5":function(t,e,n){"use strict";var o=n("6547").charAt;t.exports=function(t,e,n){return e+(n?o(t,e).length:1)}},9263:function(t,e,n){"use strict";var o=n("ad6d"),i=n("9f7f"),r=RegExp.prototype.exec,a=String.prototype.replace,s=r,c=function(){var t=/a/,e=/b*/g;return r.call(t,"a"),r.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=i.UNSUPPORTED_Y||i.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(s=function(t){var e,n,i,s,d=this,h=l&&d.sticky,p=o.call(d),f=d.source,g=0,v=t;return h&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),v=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(f="(?: "+f+")",v=" "+v,g++),n=new RegExp("^(?:"+f+")",p)),u&&(n=new RegExp("^"+f+"$(?!\\s)",p)),c&&(e=d.lastIndex),i=r.call(h?n:d,v),h?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=d.lastIndex,d.lastIndex+=i[0].length):d.lastIndex=0:c&&i&&(d.lastIndex=d.global?i.index+i[0].length:e),u&&i&&i.length>1&&a.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),t.exports=s},"9f7f":function(t,e,n){"use strict";var o=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=o((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=o((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,e,n){"use strict";var o=n("23e7"),i=n("9263");o({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var o=n("825a");t.exports=function(){var t=o(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b64b:function(t,e,n){var o=n("23e7"),i=n("7b0b"),r=n("df75"),a=n("d039"),s=a((function(){r(1)}));o({target:"Object",stat:!0,forced:s},{keys:function(t){return r(i(t))}})},b727:function(t,e,n){var o=n("0366"),i=n("44ad"),r=n("7b0b"),a=n("50c4"),s=n("65f0"),c=[].push,l=function(t){var e=1==t,n=2==t,l=3==t,u=4==t,d=6==t,h=5==t||d;return function(p,f,g,v){for(var m,w,b=r(p),y=i(b),x=o(f,g,3),k=a(y.length),E=0,j=v||s,_=e?j(p,k):n?j(p,0):void 0;k>E;E++)if((h||E in y)&&(m=y[E],w=x(m,E,b),t))if(e)_[E]=w;else if(w)switch(t){case 3:return!0;case 5:return m;case 6:return E;case 2:c.call(_,m)}else if(u)return!1;return d?-1:l||u?u:_}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d784:function(t,e,n){"use strict";n("ac1f");var o=n("6eeb"),i=n("d039"),r=n("b622"),a=n("9263"),s=n("9112"),c=r("species"),l=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=r("replace"),h=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,d){var f=r(t),g=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),v=g&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e}));if(!g||!v||"replace"===t&&(!l||!u||h)||"split"===t&&!p){var m=/./[f],w=n(f,""[t],(function(t,e,n,o,i){return e.exec===a?g&&!i?{done:!0,value:m.call(e,n,o)}:{done:!0,value:t.call(n,e,o)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),b=w[0],y=w[1];o(String.prototype,t,b),o(RegExp.prototype,f,2==e?function(t,e){return y.call(t,this,e)}:function(t){return y.call(t,this)})}d&&s(RegExp.prototype[f],"sham",!0)}},d81d:function(t,e,n){"use strict";var o=n("23e7"),i=n("b727").map,r=n("1dde"),a=n("ae40"),s=r("map"),c=a("map");o({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},d916:function(t,e,n){},e8b5:function(t,e,n){var o=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==o(t)}},ed56:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1c265fc6.18a06295.js.map