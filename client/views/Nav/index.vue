<template>
  <div id="nav">
    <MobileNav></MobileNav>
    <Register v-show="false"></Register>
    <Avatar :dialogVisible="ifShowAvatar" @handleClose="closeAvatar"></Avatar>
    <div class="nav-main">
      <div class="logo">FYYD</div>
      <div class="n-nav">
        <ul :class="'list' + whichActive">
          <li>
            <router-link @click="handleRefresh" to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/nav/blog">博客</router-link>
          </li>
          <li>
            <router-link to="/nav/message">留言</router-link>
          </li>
          <li>
            <router-link to="/nav/daily">日记</router-link>
          </li>
          <li>
            <router-link to="/nav/links">友链</router-link>
          </li>
          <li>
            <router-link to="/nav/about">关于</router-link>
          </li>
        </ul>
      </div>

      <div class="login">
        <el-popover v-if="$store.state.ifLogin" trigger="hover" placement="top-start" width="100" content="欢迎登录">
          <p>欢迎登录!!!!</p>
          <el-button type="danger" @click="ifShowAvatar = true">修改头像</el-button>
          <el-button type="danger">
            <a href="http://www.fyyd.vip:3002">用户管理</a>
          </el-button>
          <el-button type="danger" @click="handlerLogout()">退出登录</el-button>
          <el-button slot="reference" :style="{
            backgroundImage:'url('+login.photo+')',
            backgroundSize:'cover',
            width:'40px',
            height:'40px',
          }"></el-button>
        </el-popover>
        <div v-else class="else">
          <div v-show="!ifQQLogin">
            <el-button @click="handlerLogin" type="primary">登录</el-button>
            <el-button @click="handlerRegister" type="success">注册</el-button>
          </div>
          <p id="qqLoginBtn" @click="handleQQLogin"></p>
        </div>

      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script type="text/javascript" src="//connect.qq.com/qc_jssdk.js" charset="utf-8" data-callback="true"></script>

<script>


import Register from "../../src/components/Register";
import Login from "../../src/components/Login";
import MobileNav from "../../src/components/MobileNav";
import Avatar from "../../src/components/Avatar";

import request from "../../api/index";

