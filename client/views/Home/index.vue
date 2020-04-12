<template>
    <div class="blog">
        <div class="nav">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <i class="el-icon-s-home"></i>
                    <!--                    <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
                </span>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item divided>
                        <a href="http://119.23.28.199:3000/#/blog/0" :style="{textDecoration:'none'}">express服务器</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="http://localhost:8080/#/blog/0" :style="{textDecoration:'none'}">本地服务器</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="http://www.fyyd.vip/index.html" :style="{textDecoration:'none'}">nginx服务器</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="https://www.yanshisan.cn/Blog/Article" :style="{textDecoration:'none'}">十三燕</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="https://y.qq.com/portal/player.html" :style="{textDecoration:'none'}">QQ音乐</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="https://www.aliyun.com/" :style="{textDecoration:'none'}">阿里云</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md"
                           :style="{textDecoration:'none'}">面试资料</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="https://www.umei.cc/bizhitupian/meinvbizhi/" :style="{textDecoration:'none'}">美女图片</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997"
                           :style="{textDecoration:'none'}">潭州教育</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="https://fanyi.baidu.com/?aldtype=16047#auto/zh"
                           :style="{textDecoration:'none'}">百度翻译</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="http://www.mongoosejs.net/docs/models.html" :style="{textDecoration:'none'}">mongoose数据库</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="http://baidu.com" :style="{textDecoration:'none'}">百度搜素</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="https://element.eleme.cn/#/zh-CN/component/installation"
                           :style="{textDecoration:'none'}">elementUI组件</a>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <a href="https://github.com/" :style="{textDecoration:'none'}">GITHUB</a>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="less" scoped>
    .blog {
        background-image: url("../../assets/img/1.jpg");
        width: 1000px;
        height: 800px;
        .nav {
            float: left;
            .el-dropdown {
                span{
                    .el-icon-s-home {
                        font-size: 30px;
                        float: left;
                    }
                }
                .el-dropdown-menu{
                    position:absolute;
                    top:130px;
                }

            }

        }

    }


</style>


