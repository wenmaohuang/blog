(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8d16f5ba"],{"06c7":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"articleDetail"},[a("Nav"),a("div",{staticClass:"detail"},[a("div",{staticClass:"head"},[a("div",{staticClass:"title"},[a("h5",[a("a",{ref:"title",attrs:{model:t.article.title,value:t.article.title}},[t._v(t._s(t.article.title))])]),a("span",[t._v("作者")]),a("span",[t._v("...")]),a("span",[t._v("阅读")]),a("span",[t._v("...")]),a("span",[t._v("发表时间")]),a("span",[t._v("...")])]),a("aplayer",{attrs:{music:{title:"琵琶语",artist:"林海",src:"mp3/琵琶语.mp3",pic:"img/4.jpg"},list:[{title:"琵琶语",artist:"林海",src:"mp3/琵琶语.mp3",pic:"img/4.jpg"},{title:"金风玉露",artist:"杨春林",src:"mp3/金风玉露.mp3",pic:"img/4.jpg"},{title:"future",artist:"神思者",src:"mp3/future.m4a",pic:"img/4.jpg"},{title:"征服天堂",artist:"Vangelis",src:"mp3/征服天堂.mp3",pic:"img/4.jpg"},{title:"faded",artist:"walker",src:"mp3/faded.m4a",pic:"img/4.jpg"},{title:"少年",artist:"梦然",src:"mp3/少年.m4a",pic:"img/4.jpg"}],listFolded:!0,autoplay:!0,shuffle:!0,repeat:"repeat-all"}}),a("div",{staticClass:"time"},[a("p",[t._v(t._s(t.article.day))]),a("div",[a("span",[t._v(t._s(t.article.month+"月"))]),a("span",[t._v(t._s(t.article.year))])])])],1),a("aplayer",{staticClass:"maxaplayer",attrs:{music:{title:"琵琶语",artist:"林海",src:"mp3/琵琶语.mp3",pic:"img/4.jpg"},list:[{title:"琵琶语",artist:"林海",src:"mp3/琵琶语.mp3",pic:"img/4.jpg"},{title:"金风玉露",artist:"杨春林",src:"mp3/金风玉露.mp3",pic:"img/4.jpg"},{title:"future",artist:"神思者",src:"mp3/future.m4a",pic:"img/4.jpg"},{title:"征服天堂",artist:"Vangelis",src:"mp3/征服天堂.mp3",pic:"img/4.jpg"},{title:"faded",artist:"walker",src:"mp3/faded.m4a",pic:"img/4.jpg"},{title:"少年",artist:"梦然",src:"mp3/少年.m4a",pic:"img/4.jpg"}],listFolded:!0,autoplay:!0,shuffle:!0,repeat:"repeat-all"}}),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.article.content)}})],1),a("ArticleMessage",{on:{handleComment:t.comment}})],1)},n=[],s=a("216c"),c=a("c728"),r=a.n(c),o=a("6ccc"),l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message"},[a("div",{staticClass:"main"},[a("div",{staticClass:"content"},[a("article",[a("section",[a("h5",[t._v("发表评论")]),a("MessageRichText",{on:{Sub:t.handleSubmit}})],1),a("section",{staticClass:"mes"},[a("ul",t._l(t.commentList,(function(e,i){return a("li",{key:i},[a("div",{staticClass:"comment-parent"},[a("div",{staticClass:"p-img"}),a("div",{staticClass:"p-name"},[t._v(t._s(e.user.user))]),a("div",{staticClass:"p-content",domProps:{innerHTML:t._s(e.content)}}),a("div",{staticClass:"p-time"},[a("span",[t._v(t._s(t._f("getTime")(e.date)))]),a("span",{staticClass:"reply",on:{click:function(a){return t.reply(i,e._id)}}},[t._v("回复")])])]),a("ChildMessage",{attrs:{parentComment:e,parentUser:e.user.user,childCommentList:e.children}}),a("ParentRichText",{ref:"parentR",refInFor:!0,on:{Parent:t.parentSubmit}})],1)})),0)])])])])])},u=[],m=(a("99af"),a("4160"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit"},[a("textarea",{staticStyle:{display:"none"},attrs:{id:"edit"}}),a("button",{staticClass:"layui-btn",attrs:{type:"button"},on:{click:t.handleClick}},[t._v("提交")])])}),p=[],d={name:"RichText",data:function(){return{layedit:null,index:0,layui:""}},methods:{handleClick:function(){this.$emit("Sub",this.layedit.getContent(this.index))}},mounted:function(){var t=this;layui.use("layedit",(function(){t.layedit=layui.layedit,t.index=t.layedit.build("edit",{tool:["face"]})}))}},f=d,h=(a("53b7"),a("abe6"),a("2877")),g=Object(h["a"])(f,m,p,!1,null,null,null),v=g.exports,y=(a("9490"),a("bf1a")),_=a("96c3"),b=(o["a"].postArticleComment,o["a"].postArticleMessage,o["a"].getArticleMessage),C=o["a"].postArticleChildMessage,x=o["a"].postIfLogin,j={name:"index",data:function(){return{layui:null,commentList:[],comment:{}}},filters:{getTime:function(t){var e=new Date(t);return"".concat(e.getFullYear(),"年").concat(e.getMonth()+1,"月").concat(e.getDate(),"日")}},methods:{handleSubmit:function(t){console.log(t,89),this.$emit("handleComment",t)},parentSubmit:function(t){var e=this;x().then((function(a){a.data.userInfo?(console.log(a.data,111),console.log(t,"pp"),C({parentId:e.parentId,user:a.data.userInfo._id,content:t,reUser:a.data.userInfo.user}).then((function(t){layer.msg("留言成功",{icon:1}),setTimeout((function(){window.location.reload()}),1e4)})).catch((function(){layer.msg("服务器错误~请稍后再试",{icon:2})}))):layer.msg("请先登录",{icon:2})})).catch((function(){layer.msg("服务器出错了",{icon:2})}))},reply:function(t,e){this.commentIndex=t,this.parentId=e,this.$refs.parentR[t].parentReply(t)}},created:function(){},watch:{article:function(){}},mounted:function(){var t=this;console.log(this.$store.state.article,12),console.log(this.comment,23),b().then((function(e){t.articleList=e.data.data,t.articleList.forEach((function(e){e.title===t.$store.state.article.title&&(t.commentList=e.comment,console.log(t.commentList,56))}))}))},components:{MessageRichText:v,ParentRichText:y["a"],ChildMessage:_["a"]}},w=j,E=(a("b694"),Object(h["a"])(w,l,u,!1,null,"28788b70",null)),I=E.exports,M=o["a"].postIfLogin,T=o["a"].postArticleComment,L=o["a"].postArticleMessage,k={data:function(){return{article:""}},components:{Nav:s["a"],aplayer:r.a,ArticleMessage:I},methods:{comment:function(t){var e=this;M().then((function(a){a.data.userInfo?(console.log(a.data,111),console.log(t,98),T({user:a.data.userInfo._id,content:t}).then((function(t){console.log(t.data.data,"zz"),L({comment:t.data.data,articleId:e.$store.state.article._id}).then((function(t){layer.msg("留言成功",{icon:1}),setTimeout((function(){window.location.reload()}),2e4)})).catch((function(){layer.msg("服务器错误~请稍后再试",{icon:2})})),layer.msg("留言成功",{icon:1}),setTimeout((function(){window.location.reload()}),2e4)})).catch((function(){layer.msg("服务器错误~请稍后再试",{icon:2})}))):layer.msg("请先登录",{icon:2})})).catch((function(){layer.msg("服务器出错了",{icon:2})}))}},created:function(){this.article=this.$store.state.article,console.log(this.article,11)}},$=k,A=(a("d3f9"),Object(h["a"])($,i,n,!1,null,null,null));e["default"]=A.exports},"159b":function(t,e,a){var i=a("da84"),n=a("fdbc"),s=a("17c2"),c=a("9112");for(var r in n){var o=i[r],l=o&&o.prototype;if(l&&l.forEach!==s)try{c(l,"forEach",s)}catch(u){l.forEach=s}}},"17c2":function(t,e,a){"use strict";var i=a("b727").forEach,n=a("a640"),s=a("ae40"),c=n("forEach"),r=s("forEach");t.exports=c&&r?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},"380d":function(t,e,a){},4160:function(t,e,a){"use strict";var i=a("23e7"),n=a("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"49aa":function(t,e,a){},"53b7":function(t,e,a){"use strict";var i=a("380d"),n=a.n(i);n.a},a36d:function(t,e,a){},abe6:function(t,e,a){"use strict";var i=a("e8a2"),n=a.n(i);n.a},b694:function(t,e,a){"use strict";var i=a("49aa"),n=a.n(i);n.a},b727:function(t,e,a){var i=a("0366"),n=a("44ad"),s=a("7b0b"),c=a("50c4"),r=a("65f0"),o=[].push,l=function(t){var e=1==t,a=2==t,l=3==t,u=4==t,m=6==t,p=5==t||m;return function(d,f,h,g){for(var v,y,_=s(d),b=n(_),C=i(f,h,3),x=c(b.length),j=0,w=g||r,E=e?w(d,x):a?w(d,0):void 0;x>j;j++)if((p||j in b)&&(v=b[j],y=C(v,j,_),t))if(e)E[j]=y;else if(y)switch(t){case 3:return!0;case 5:return v;case 6:return j;case 2:o.call(E,v)}else if(u)return!1;return m?-1:l||u?u:E}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d3f9:function(t,e,a){"use strict";var i=a("a36d"),n=a.n(i);n.a},e8a2:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8d16f5ba.f9bd83e0.js.map