<template>
  <div class="main">
    <div class="drawer">
      <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
        <i class="iconfont icon-caidan"></i>
      </el-button>

      <el-drawer title :visible.sync="drawer" :show-close="true">
        <div class="blog">
          <router-link to="/">首页</router-link>
          <router-link to="/blog/0">博客</router-link>
          <router-link to="/message">留言</router-link>
        </div>
      </el-drawer>
    </div>
    <div class="first" :style="{height:bgHeight+'px',}">
      <a href="http://www.fyyd.vip/#/blog/0" :style="{}">
        ENTER
      </a>
    </div>
    <div class="second" v-show="true">
      <ul>
        <li v-for="(i,index) in obj.href" :key="index">
          <a :href="i" :style="style">{{obj.msg[index]}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      drawer: false,
      isClick: false,
      bgHeight: 0,
      style: { display: "block", textDecoration: "none", textAlign: "center" },
      obj: {
        msg: [
          "面试资料",
          "local-server",
          "local-client",
          "github",
          "express-server",
          "nginx-server",
          "十三燕",
          "QQ音乐",
          "阿里云",
          "美女图片",
          "潭州教育afei",
          "百度翻译",
          "mongoose-database",
          "百度搜素",
          "elementUI",
          "cctv",
          "潭州教育remi",
          "VUE",
          "潭州教育追梦",
          "潭州教育海文",
          "阿里图标",
          "layUI",
          "拉钩网"
        ],
        href: [
          "https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md",
          "http://localhost/#/blog/0",
          "http://localhost:8080/#/blog/0",
          "https://github.com/",
          "http://www.fyyd.vip/#/blog/0",
          "http://www.fyyd.vip:3000",
          "https://www.yanshisan.cn/Blog/Article",
          "https://y.qq.com/portal/player.html",
          "https://www.aliyun.com/",
          "https://www.umei.cc/bizhitupian/meinvbizhi/",
          "https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997",
          "https://fanyi.baidu.com/?aldtype=16047#auto/zh",
          "http://www.mongoosejs.net/docs/models.html",
          "http://baidu.com",
          "https://element.eleme.cn/#/zh-CN/component/installation",
          "http://tv.cctv.com/live/",
          "https://www.shiguangkey.com/video/903?videoId=242629&classId=17830&playback=1",
          "https://vuejs.org/",
          "https://www.shiguangkey.com/video/1561?videoId=53934&classId=4298&playback=1",
          "https://www.shiguangkey.com/video/1561?videoId=86919&classId=6240&playback=1",
          "https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1811983",
          "https://www.layui.com/",
          "https://www.lagou.com/resume/myresume.html"
        ]
      }
    };
  },
  methods: {
    getWindowHeight() {
      this.bgHeight = window.innerHeight;
    }
  },
  mounted() {
    this.getWindowHeight();
    window.addEventListener("resize", this.getWindowHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.getWindowHeight);
  }
};
</script>

<style lang="less" scoped>
.main {
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
            align-items: flex-start;
            transform: rotate(-7deg);

            a {
              width: 150px;
              text-align: left;
              margin: 30px 50px;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
  .first {
    background-image: url("../../assets/img/3.jpg");
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
  .second {
    ul {
      list-style-type: none;
      li {
        margin: 10px;
      }
    }
  }
}
</style>


<style lang="less">
.el-drawer {
  width: 25% !important;
  .el-drawer__header {
    flex-direction: row-reverse;
    transform: rotate(-7deg);

    padding-top: 35px;
  }
}

@media only screen and (max-width: 500px) {
  .el-drawer {
    width: 40% !important;
  }
}
</style>