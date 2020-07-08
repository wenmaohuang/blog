<template>
    <div class="home">
        <div class="drawer">
            <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                <i class="iconfont icon-caidan"></i>
            </el-button>

            <el-drawer title :visible.sync="drawer" :show-close="true">
                <div class="blog">
                    <router-link to="/blog">博客</router-link>
                    <router-link to="/message">留言</router-link>
                    <router-link to="/links">友链</router-link>
                    <router-link to="/about">关于</router-link>
                </div>
            </el-drawer>
        </div>
        <div class="bgc" :style="{height:bgHeight+'px',}">
            <Search></Search>
        </div>

        <footer>
            <div class="about">
                <p>风移影动</p>
                <p>自由自在的流浪</p>
                <p>
                    <router-link to="/about">about me</router-link>
                </p>
            </div>
            <div class="link">
                <p>相关链接</p>
                <p>
                    <router-link to="/blog/全部文章">博客</router-link>
                </p>
                <p>
                    <router-link to="/daily">日记</router-link>
                </p>
            </div>
            <div class="connect">
                <p>联系我</p>
                <p>地址:广州番禺小龙村</p>
                <p>QQ:648371113</p>
                <p>邮箱:648371113@qq.com</p>
            </div>
        </footer >
        <el-collapse v-show="ifLogin" v-model="activeNames" @change="handleChange">
            <el-collapse-item title="" name="1">
                <!-- <ul>
                    <li v-for="(item,index) in obj" :key="index">
                        <a :href="item" :style="style">{{index}}</a>
                    </li>
                </ul>-->
                <ul class="infinite-list" v-infinite-scroll="load" style="overflow:scroll;height:150px;">
                    <li
                        v-for="(item,index) in obj"
                        class="infinite-list-item"
                        :key="index"
                    ><a :href="item" :style="style">{{ index }}</a>
                    </li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import request from "../../api/index";
import Search from "../../src/components/Search"


const postIfLogin = request.postIfLogin;

export default {
    name: "index",
    data() {
        return {
            drawer: false,
            isClick: false,
            count: 0,
            activeNames: [""],
            bgHeight: 0,
            ifLogin:false,
            style: {
                display: "block",
                textDecoration: "none",
                textAlign: "center"
            },
            obj: {
                mongoose:"https://mongoosejs.com/docs/guide.html",
                localServer: "http://localhost/#/blog/0",
                localClient: "http://localhost:8080/#/blog/0",
                github: "https://github.com/",
                npm: "https://www.npmjs.com/",
                expressServer: "http://www.fyyd.vip/#/blog/0",
                expressServer3002: "http://www.fyyd.vip:3002",
                nginxServer: "http://www.fyyd.vip:3000",
                // mongooseDatabase: "http://www.mongoosejs.net/docs/models.html",
                elementUI:
                    "https://element.eleme.cn/#/zh-CN/component/installation",
                VUE: "https://vuejs.org/",
                layUI: "https://www.layui.com/",
                qqMusic: "https://y.qq.com/portal/player.html",
                aliCloud: "https://www.aliyun.com/",
                aliIcon:
                    "https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1811983",
                translateBaidu:
                    "https://fanyi.baidu.com/?aldtype=16047#auto/zh",
                searchBaidu: "http://baidu.com",
                photoGirls: "https://www.umei.cc/bizhitupian/meinvbizhi/",
                yinshi:
                    "https://www.shiguangkey.com/video/1346?videoId=141606&classId=9262&playback=1",
                afei:
                    "https://www.shiguangkey.com/video/5404?classId=13017&videoId=221997",
                remi:
                    "https://www.shiguangkey.com/video/903?videoId=242629&classId=17830&playback=1",
                zhuimeng:
                    "https://www.shiguangkey.com/video/1561?videoId=53934&classId=4298&playback=1",
                haiwen:
                    "https://www.shiguangkey.com/video/1561?videoId=86919&classId=6240&playback=1",
                wanzhang:
                    "https://www.shiguangkey.com/video/5404?videoId=125677&classId=8638&playback=1",
                designModeWanZhang:
                    "https://www.shiguangkey.com/video/903?videoId=191211&classId=12327&playback=1",
                cctv: "http://tv.cctv.com/live/",
                exampleBlog: "https://www.yanshisan.cn/Blog/Article",
                interview:
                    "https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md",
                jobLagou: "https://www.lagou.com/resume/myresume.html"
            }
        };
    },
    methods: {
        getWindowHeight() {
            this.bgHeight = window.innerHeight;
        },
        handleChange(val) {
            console.log(val);
        },
        load() {
            this.count += 2;
            // if(this.count > 50){
            //   this.count = 0
            // }
        }
    },
    components:{
        Search
    },
    mounted() {
        this.getWindowHeight();
        window.addEventListener("resize", this.getWindowHeight);
    },
    created() {
    postIfLogin().then(res => {
      if (res.data.userInfo) {
        this.ifLogin = true;
      } else {
        this.ifLogin = false;
      }
    });
  },
    destroyed() {
        window.removeEventListener("resize", this.getWindowHeight);
    }
};
</script>

<style lang="less" scoped>
.home {
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
                            margin: 30px 42px;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
    .bgc {
        background-image: url("http://www.fyyd.vip/img/3.jpg");
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
    .el-collapse {
        .el-collapse-item {
            margin: 0 auto;
            .infinite-list::-webkit-scrollbar {display:none}
            // /deep/ .el-collapse-item__header {
            //     // margin: 0 auto;
            //     // background-color: #aaa;
            //     display: flex;
            //     justify-content: center;
            //     background-color: #aaa;
            //     // text-align: center;
            //     // margin: 0 auto;
            //     .el-collapse-item__arrow.el-icon-arrow-right {
            //         // width:10%;
            //         margin: 8px;
            //     }
            //     ul {
            //         list-style-type: none;
            //         li {
            //             margin: 10px;
            //         }
            //     }
            // }
        }
    }
}
</style>


<style lang="less" scoped>
.el-drawer {
    width: 25% !important;
    .el-drawer__header {
        flex-direction: row-reverse;
        transform: rotate(-7deg);

        padding-top: 35px;
    }
}

footer {
    display: flex;
    box-sizing: border-box;
    justify-content: space-around;
    width: 100%;
    background-color: #232328;
    color: #fff;
    padding: 100px 0;

    .about {
        width: 100%;
        p {
            padding: 10px;
            text-align: center;

            &:nth-child(1) {
                font-size: 20px;
            }
            a {
                color: #fff;
                font-size: 16px;
                text-align: center;
            }
        }
    }
    .link {
        width: 100%;
        p {
            padding: 10px;
            text-align: center;

            &:nth-child(1) {
                font-size: 20px;
            }
            a {
                color: #fff;
                font-size: 16px;
                text-align: center;
            }
        }
    }
    .connect {
        width: 100%;

        p {
            padding: 10px;
            text-align: center;

            &:nth-child(1) {
                font-size: 20px;
            }
            a {
                color: #fff;
                font-size: 16px;
                text-align: center;
            }
        }
    }
}

@media only screen and (max-width: 500px) {
    .el-drawer {
        width: 40% !important;
    }
}
</style>