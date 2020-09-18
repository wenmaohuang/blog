<template>
  <el-row class="tac">
    <el-col :span="12">
      <!-- <h5>默认颜色</h5> -->
      <el-menu mode="horizontal" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" menu-trigger="click">
        <el-submenu index="1">
          <template slot="title">
            <i class="iconfont icon-caidan"></i>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link to="/">首页</router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link to="/nav/blog">博客</router-link>
            </el-menu-item>
            <el-menu-item v-show="$store.state.ifLogin">
              <a :href="adminUrl">管理</a>
            </el-menu-item>
            <el-menu-item v-show="true">
              <router-link to="/nav/football">足球</router-link>
            </el-menu-item>
            <el-menu-item index="1-3">
              <router-link to="/nav/message" @click="handleCloseItem">留言</router-link>
            </el-menu-item>
            <el-menu-item index="1-4">
              <router-link to="/nav/daily">日记</router-link>
            </el-menu-item>
            <el-menu-item index="1-5">
              <router-link to="/nav/links">友链</router-link>
            </el-menu-item>
            <el-menu-item index="1-6">
              <router-link to="/nav/about">关于</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>>

<script>
export default {
  data() {
    return {
      ifLogin: false,

      adminUrl: "http://www.fyyd.vip:3002",

    };
  },
  watch: {
    // $route: function () {
    //   console.log(this.$route.path, "1a");
    //   if (this.$route.path === "/nav/message") {
    //     console.log(this, "1z");
    //     this.closemenu(localStorage.getItem("index"));
    //   }
    // },
  },

  mounted() {
    // if (QC.Login.check()) {
    //   this.$store.state.ifLogin = true;
    // } else {
    //   this.$store.state.ifLogin = false;
    // }
    //
    // console.log(this.$store.state,'bn');
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      localStorage.setItem("index", key);

      //   open(key)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
      console.log("1q");
      // close(1)
    }, // handleCloseItem() {
    //   this.open_list = "1";
    //   this.openeds= ['']
    // }
  },
};
</script>
<style lang="less">
.tac {
  //   display: none;
  //   position: absolute;
  //   left: 0;
  //   z-index: 11;

  background-color: transparent;

  .el-col {
    background-color: transparent;

    .el-menu--horizontal {
      //   display: none;
      position: absolute;
      left: 0;
      background-color: transparent;
      width: 100px !important;
      border-bottom: 0 transparent;


      .el-submenu {
        // background-color: #aaa !important;
        background-color: transparent;

        width: 100px;

        .el-submenu__title {
          background-color: transparent;
          // height: 58px;
          border-bottom: 0 transparent;
          // transition: 0 0 !important;

          // border-width: 0 !important;

          //   background-color: #aaa;
          width: 100px !important;

          //   i {
          //     &:nth-child(1) {
          //       margin-left: 5px;
          //     }
          //   }
        }
      }


      // .el-menu {
      //     background-color: #aaa;

      // }
    }
  }
}

@media only screen and (max-width: 500px) {
  .tac {
    display: block;
  }
}
</style>

<style lang="less">
.el-menu--horizontal {
  //   display: none;
  position: absolute;
  left: 0 !important;
  background-color: transparent;
  width: 100px !important;

  .el-menu {
    // background-color: #aaa;
    padding: 0;
    margin: 0;
    width: 100% !important;
  }

  .el-menu--popup {
    width: 100px;
    min-width: 100px !important;
  }

  .el-menu--popup-bottom-start {
    width: 100px !important;
    min-width: 100px !important;
  }

  .el-menu-item-group {
    //   background-color: #aaa;
    width: 100px;

    .el-menu-item-group__title {
      width: 100px;
      padding: 0;
    }

    ul {
      width: 100px;

      .el-menu-item {
        text-align: center;
        //   background-color: #aaa;
        // padding: 5px;
        line-height: 45px;
        height: 45px;
        width: 100px;
        background-color: #369;

        a {
          color: #fff;
        }
      }
    }
  }

  // .el-menu {
  //     background-color: #aaa;

  // }
}
</style>