const postLogin = request.postLogin;
const postIfLogin = request.postIfLogin;
const postRegister = request.postRegister;
const postLogout = request.postLogout;
export default {
  name: "Nav",
  data() {
    return {
      routerList: ["Home", "Blog", "Message", "Daily", "Links", "About"],
      alertKey: 0,
      ifLogin: false,
      ifShow: false,
      ifShowAvatar: false,
      isShowModal: true,
      adminUrl: "http://www.fyyd.vip:3002",
      accessToken: '',
      login: {
        user: "",
        photo: "",
      },
    };
  },
  computed: {
    whichActive() {
      let index = this.routerList.indexOf(this.$route.name);
      return index + 1;
    },
  },
  mounted() {
    if (window.innerWidth < 500) {
      this.isShowModal = false
    }
    console.log(this.$store.state.ifLogin, 'nm')
    QC.Login({
      redirectURI: "https://www.fyyd.vip/blog/nav/blog", //登录成功后会自动跳往该地址
      btnId: "qqLoginBtn", //插入按钮的节点id,
      // showModal: true
      showModal: this.isShowModal,
    }, this.handldeLogin, function (opts) {
      console.log("QQ登录 注销成功 !");
      if(QQ.Login.signOut){
        window.location.href = 'https://www.fyyd.vip/blog/nav/blog'

      }

    });

  },
  components: {
    Register, // Login,
    MobileNav,
    Avatar,
  }, // mounted() {},
  methods: {
    handleRefresh() {
      window.location.href = 'https://www.fyyd.vip/blog'
    },
    handleQQLogin() {
      window.location.href = document.querySelector("#qq_login_iframe").src;
    },
    handldeLogin(data, opts) {
      if (QC.Login.check()) {
        // this.$store.state.ifLogin = false;

        // this.$store.state.mongoLogin = false;
        this.$store.state.ifQQLogin = true;
        console.log(this.$store.state.ifLogin, 'vb')

      } else {
        this.$store.state.ifQQLogin = false;

      }
      var dom = document.getElementById(opts["btnId"]), _logoutTemplate = [//头像
        '<span><img src="{figureurl}"  class="{size_key}"/></span>', //昵称
        "<span>{nickname}</span>", //退出
        '<span><a @click.stop="handleStop" href="javascript:QC.Login.signOut();">退出</a></span>',].join("");
      dom && (dom.innerHTML = QC.String.format(_logoutTemplate, {
        nickname: QC.String.escHTML(data.nickname), //做xss过滤
        figureurl: data.figureurl,
      }));
    }, // handleQQLogin() {},
    handlerRegister() {
      const h = this.$createElement;
      this.$msgbox({
        title: "注册",
        message: h("Register", {key: this.alertKey++}),
        showCancelButton: false,
        showConfirmButton: false,
        closeOnClickModal: false,
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            (function () {
              let vm = this;
              this.register.submitDisabled = true;
              this.$refs["form"].validate((valid) => {
                if (valid) {
                  //验证都通过
                  postRegister(this.form)
                      .then((res) => {
                        console.log(res, 'fd');
                        // this.getVCode();
                        if (res.data.code) {
                          this.$message({
                            message: res.data.msg,
                            type: "error",
                            duration: 2000,
                          });
                        } else {
                          //注册成功
                          this.$message({
                            message: "注册成功！",
                            type: "success",
                            duration: 2000,
                          });
                          done();
                          setTimeout(() => {
                            vm.postIfLogin();
                          }, 1000);
                        }
                      })
                      .catch(() => {
                        // this.getVCode(); //注册成功
                        this.$message({
                          message: "注册失败请稍后再试~",
                          type: "error",
                          duration: 2000,
                        });
                      });
                } else {
                  //验证没通过
                  return false;
                }
              });
            }.call(instance.$children[2]));
          } else {
            done(); //关闭弹窗
          }
        },
      })
          .then(() => {
          })
          .catch(() => {
          });
    },
    handlerLogin() {
      const h = this.$createElement;
      this.$msgbox({
        title: "登录",
        message: h(Login, {key: this.alertKey++}),
        showCancelButton: true,
        showConfirmButton: true,
        closeOnClickModal: false,
        confirmButtonText: "马上登录",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            (function () {
              this.$refs["form"].validate((valid) => {
                if (valid) {
                  postLogin(this.form)
                      .then((res) => {
                        console.log(res.data);
                        if (res.data.code) {
                          this.$message({
                            message: res.data.msg,
                            type: "error",
                            duration: 2000,
                          });
                        } else {
                          this.$message({
                            message: res.data.msg,
                            type: "success",
                            duration: 2000,
                          });
                          done();
                          setTimeout(() => {
                            window.location.reload();
                          });
                        }
                      })
                      .catch(() => {
                        this.$message({
                          message: "登录失败,稍后再试",
                          type: "error",
                          duration: 2000,
                        });
                      });
                } else {
                  return false;
                }
              });
            }.call(instance.$children[2]));
          } else {
            done();
          }
        },
      })
          .then(() => {
          })
          .catch(() => {
          });
    },
    handlerLogout() {
      postLogout()
          .then(() => {
            this.$message({
              message: "退出成功",
              type: "success",
              duration: 2000,
            });
            setTimeout(() => {
              window.location.reload();
            }, 1000);
          })
          .catch(() => {
            this.$message({
              message: "退出失败",
              type: "error",
              duration: 2000,
            });
          });
    },
    closeAvatar() {
      this.ifShowAvatar = false;
    },
    handlerIcon() {
    },
  },
  created() {

    postIfLogin().then((res) => {
      console.log(res.data.userInfo, 'cv')
      if (res.data.userInfo) {
        this.$store.state.ifLogin = true;
        // this.$store.state.mongoLogin = true;
        // this.$store.state.showQQLogin = false;


        this.$store.state.userInfo = res.data.userInfo;

        console.log(this.$store.state.ifLogin, 'zx')

        this.login.user = res.data.userInfo.user;
        this.login.photo = "https://www.fyyd.vip/blog" + res.data.userInfo.photo;
      } else {
        // this.ifLogin = false;
        this.$store.state.ifLogin = false;
        // this.$store.state.showQQLogin = true;

        console.log(this.$store.state.ifLogin, 'xc')

      }
    });

  },
};
</script>
<style lang="less" scoped>
#nav {
  width: 100%;
  overflow: hidden;

  > .nav-main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    margin: 0 auto;
    background-color: pink;

    .logo {
      width: 80px;
      line-height: 60px;
      color: #777;
      font-family: BarbaraHand;
      font-size: 40px;
    }

    .login {
      display: flex;
      align-items: center;

      .else {
        display: flex;
        align-items: center;

        .el-button {
          height: 10% !important;
          line-height: 10px;
        }

        #qqLoginBtn {
          padding: 10px
        }
      }
    }

    .n-nav {
      width: 580px;

      ul {
        display: flex;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;

        li {
          flex: 1;
          list-style-type: none;
        }

        a {
          display: block;
          position: relative;
          line-height: 60px;
          color: #212220;
          text-align: center;
          text-decoration: none;
          transition: 0.3s;

          &::after {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            content: "";
            width: 0px;
            height: 2px;
            background-color: #6bc30d;
          }

          &:hover {
            color: #6bc30d;

            &::after {
              transition: 0.3s;
              width: 100%;
            }
          }
        }

        &.list1 li:nth-child(1),
        &.list2 li:nth-child(2),
        &.list3 li:nth-child(3),
        &.list4 li:nth-child(4),
        &.list5 li:nth-child(5),
        &.list6 li:nth-child(6) {
          a {
            color: green;

            &::after {
              width: 100%;
            }
          }
        }
      }
    }

    @media only screen and (max-width: 500px) {
      .n-nav {
        display: none;
      }

      .login {
        display: none;
      }
    }
  }
}
</style>
<style lang="less">
.el-message-box {
  width: 420px;
}

@media only screen and (max-width: 500px) {
  .el-message-box {
    width: 300px;
  }
}

.el-popover {
  display: flex;
  flex-direction: column;

  p {
    padding: 5px;
  }

  .el-button {
    margin: 5px;
  }
}
</style>
