<template>
    <div class="main">
        <div class="first" :style="{height:bgHeight+'px'}">
        </div>
        <div class="second">
            <ul>
                <li>
                    <a href="https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">面试资料</a>
                </li>
                <li>
                    <a href="http://localhost/#/blog/0" :style="{display:'block',textDecoration:'none',textAlign:'center'}">本地服务器80</a>
                </li>
                <li>
                    <a href="http://localhost:8080/#/blog/0" :style="{display:'block',textDecoration:'none',textAlign:'center'}">本地服务器8080</a>
                </li>
                <li>
                    <a href="https://github.com/" :style="{display:'block',textDecoration:'none',textAlign:'center'}">GITHUB</a>
                </li>
                <li>
                    <a href="http://www.fyyd.vip/#/blog/0" :style="{display:'block',textDecoration:'none',textAlign:'center'}">express服务器</a>
                </li>
                <li>
                    <a href="http://www.fyyd.vip:3000" :style="{display:'block',textDecoration:'none',textAlign:'center'}">nginx服务器</a>
                </li>
                <li>
                    <a href="https://www.yanshisan.cn/Blog/Article" :style="{display:'block',textDecoration:'none',textAlign:'center'}">十三燕</a>
                </li>
                <li>
                    <a href="https://y.qq.com/portal/player.html" :style="{display:'block',textDecoration:'none',textAlign:'center'}">QQ音乐</a>
                </li>
                <li>
                    <a href="https://www.aliyun.com/" :style="{display:'block',textDecoration:'none',textAlign:'center'}">阿里云</a>
                </li>

                <li>
                    <a href="https://www.umei.cc/bizhitupian/meinvbizhi/" :style="{display:'block',textDecoration:'none',textAlign:'center'}">美女图片</a>
                </li>
                <li>
                    <a href="https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">潭州教育</a>
                </li>
                <li>
                    <a href="https://fanyi.baidu.com/?aldtype=16047#auto/zh"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">百度翻译</a>
                </li>
                <li>
                    <a href="http://www.mongoosejs.net/docs/models.html"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">mongoose数据库</a>
                </li>
                <li>
                    <a href="http://baidu.com" :style="{display:'block',textDecoration:'none',textAlign:'center'}">百度搜素</a>
                </li>
                <li>
                    <a href="https://element.eleme.cn/#/zh-CN/component/installation"
                       :style="{display:'block',textDecoration:'none',textAlign:'center'}">elementUI组件</a>
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
                isCollapse: true,
                bgHeight:0
            };
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            getWindowHeight(){
                this.bgHeight = window.innerHeight
            }
        },
        mounted(){
            this.getWindowHeight()
            window.addEventListener('resize',this.getWindowHeight)
        },
        destroyed() {
            window.removeEventListener('resize',this.getWindowHeight)
        }
    }
</script>

<style lang="less" scoped>
    .main {
        width: 100%;
        .first{
            background-image: url("../../assets/img/3.jpg");
            background-size:100% 100%;

        }
        .second{
            ul{
                list-style-type: none;
                li{
                    margin: 10px;
                }
            }
        }
    }

</style>


