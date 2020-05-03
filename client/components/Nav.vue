<template>
  <div id="nav">
    <Register v-show="false"></Register>
    <!-- <Login v-show="false"></Login> -->

    <div class="nav-main">
      <div class="logo">FYYD</div>
      <div class="n-nav">
        <ul :class="'list' + whichActive">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/blog/blog">博客</router-link>
          </li>
          <li>
            <router-link to="/message">留言</router-link>
          </li>
          <li>
            <router-link to="/daily">日记</router-link>
          </li>
          <li>
            <router-link to="/links">友连</router-link>
          </li>
          <li>
            <router-link to="/about">关于</router-link>
          </li>
        </ul>
      </div>
      <div class="login">
        <div v-if="ifLogin">
          <img :src="login.photo" alt width=80 height=45 />
          <span>{{login.user}}</span>
        </div>
        <div v-else>
          <el-button @click="handlerLogin" type="primary">登录</el-button>
          <el-button @click="handlerRegister" type="success">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Register from "./Register";
import Login from "./Login";
import request from "../api/index";
const postLogin = request.postLogin;
const postIfLogin = request.postIfLogin;
const postRegister = request.postRegister;
console.log(postIfLogin());

export default {
  name: "Nav",
  data() {
    return {
      routerList: ["Home", "Blog", "Message", "Daily", "Links", "About"],
      alertKey: 0,
      ifLogin: false,
      login: {
        user: "",
        photo: ""
      }
    };
  },
  computed: {
    whichActive() {
      let index = this.routerList.indexOf(this.$route.name);
      return index + 1;
    }
  },
  components: {
    Register
    // Login
  },
  // mounted() {},
  methods: {
    handlerRegister() {
      const h = this.$createElement;
      this.$msgbox({
        title: "注册",
        message: h("Register", { key: this.alertKey++ }),
        showCancelButton: false,
        showConfirmButton: false,
        closeOnClickModal: false,
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            (function() {
            let vm = this
              this.register.submitDisabled = true;
              this.$refs["form"].validate(valid => {
                if (valid) {
                  //验证都通过
                  postRegister(this.form)
                    .then(res => {
                      this.getVCode();
                      if (res.data.code) {
                        this.$message({
                          message: res.data.msg,
                          type: "error",
                          duration: 2000
                        });
                      } else {
                        //注册成功
                        this.$message({
                          message: "注册成功！",
                          type: "success",
                          duration: 2000
                        });
                        done();
                        setTimeout(()=>{
                        vm.postIfLogin()
                        },1000)
                      }
                    })
                    .catch(() => {
                      this.getVCode(); //注册成功
                      this.$message({
                        message: "注册失败请稍后再试~",
                        type: "error",
                        duration: 2000
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
        }
      })
        .then(() => {})
        .catch(() => {});
    },
    handlerLogin() {
      const h = this.$createElement;
      this.$msgbox({
        title: "登录",
        message: h(Login, { key: this.alertKey++ }),
        showCancelButton: true,
        showConfirmButton: true,
        closeOnClickModal: false,
        confirmButtonText: "马上登录",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            (function() {
              this.$refs["form"].validate(valid => {
                if (valid) {
                  postLogin(this.form)
                    .then(res => {
                      console.log(res);
                      if (res.data.code) {
                        this.$message({
                          message: res.data.msg,
                          type: "error",
                          duration: 2000
                        });                       
                      } else {
                        this.$message({
                          message: res.data.msg,
                          type: "success",
                          duration: 2000
                        });
                        done();
                         setTimeout(()=>{
                          window.location.reload()
                        })
                      }
                    })
                    .catch(() => {
                      this.$message({
                        message: "登录失败,稍后再试",
                        type: "error",
                        duration: 2000
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
        }
      })
        .then(() => {})
        .catch(() => {});
    }
  },
  created() {
    postIfLogin().then(res => {
      console.log(res, 12345);
      if (res.data.userInfo) {
        this.ifLogin = true;
        this.login.user = res.data.userInfo.user;
        this.login.photo = "http://localhost" + res.data.userInfo.photo;
      } else {
        this.ifLogin = false;
      }
    });
  }
};
</script>

<style lang="less" scoped>
#nav {
  overflow: hidden;
  > .nav-main {
    display: flex;
    justify-content: space-around;
    max-width: 1260px;
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
      line-height: 60px;
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
</style>
