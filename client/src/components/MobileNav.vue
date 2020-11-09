<template>
    <el-row class="tac">
        <el-col :span="12">
            <!-- <h5>默认颜色</h5> -->
            <el-menu @click="handleIsCollapse()" class="el-menu-vertical-demo" mode="horizontal" menu-trigger="click">
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
                        <el-menu-item v-show="$store.state.ifLogin">
                            <a href="https://www.fyyd.vip/reblog">react</a>
                        </el-menu-item>
                        <el-menu-item v-show="$store.state.ifLogin">
                            <a href="http://www.fyyd.vip:3003/">angular</a>
                        </el-menu-item>
                        <el-menu-item index="1-3">
                            <router-link to="/nav/message">留言</router-link>
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
                isOpened: false,
                isCollapse: false,
            };
        },
        watch: {},

        mounted() {
        },

        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
                // localStorage.setItem("index", key);
            },
            // setClass(){
            //   return true
            // },
            // closeCollapse(){
            //   this.isOpened = true
            //   console.log(11)
            // }
            handleIsCollapse() {
                this.isCollapse = !this.isCollapse
            }
        },
    };
</script>
<style lang="less">
    .tac {

        /*background-color: transparent;*/
        position: absolute;
        left: 0 !important;
        background-color: transparent !important;
        width: 250px;
        z-index: 1;

        .el-col {
            background-color: transparent !important;


            .el-menu {
                border: 0;
                position: absolute;


                .el-submenu {
                    background-color: pink;

                    /*width: 100px;*/

                    .el-submenu__title {
                        background-color: transparent !important;
                        border-bottom: 0 transparent;
                        width: 100px !important;
                        height: 60px;
                    }

                    .is-opened {
                        display: none;
                    }

                    .el-menu-item-group {
                        background-color: transparent !important;

                        ul {
                            li {
                                padding: 0;
                                padding-left: 0;
                                min-width: 100px;
                                /*background-color: #aaa;*/


                            }
                        }
                    }
                }
            }


        }
    }

    @media only screen and (max-width: 500px) {
        .tac {
            display: block;
        }
    }
    .el-menu--horizontal{
        left:0px !important;
        top:0px !important;

        .el-menu--popup{
            top:55px !important;
            width:150px !important;
            min-width: 100px;;

            .el-menu-item-group {
                background-color: transparent !important;


                ul {
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    li {

                        text-align: center;
                        min-width: 100px;
                        font-size: 16px;
                        margin: 5px !important;

                        a{
                        }
                        /*background-color: #aaa;*/


                    }
                }
            }
        }
    }
</style>

<!--<style lang="less">-->
<!--.el-menu&#45;&#45;horizontal {-->
<!--  /*position: absolute;*/-->
<!--  /*left: 0 !important;*/-->
<!--  /*background-color: transparent;*/-->
<!--  /*width: 100px !important;*/-->

<!--  .el-menu {-->
<!--    padding: 0;-->
<!--    margin: 0;-->
<!--    width: 100% !important;-->
<!--  }-->

<!--  .el-menu&#45;&#45;popup {-->
<!--    width: 100px;-->
<!--    min-width: 100px !important;-->
<!--  }-->

<!--  .el-menu&#45;&#45;popup-bottom-start {-->
<!--    width: 100px !important;-->
<!--    min-width: 100px !important;-->
<!--  }-->

<!--  .el-menu-item-group {-->
<!--    width: 100px;-->

<!--    .el-menu-item-group__title {-->
<!--      width: 100px;-->
<!--      padding: 0;-->
<!--    }-->

<!--    ul {-->
<!--      width: 100px;-->

<!--      .el-menu-item {-->
<!--        text-align: center;-->
<!--        line-height: 45px;-->
<!--        height: 45px;-->
<!--        width: 100px;-->
<!--        /*background-color: #369;*/-->

<!--        a {-->
<!--          color: #fff;-->
<!--        }-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->