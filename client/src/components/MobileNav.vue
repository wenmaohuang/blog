
<template>
  <el-row class="tac">
    <el-col :span="12">
      <!-- <h5>默认颜色</h5> -->
      <el-menu
      mode="horizontal"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        menu-trigger="click"

      >
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
    
    };
  },
  watch: {
    $route: function () {
        console.log(this.$route.path,'1a');
      if (this.$route.path === "/nav/message") {
          console.log(this,'1z');
        this.closemenu(localStorage.getItem("index"));
      }
    }
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
    },
    // handleCloseItem() {
    //   this.open_list = "1";
    //   this.openeds= ['']
    // }
  },
};
</script>
<style lang="less">
.tac {
  display: none;
  position: absolute;
  left: 0;
  z-index: 11;

  .el-col {
    // background-color:transparent;
    .el-menu {
      background-color: transparent;
      border-right-color: transparent;

      .el-submenu {
        min-width: 100px;

        .el-submenu__title {
          background-color: transparent;
          i {
            &:nth-child(1) {
              margin-left: 5px;
            }
          }
        }
        .el-menu-item-group {
          background-color: #aaa;
          min-width: 100px;
          ul {
            .el-menu-item {
              padding: 10px;
              min-width: 100px;
              line-height: 30px;
            }
          }
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