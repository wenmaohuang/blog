webpackJsonp([4],{"/TzG":function(t,e,n){"use strict";var i=n("i9tX"),o=n("TRbm").map,s=n("pVRE"),r=n("a4aT"),a=s("map"),c=r("map");i({target:"Array",proto:!0,forced:!a||!c},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"3Ipg":function(t,e,n){var i=n("i9tX"),o=n("EJk4"),s=n("/09a");i({target:"Object",stat:!0,forced:n("r54x")(function(){s(1)})},{keys:function(t){return s(o(t))}})},"5in1":function(t,e,n){var i=n("HAas"),o=n("raVe"),s=n("jAiL")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},"7bcd":function(t,e,n){"use strict";var i=n("r54x");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=i(function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")}),e.BROKEN_CARET=i(function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")})},A9wm:function(t,e,n){"use strict";var i=n("A6BG").charAt;t.exports=function(t,e,n){return e+(n?i(t,e).length:1)}},B9ov:function(t,e,n){var i=n("raVe"),o=n("mtht");t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var s=n.call(t,e);if("object"!=typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==i(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},BcDb:function(t,e){},"I/QC":function(t,e,n){var i=n("q0qZ"),o=n("hcE8"),s=n("hGaF"),r=n("3Nrx"),a=n("1rEs").f,c=n("gLsf").f,l=n("5in1"),u=n("Rx3A"),h=n("7bcd"),d=n("+opI"),p=n("r54x"),f=n("I1z2").set,g=n("Q3+A"),v=n("jAiL")("match"),m=o.RegExp,w=m.prototype,y=/a/g,x=/a/g,b=new m(y)!==y,_=h.UNSUPPORTED_Y;if(i&&s("RegExp",!b||_||p(function(){return x[v]=!1,m(y)!=y||m(x)==x||"/a/i"!=m(y,"i")}))){for(var k=function(t,e){var n,i=this instanceof k,o=l(t),s=void 0===e;if(!i&&o&&t.constructor===k&&s)return t;b?o&&!s&&(t=t.source):t instanceof k&&(s&&(e=u.call(t)),t=t.source),_&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=r(b?new m(t,e):m(t,e),i?this:w,k);return _&&n&&f(a,{sticky:n}),a},E=function(t){t in k||a(k,t,{configurable:!0,get:function(){return m[t]},set:function(e){m[t]=e}})},j=c(m),I=0;j.length>I;)E(j[I++]);w.constructor=k,k.prototype=w,d(o,"RegExp",k)}g("RegExp")},LBAN:function(t,e,n){"use strict";var i=n("ftyM"),o=n("5+O3"),s=n("xDUa"),r=n("hiy0"),a=n("A9wm"),c=n("B9ov");i("match",1,function(t,e,n){return[function(e){var n=r(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,n):new RegExp(e)[t](String(n))},function(t){var i=n(e,t,this);if(i.done)return i.value;var r=o(t),l=String(this);if(!r.global)return c(r,l);var u=r.unicode;r.lastIndex=0;for(var h,d=[],p=0;null!==(h=c(r,l));){var f=String(h[0]);d[p]=f,""===f&&(r.lastIndex=a(l,s(r.lastIndex),u)),p++}return 0===p?null:d}]})},"Q3+A":function(t,e,n){"use strict";var i=n("aqbq"),o=n("1rEs"),s=n("jAiL"),r=n("q0qZ"),a=s("species");t.exports=function(t){var e=i(t),n=o.f;r&&e&&!e[a]&&n(e,a,{configurable:!0,get:function(){return this}})}},XEfP:function(t,e,n){"use strict";var i=n("i9tX"),o=n("mtht");i({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},XsSr:function(t,e){},ftyM:function(t,e,n){"use strict";n("XEfP");var i=n("+opI"),o=n("r54x"),s=n("jAiL"),r=n("mtht"),a=n("asqq"),c=s("species"),l=!o(function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}),u="$0"==="a".replace(/./,"$0"),h=s("replace"),d=!!/./[h]&&""===/./[h]("a","$0"),p=!o(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]});t.exports=function(t,e,n,h){var f=s(t),g=!o(function(){var e={};return e[f]=function(){return 7},7!=""[t](e)}),v=g&&!o(function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[c]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return e=!0,null},n[f](""),!e});if(!g||!v||"replace"===t&&(!l||!u||d)||"split"===t&&!p){var m=/./[f],w=n(f,""[t],function(t,e,n,i,o){return e.exec===r?g&&!o?{done:!0,value:m.call(e,n,i)}:{done:!0,value:t.call(n,e,i)}:{done:!1}},{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),y=w[0],x=w[1];i(String.prototype,t,y),i(RegExp.prototype,f,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}h&&a(RegExp.prototype[f],"sham",!0)}},i0MD:function(t,e){},lQYP:function(t,e){},mtht:function(t,e,n){"use strict";var i,o,s=n("Rx3A"),r=n("7bcd"),a=RegExp.prototype.exec,c=String.prototype.replace,l=a,u=(i=/a/,o=/b*/g,a.call(i,"a"),a.call(o,"a"),0!==i.lastIndex||0!==o.lastIndex),h=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1];(u||d||h)&&(l=function(t){var e,n,i,o,r=this,l=h&&r.sticky,p=s.call(r),f=r.source,g=0,v=t;return l&&(-1===(p=p.replace("y","")).indexOf("g")&&(p+="g"),v=String(t).slice(r.lastIndex),r.lastIndex>0&&(!r.multiline||r.multiline&&"\n"!==t[r.lastIndex-1])&&(f="(?: "+f+")",v=" "+v,g++),n=new RegExp("^(?:"+f+")",p)),d&&(n=new RegExp("^"+f+"$(?!\\s)",p)),u&&(e=r.lastIndex),i=a.call(l?n:r,v),l?i?(i.input=i.input.slice(g),i[0]=i[0].slice(g),i.index=r.lastIndex,r.lastIndex+=i[0].length):r.lastIndex=0:u&&i&&(r.lastIndex=r.global?i.index+i[0].length:e),d&&i&&i.length>1&&c.call(i[0],n,function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(i[o]=void 0)}),i}),t.exports=l},wNfC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n("/TzG"),n("3Ipg"),n("I/QC"),n("XEfP"),n("q4B+"),n("LBAN");var i=n("/C1n"),o=(n("vw/H"),{name:"Search",methods:{fn:function(){var t=this;fetch("https://test.fyyd.vip:3102/search?word="+this.word).then(function(t){return t.json()}).then(function(e){t.jsonArr=e,console.log(t.jsonArr,"e1")})},handleClick:function(){var t,e;t=this.word,(e=JSON.parse(localStorage.getItem("list"))||[]).push(t),e.length>8&&e.shift(),localStorage.setItem("list",JSON.stringify(e)),window.location.href="https://www.baidu.com/s?wd="+this.word},handleFocus:function(){this.jsonArr=JSON.parse(localStorage.getItem("list")),console.log(this.jsonArr,"d1")}},data:function(){return{jsonArr:[],word:"",wordList:[]}},mounted:function(){console.log(localStorage,"aa"),this.$refs.autoFocus.focus()}}),s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search"},[n("div",{staticClass:"input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],ref:"autoFocus",attrs:{type:"text"},domProps:{value:t.word},on:{input:[function(e){e.target.composing||(t.word=e.target.value)},t.fn],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleClick(e)},focus:t.handleFocus}}),t._v(" "),n("button",{on:{click:t.handleClick}},[t._v("搜索")])]),t._v(" "),n("ul",t._l(t.jsonArr,function(e,i){return n("li",{key:i},[n("a",{attrs:{href:"https://www.baidu.com/s?wd="+e,target:"_blank"}},[t._v(t._s(e))])])}),0)])},staticRenderFns:[]};var r=n("VU/8")(o,s,!1,function(t){n("lQYP")},"data-v-fe75e47e",null).exports,a=n("xJsL"),c=i.a.postLogin,l=i.a.postIfLogin,u={name:"index",data:function(){return{drawer:!1,isClick:!1,count:0,activeNames:["1"],bgHeight:0,ifLogin:!1,word:"",style:{display:"block",textDecoration:"none",textAlign:"center",fontSize:"20px"},ifFocus:!1,reg:{},searchObj:{},newObj:{},searchKye:"",obj:{github:"https://github.com/",mongoosejs:"https://mongoosejs.com/docs/guide.html",npmjs:"https://www.npmjs.com/",element:"https://element.eleme.cn/#/zh-CN/component/installation",vuejs:"https://vuejs.org/",layui:"https://www.layui.com/",qqMusic:"https://y.qq.com/portal/player.html",aliyun:"https://www.aliyun.com/",iconfont:"https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1811983",fanyi:"https://fanyi.baidu.com/?aldtype=16047#auto/zh",photoGirls:"https://www.umei.cc/bizhitupian/meinvbizhi/",yinshi:"https://www.shiguangkey.com/video/1346?videoId=141606&classId=9262&playback=1",afei:"https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997",remi:"https://www.shiguangkey.com/video/903?videoId=242629&classId=17830&playback=1",zhuimeng:"https://www.shiguangkey.com/video/1561?videoId=53934&classId=4298&playback=1",haiwen:"https://www.shiguangkey.com/video/1561?videoId=86919&classId=6240&playback=1",wanzhang1:"https://www.shiguangkey.com/video/5404?videoId=125677&classId=8638&playback=1",wanZhang2:"https://www.shiguangkey.com/video/903?videoId=191211&classId=12327&playback=1",cctv:"http://tv.cctv.com/live/",yanshisan:"https://www.yanshisan.cn/Blog/Article",afeifeifei:"https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md",lagou:"https://www.lagou.com/resume/myresume.html","51job":"https://i.51job.com/userset/my_51job.php?lang=c",zhaopin:"https://i.zhaopin.com/","58tongcheng":"https://my.58.com/pro/myjob/index/?PGTID=0d000000-0000-05c4-710e-6428d7138f3a&ClickID=1",zhipin:"https://www.zhipin.com/web/geek/recommend?ka=header-personal",weixin:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/",weixinAdmin:"https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=174094833&lang=zh_CN",bilibili:"https://www.bilibili.com/video/BV1nE41117BQ?p=9",movie:"http://27k.cc/?m=vod-play-id-37805-src-1-num-1.html",flutter:"https://flutter.dev/docs/development/tools/android-studio",typescript:"https://www.typescriptlang.org/docs/handbook/gulp.html",node:"https://nodejs.org/dist/latest-v14.x/docs/api/",webpack:"https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax",react:"https://reactjs.org/docs/getting-started.html",angular:"https://angular.io/docs",angularblog:"http://www.fyyd.vip:3003",nginx:"http://nginx.org/en/docs/",centos:"https://www.linuxidc.com/Linux/2018-06/152959.htm",express:"https://www.expressjs.com.cn/5x/api.html",blogadmin:"http://www.fyyd.vip:3002/",reactblog:"http://www.fyyd.vip:3001/",mysql:"https://dev.mysql.com/doc/refman/8.0/en/connection-options.html",apache:"http://httpd.apache.org/docs/2.4/",gulpjs:"https://gulpjs.com/docs/en/api/registry",babel:"https://babeljs.io/docs/en/",less:"http://lesscss.org/",meinv:"https://www.tupianzj.com/meinv/mm/",mdn:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",threejs:"http://www.webgl3d.cn/"}}},computed:{},watch:{},methods:{getWindowHeight:function(){this.bgHeight=window.innerHeight},handleChange:function(t){console.log(t)},handleEnter:function(){this.searchObj=Object.assign({},this.newObj)},handleOver:function(){console.log("c2"),this.$refs.autoFocus.focus()},handleSearch:function(){for(var t in this.obj)this.word&&(this.$delete(this.searchObj,t),console.log("e2"),this.reg=new RegExp("^"+this.word),this.searchKey=t.match(this.reg),null!==this.searchKey&&(this.searchKeyInput=this.searchKey.input,console.log(this.searchKey,"p1"),this.$set(this.searchObj,this.searchKeyInput,this.obj[this.searchKeyInput]))),""===this.word&&console.log("a2")},handleDelete:function(){for(var t in console.log("u1"),this.searchObj)this.reg=new RegExp("^"+this.word),this.searchKey=t.match(this.reg),this.$delete(this.searchObj,t);""===this.word&&(this.searchObj=Object.assign({},this.newObj))},load:function(){this.count+=2},handlerLogin:function(){var t=this.$createElement;console.log(this,"a1"),this.$msgbox({title:"登录",message:t(a.a),showCancelButton:!0,showConfirmButton:!0,closeOnClickModal:!1,confirmButtonText:"马上登录",cancelButtonText:"取消",beforeClose:function(t,e,n){"confirm"===t?function(){var t=this;this.$refs.form.validate(function(e){if(!e)return!1;c(t.form).then(function(e){console.log(e),e.data.code?t.$message({message:e.data.msg,type:"error",duration:2e3}):(t.$message({message:e.data.msg,type:"success",duration:2e3}),n(),setTimeout(function(){window.location.reload()}))}).catch(function(){t.$message({message:"登录失败,稍后再试",type:"error",duration:2e3})})})}.call(e.$children[2]):n()}}).then(function(){}).catch(function(){})}},components:{Search:r},mounted:function(){var t=this;this.getWindowHeight(),window.addEventListener("resize",this.getWindowHeight),this.newObj={},Object.keys(this.obj).sort().map(function(e){t.newObj[e]=t.obj[e]})},created:function(){var t=this;l().then(function(e){e.data.userInfo?t.ifLogin=!0:t.ifLogin=!1})},destroyed:function(){window.removeEventListener("resize",this.getWindowHeight)}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"drawer"},[n("el-button",{staticStyle:{"margin-left":"16px"},attrs:{type:"primary"},on:{click:function(e){t.drawer=!0}}},[n("i",{staticClass:"iconfont icon-caidan"})]),t._v(" "),n("el-drawer",{attrs:{title:"",visible:t.drawer,"show-close":!0},on:{"update:visible":function(e){t.drawer=e}}},[n("div",{staticClass:"blog"},[n("el-button",{on:{click:t.handlerLogin}},[t._v("登录")]),t._v(" "),n("router-link",{attrs:{to:"/blog"}},[t._v("博客")]),t._v(" "),n("router-link",{attrs:{to:"/message"}},[t._v("留言")]),t._v(" "),n("router-link",{attrs:{to:"/links"}},[t._v("友链")]),t._v(" "),n("router-link",{attrs:{to:"/about"}},[t._v("关于")])],1)])],1),t._v(" "),n("div",{staticClass:"bgc",style:{height:t.bgHeight+"px"}},[n("Search")],1),t._v(" "),n("footer",[n("div",{staticClass:"about"},[n("p",[t._v("风移影动")]),t._v(" "),n("p",[t._v("自由自在的流浪")]),t._v(" "),n("p",[n("router-link",{attrs:{to:"/about"}},[t._v("about me")])],1)]),t._v(" "),n("div",{staticClass:"link"},[n("p",[t._v("相关链接")]),t._v(" "),n("p",[n("router-link",{attrs:{to:"/blog/全部文章"}},[t._v("博客")])],1),t._v(" "),n("p",[n("router-link",{attrs:{to:"/daily"}},[t._v("日记")])],1)]),t._v(" "),t._m(0)]),t._v(" "),n("el-collapse",{on:{change:t.handleChange},nativeOn:{"~mouseenter":function(e){return t.handleEnter(e)},mouseover:function(e){return t.handleOver(e)}},model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[n("el-collapse-item",{directives:[{name:"show",rawName:"v-show",value:t.ifLogin,expression:"ifLogin"}],attrs:{title:"",name:"1"}},[n("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.load,expression:"load"}],staticClass:"infinite-list",staticStyle:{overflow:"scroll",height:"250px"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.word,expression:"word"}],ref:"autoFocus",staticStyle:{display:"block",width:"250px",height:"45px","font-size":"20px","text-indent":"1em",margin:"0 auto","border-radius":"10px","border-width":"1px","border-style":"solid"},attrs:{type:"text"},domProps:{value:t.word},on:{input:[function(e){e.target.composing||(t.word=e.target.value)},t.handleSearch],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.handleDelete(e)}}}),t._v(" "),t._l(t.searchObj,function(e,i){return n("li",{key:i,staticClass:"infinite-list-item"},[n("a",{style:t.style,attrs:{href:e}},[t._v(t._s(i))])])})],2)])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"connect"},[e("p",[this._v("联系我")]),this._v(" "),e("p",[this._v("地址:广州番禺小龙村")]),this._v(" "),e("p",[this._v("QQ:648371113")]),this._v(" "),e("p",[this._v("邮箱:648371113@qq.com")])])}]};var d=n("VU/8")(u,h,!1,function(t){n("XsSr"),n("i0MD"),n("BcDb")},"data-v-08fd3c20",null);e.default=d.exports}});