<template>
  <div class="home">
    <div class="drawer">
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        <i class="iconfont icon-caidan"></i>
      </el-button>
      <el-drawer title :visible.sync="drawer" :show-close="true" :modal="false">
        <div class="blog">
          <!-- <el-button @click="handlerLogin">登录</el-button> -->
          <DialogLogin></DialogLogin>

          <router-link to="/nav/blog">博客</router-link>
          <router-link to="/nav/message">留言</router-link>
          <router-link to="/nav/links">友链</router-link>
          <router-link to="/nav/about">关于</router-link>
        </div>
      </el-drawer>
    </div>
    <div class="bgc" :style="{height:bgHeight+'px',}">
      <Search></Search>
    </div>

    <footer>
      <div class="about">
        <p>风移影动</p>
        <p>自由自在的流浪</p>
        <p>
          <router-link to="/nav/about">about me</router-link>
        </p>
        <p>粤ICP备19161033号</p>
      </div>
      <div class="link">
        <p>相关链接</p>
        <p>
          <router-link to="/nav/blog">博客</router-link>
        </p>
        <p>
          <router-link to="/nav/daily">日记</router-link>
        </p>
        <p id="qqLoginBtn" style="{width:100%}" @click.stop="handleQQLogin"></p>
      </div>
      <div class="connect">
        <p>联系我</p>
        <p>地址:广州番禺小龙村</p>
        <p>QQ:648371113</p>
        <p>邮箱:648371113@qq.com</p>
      </div>
    </footer>
    <el-collapse
      v-model="activeNames"
      @change="handleChange"
      @mouseenter.native.once="handleEnter"
      @mouseover.native="handleOver"
    >
      <el-collapse-item v-show="ifLogin" title name="1">
        <ul class="infinite-list" v-infinite-scroll="load" style="overflow:scroll;height:250px;">
          <input
            type="text"
            v-model="word"
            @input="handleSearch"
            @keyup.delete="handleDelete"
            ref="autoFocus"
            style="display:block;width:250px;height:45px;font-size:20px;text-indent:1em;margin:0 auto;border-radius:10px;border-width:1px;border-style:solid"
          />

          <li v-for="(item,index) in searchObj" class="infinite-list-item" :key="index">
            <a :href="item" :style="style">{{ index }}</a>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import request from "../../api/index";
import Search from "../../src/components/Search";
// import Login from "../../src/components/Login";
import DialogLogin from "../../src/components/DialogLogin";

import axios from "axios";

// const postLogin = request.postLogin;

const postIfLogin = request.postIfLogin;

