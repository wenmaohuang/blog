<template>
    <div class="main">
        <div class="first" :style="{height:bgHeight+'px',display:'flex',justifyContent:'center',alignItems:'center',}">
            <a href="http://www.fyyd.vip/#/blog/0" :style="{display:'inlineBlock',fontSize:'40px',color:'#f00',textDecoration:'none'}">ENTER BLOG</a>

        </div>
        <div class="second">
            <ul >
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
                isCollapse: true,
                bgHeight:0,
                style:{display:'block',textDecoration:'none',textAlign:'center'},
                obj:{
                    msg:['面试资料','本地server','本地client','GITHUB',
                        'express服务器','nginx服务器','十三燕','QQ音乐','阿里云',
                        '美女图片','潭州教育afei','百度翻译','mongoose数据库','百度搜素','elementUI组件','cctv','潭州教育remi'],
                    href:['https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md',
                    'http://localhost/#/blog/0',
                    'http://localhost:8080/#/blog/0',
                        'https://github.com/',
                        'http://www.fyyd.vip/#/blog/0',
                        'http://www.fyyd.vip:3000',
                        'https://www.yanshisan.cn/Blog/Article',
                        'https://y.qq.com/portal/player.html',
                        'https://www.aliyun.com/',
                        'https://www.umei.cc/bizhitupian/meinvbizhi/',
                        'https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997',
                        'https://fanyi.baidu.com/?aldtype=16047#auto/zh',
                        'http://www.mongoosejs.net/docs/models.html',
                        'http://baidu.com',
                        'https://element.eleme.cn/#/zh-CN/component/installation',
                        'http://tv.cctv.com/live/',
                        'https://www.shiguangkey.com/video/903?videoId=242629&classId=17830&playback=1'
                    ]
                }
            };
        },
        methods: {
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


