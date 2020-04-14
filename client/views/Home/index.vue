<template>
    <div class="aside">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                 :collapse="isCollapse">
            <el-submenu index="1">
                <template slot="title">
                    <i class="el-icon-s-home"></i>
                    <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                    <a href="https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">面试资料</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="http://localhost/#/blog/0" :style="{display:'block',textDecoration:'none',textAlign:'center'}">本地服务器80</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="http://localhost:8080/#/blog/0" :style="{display:'block',textDecoration:'none',textAlign:'center'}">本地服务器8080</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="https://github.com/" :style="{display:'block',textDecoration:'none',textAlign:'center'}">GITHUB</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="http://www.fyyd.vip/#/blog/0" :style="{display:'block',textDecoration:'none',textAlign:'center'}">express服务器</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="http://www.fyyd.vip:3000" :style="{display:'block',textDecoration:'none',textAlign:'center'}">nginx服务器</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="https://www.yanshisan.cn/Blog/Article" :style="{display:'block',textDecoration:'none',textAlign:'center'}">十三燕</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="https://y.qq.com/portal/player.html" :style="{display:'block',textDecoration:'none',textAlign:'center'}">QQ音乐</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="https://www.aliyun.com/" :style="{display:'block',textDecoration:'none',textAlign:'center'}">阿里云</a>
                </el-menu-item-group>

                <el-menu-item-group>
                    <a href="https://www.umei.cc/bizhitupian/meinvbizhi/" :style="{display:'block',textDecoration:'none',textAlign:'center'}">美女图片</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">潭州教育</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="https://fanyi.baidu.com/?aldtype=16047#auto/zh"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">百度翻译</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="http://www.mongoosejs.net/docs/models.html"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">mongoose数据库</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="http://baidu.com" :style="{display:'block',textDecoration:'none',textAlign:'center'}">百度搜素</a>
                </el-menu-item-group>
                <el-menu-item-group>
                    <a href="https://element.eleme.cn/#/zh-CN/component/installation"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">elementUI组件</a>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                isCollapse: true
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style lang="less" scoped>
    .aside {
        height: 800px;
    }

</style>