export default {

  name: "index",
  data() {
    return {
      // dialogFormVisible: false,
      drawer: false,
      isClick: false,
      count: 0,
      activeNames: ["1"],
      bgHeight: 0,
      ifLogin: false,
      ifTrue:true,
      word: "",
      isShowModal:true,
      style: {
        display: "block",
        textDecoration: "none",
        textAlign: "center",
        fontSize: "20px",
      },
      ifFocus: false,
      reg: {},
      searchObj: {},
      newObj: {},
      searchKye: "",
      appid: "101896922",
      appkey: "a514dac8c90c50a2d3f9d17748b274b2",
      redirectURI: "https%3a%2f%2fwww.fyyd.vip%2fcb",
      state: "abc12345",
      obj: {
        redux:"https://redux.js.org/tutorials/essentials/part-4-using-data",
        material:"https://material-ui.com/components/tables/#table",
        ant: "https://ant.design/components/divider/",
        bilibiligulp: "https://www.bilibili.com/video/BV1D4411P7tx?p=3",
        github: "https://github.com/",

        mongoosejs: "https://mongoosejs.com/docs/guide.html",
        npmjs: "https://www.npmjs.com/",
        element: "https://element.eleme.cn/#/zh-CN/component/installation",
        vuejs: "https://vuejs.org/",
        layui: "https://www.layui.com/",
        qqMusic: "https://y.qq.com/portal/player.html",
        aliyun: "https://www.aliyun.com/",
        iconfont:
          "https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1811983",
        fanyi: "https://fanyi.baidu.com/?aldtype=16047#auto/zh",
        photoGirls: "https://www.umei.cc/bizhitupian/meinvbizhi/",
        yinshi:
          "https://www.shiguangkey.com/video/1346?videoId=141606&classId=9262&playback=1",
        afei:
          "https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997",
        remi:
          "https://www.shiguangkey.com/video/903?videoId=242629&classId=17830&playback=1",
        zhuimeng:
          "https://www.shiguangkey.com/video/1561?videoId=53934&classId=4298&playback=1",
        haiwen:
          "https://www.shiguangkey.com/video/1561?videoId=86919&classId=6240&playback=1",
        wanzhang1:
          "https://www.shiguangkey.com/video/5404?videoId=125677&classId=8638&playback=1",
        wanZhang2:
          "https://www.shiguangkey.com/video/903?videoId=191211&classId=12327&playback=1",
        cctv: "http://tv.cctv.com/live/",
        yanshisan: "https://www.yanshisan.cn/Blog/Article",
        afeifeifei:
          "https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md",
        lagou: "https://www.lagou.com/resume/myresume.html",
        "51job": "https://i.51job.com/userset/my_51job.php?lang=c",
        zhaopin: "https://i.zhaopin.com/",
        "58tongcheng":
          "https://my.58.com/pro/myjob/index/?PGTID=0d000000-0000-05c4-710e-6428d7138f3a&ClickID=1",
        zhipin: "https://www.zhipin.com/web/geek/recommend?ka=header-personal",
        weixin:
          "https://developers.weixin.qq.com/miniprogram/en/dev/framework/",
        weixinAdmin:
          "https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=174094833&lang=zh_CN",
        bilibiliweixin: "https://www.bilibili.com/video/BV1nE41117BQ?p=9",
        movie: "http://27k.cc/?m=vod-play-id-37805-src-1-num-1.html",
        flutter: "https://flutter.dev/docs/development/tools/android-studio",
        typescript: "https://www.typescriptlang.org/docs/handbook/gulp.html",
        node: "https://nodejs.org/dist/latest-v14.x/docs/api/",
        webpack:
          "https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax",
        react: "https://reactjs.org/docs/getting-started.html",
        angular: "https://angular.cn/guide/architecture-modules",
        ngblog: "http://www.fyyd.vip:3003",
        nginx: "http://nginx.org/en/docs/",
        centos: "https://www.linuxidc.com/Linux/2018-06/152959.htm",
        express: "https://www.expressjs.com.cn/5x/api.html",
        blogadmin: "http://www.fyyd.vip:3002/",
        reblog: "http://www.fyyd.vip:3001/",
        mysql:
          "https://dev.mysql.com/doc/refman/8.0/en/connection-options.html",
        apache: "http://httpd.apache.org/docs/2.4/",
        gulpjs: "https://gulpjs.com/docs/en/api/registry",
        babel: "https://babeljs.io/docs/en/",
        less: "http://lesscss.org/",
        meinv: "https://www.tupianzj.com/meinv/mm/",
        mdn: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        threejs: "http://www.webgl3d.cn/",
        bootCDN: "https://www.bootcdn.cn/",
        bilibiliangualar:
          "https://www.bilibili.com/video/BV1bt411e71b?from=search&seid=15562787847422779010",
        angularcn: "https://angular.cn/tutorial/toh-pt3",
        angulartantui:
          "https://ng.ant.design/components/collapse/en#ng-content",
      },
    };
  },
  computed: {},
  watch: {
    // ifLogin:'reloadOnce',
  },
  

  methods: {
    reloadOnce(){
        if(this.ifTrue){
          window.location.reload();
          this.ifTrue = false
        }else{
          return
        }
    },
    handleReload() {
      window.location.reload();
    },
    handldeLogin(data, opts) {
      console.log(data, opts, "#$");
      if (QC.Login.check()) {
        this.ifLogin = true;
      } else {
        this.ifLogin = false;
      }
      var dom = document.getElementById(opts["btnId"]),
        _logoutTemplate = [
          //头像
          '<span><img src="{figureurl}"  class="{size_key}"/></span>',
          //昵称
          "<span>{nickname}</span>",
          //退出
          '<span><a @click.stop="handleStop" href="javascript:QC.Login.signOut();">退出</a></span>',
        ].join("");
      dom &&
        (dom.innerHTML = QC.String.format(_logoutTemplate, {
          nickname: QC.String.escHTML(data.nickname), //做xss过滤
          figureurl: data.figureurl,
        }));
    },
    logoutFun() {},
    outCallBackFun() {
      console.log(QC.Login.check(), "#*");
      // window.location.href = 'https://www.fyyd.vip'
    },
    handleQQLogin() {
      window.location.href = document.querySelector("#qq_login_iframe").src;
      // console.log(QC.Login.check(), "#!");
    },

    handleStop() {
      console.log("stop");
    },
    getWindowHeight() {
      this.bgHeight = window.innerHeight;
    },
    // handleChange(val) {
    //     // console.log(val);
    // },
    handleEnter() {
      this.searchObj = Object.assign({}, this.newObj);
    },
    handleOver() {
      this.$refs.autoFocus.focus();
    },

    handleSearch() {
      for (var key in this.obj) {
        if (this.word) {
          this.$delete(this.searchObj, key);
          console.log("e2");
          this.reg = new RegExp("^" + this.word);
          this.searchKey = key.match(this.reg);
          if (this.searchKey !== null) {
            this.searchKeyInput = this.searchKey["input"];
            console.log(this.searchKey, "p1");
            this.$set(
              this.searchObj,
              this.searchKeyInput,
              this.obj[this.searchKeyInput]
            );
          }
        }
        // if (this.word === "") {
        //     console.log();
        // }
      }
    },
    handleDelete() {
      console.log("u1");
      for (var key in this.searchObj) {
        this.reg = new RegExp("^" + this.word);
        this.searchKey = key.match(this.reg);
        this.$delete(this.searchObj, key);
      }
      if (this.word === "") {
        this.searchObj = Object.assign({}, this.newObj);
      }
    },
    load() {
      this.count += 2;
    },
  },
  components: {
    Search,
    DialogLogin,
  },

  updated() {
    console.log(QC.Login.check(), "#%");
  },

  mounted() {
    console.log(window.innerWidth,'3e');
    if(window.innerWidth<500){
      this.isShowModal = false
    }
    QC.Login(
      {
        // btnId: "qqLoginBtn", //插入按钮的节点id
        // appid: 101896922,
        redirectURI: "https://www.fyyd.vip/nav/blog", //登录成功后会自动跳往该地址
        btnId:'qqLoginBtn',
        showModal: this.isShowModal,
        // size:'A_L'
      },
      this.handldeLogin,
      function (opts) {
        console.log("QQ登录 注销成功 !");
        window.location.reload();
      }
    );

    // console.log(QC, "@^");

    this.getWindowHeight();
    window.addEventListener("resize", this.getWindowHeight);

    this.newObj = {};
    Object.keys(this.obj)
      .sort()
      .map((key) => {
        this.newObj[key] = this.obj[key];
      });

    postIfLogin().then((res) => {
      if (res.data.userInfo) {
        this.ifLogin = true;
      } else {
        this.ifLogin = false;
      }
    });
  },
  created() {

  },
  destroyed() {
    window.removeEventListener("resize", this.getWindowHeight);
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  .drawer {
    position: absolute;
    right: 30px;
    .el-button {
      background-color: transparent;
      border-color: transparent;
      i {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        border-radius: 50%;

        &:hover {
          background-color: blue;
        }
      }
    }
    .el-drawer__wrapper {
      transform: rotate(7deg);
      transform-origin: right;
      height: 2000px;
      left: -140px;
      .el-drawer {
        position: relative;
        top: 100px;
        background-color: #aaa;
        .el-drawer__body {
          .blog {
            display: flex;
            flex-direction: column;
            align-items: center;
            transform: rotate(-7deg);
            padding-right: 70px;
            font-size: 20px;
            .dialogLogin {
              padding-bottom: 15px;

              .el-button {
                width: 150px;
                font-size: 20px;
              }
            }

            a {
              width: 150px;
              text-align: center;
              margin: 30px 0;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
  .bgc {
    background-image: url("https://www.fyyd.vip/blog/img/3.jpg");
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      display: flex;
      font-size: 40px;
      text-decoration: none;
      background-color: lightblue;
      padding: 5px;
      color: red;
      border-radius: 10px;
      box-shadow: 0 0 30px yellow inset;
    }
  }
  .el-collapse {
    .el-collapse-item {
      // z-index: 1;
      position: relative;
      margin: 0 auto;
      .infinite-list::-webkit-scrollbar {
        display: none;
      }
    }
  }
}
</style>

<style lang="less">
.el-message-box__wrapper {
  @media only screen and (max-width: 500px) {
    .el-message-box {
      position: absolute;
      left: 0px;
      right: 0px;
      width: 95%;
      margin: 50% auto;
    }
  }
}
</style>


<style lang="less" scoped>
footer {
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  width: 100%;
  background-color: #232328;
  color: #fff;
  padding: 100px 0;

  .about {
    width: 100%;
    p {
      padding: 10px;
      text-align: center;

      &:nth-child(1) {
        font-size: 20px;
      }
      a {
        color: #fff;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  .link {
    width: 100%;
    p {
      padding: 10px;
      text-align: center;

      &:nth-child(1) {
        font-size: 20px;
      }
      a {
        color: #fff;
        font-size: 16px;
        text-align: center;
      }
    }
  }
  .connect {
    width: 100%;

    p {
      padding: 10px;
      text-align: center;

      &:nth-child(1) {
        font-size: 20px;
      }
      a {
        color: #fff;
        font-size: 16px;
        text-align: center;
      }
    }
  }
}

@media only screen and (max-width: 500px) {
  /deep/ .el-drawer {
    width: 40% !important;
    // background-color: #333 !important;
    .el-drawer__wrapper {
      transform: rotate(5deg) !important;
      .el-drawer__header {
        transform: rotate(-5deg) !important;
      }
      .el-drawer__body {
        .blog {
          transform: rotate(-5deg) !important;
        }
      }
    }
  }
}
// @media only screen and (max-width: 500px) {
  
// }
</style>