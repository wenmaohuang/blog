<template>
    <div class="home">
        <div class="drawer">
            <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                <i class="iconfont icon-caidan"></i>
            </el-button>

            <el-drawer title :visible.sync="drawer" :show-close="true">
                <div class="blog">
                    <el-button @click="handlerLogin">登录</el-button>

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
        </footer>
        <el-collapse
            v-model="activeNames"
            @change="handleChange"
            @mouseenter.native.once="handleEnter"
            @mouseover.native="handleOver"
        >
            <el-collapse-item v-show="ifLogin" title name="1">
                <!-- <ul>
                    <li v-for="(item,index) in obj" :key="index">
                        <a :href="item" :style="style">{{index}}</a>
                    </li>
                </ul>-->
                <ul
                    class="infinite-list"
                    v-infinite-scroll="load"
                    style="overflow:scroll;height:250px;"
                >
                    <input
                        type="text"
                        v-model="word"
                        @input="handleSearch"
                        @keyup.delete="handleDelete"
                        ref="autoFocus"
                        style="display:block;width:250px;height:45px;font-size:20px;text-indent:1em;margin:0 auto;border-radius:10px;border-width:1px;border-style:solid"
                    />

                    <li v-for="(item,index) in searchObj" class="infinite-list-item" :key="index">
                        <a :href="item" :style="style">{{ index }}</a>
                    </li>
                </ul>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>
<script>
import request from "../../api/index";
import Search from "../../src/components/Search";
import Login from "../../src/components/Login";

// import request from "../../api/index";
const postLogin = request.postLogin;

const postIfLogin = request.postIfLogin;

export default {
    name: "index",
    data() {
        return {
            drawer: false,
            isClick: false,
            count: 0,
            activeNames: ["1"],
            bgHeight: 0,
            ifLogin: false,
            word: "",
            style: {
                display: "block",
                textDecoration: "none",
                textAlign: "center",
                fontSize: "20px"
            },
            ifFocus: false,
            reg: {},
            searchObj: {},
            newObj: {},
            searchKye: "",
            obj: {
                github: "https://github.com/",

                mongoosejs: "https://mongoosejs.com/docs/guide.html",
                npmjs: "https://www.npmjs.com/",
                element:
                    "https://element.eleme.cn/#/zh-CN/component/installation",
                vuejs: "https://vuejs.org/",
                layui: "https://www.layui.com/",
                qqMusic: "https://y.qq.com/portal/player.html",
                aliyun: "https://www.aliyun.com/",
                iconfont:
                    "https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=1811983",
                fanyi: "https://fanyi.baidu.com/?aldtype=16047#auto/zh",
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
                wanzhang1:
                    "https://www.shiguangkey.com/video/5404?videoId=125677&classId=8638&playback=1",
                wanZhang2:
                    "https://www.shiguangkey.com/video/903?videoId=191211&classId=12327&playback=1",
                cctv: "http://tv.cctv.com/live/",
                yanshisan: "https://www.yanshisan.cn/Blog/Article",
                afeifeifei:
                    "https://github.com/afeifeifei/front-end-interview-handbook/blob/master/Translations/Chinese/README.md",
                lagou: "https://www.lagou.com/resume/myresume.html",
                "51job": "https://i.51job.com/userset/my_51job.php?lang=c",
                zhaopin: "https://i.zhaopin.com/",
                "58tongcheng":
                    "https://my.58.com/pro/myjob/index/?PGTID=0d000000-0000-05c4-710e-6428d7138f3a&ClickID=1",
                zhipin:
                    "https://www.zhipin.com/web/geek/recommend?ka=header-personal",
                weixin:
                    "https://developers.weixin.qq.com/miniprogram/en/dev/framework/",
                weixinAdmin:
                    "https://mp.weixin.qq.com/wxamp/wacodepage/getcodepage?token=174094833&lang=zh_CN",
                bilibili: "https://www.bilibili.com/video/BV1nE41117BQ?p=9",
                movie: "http://27k.cc/?m=vod-play-id-37805-src-1-num-1.html",
                flutter:
                    "https://flutter.dev/docs/development/tools/android-studio",
                typescript:
                    "https://www.typescriptlang.org/docs/handbook/gulp.html",
                node: "https://nodejs.org/dist/latest-v14.x/docs/api/",
                webpack:
                    "https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax",
                    react:"https://reactjs.org/docs/getting-started.html",
                    angular:"https://angular.io/docs",
                    nginx:"http://nginx.org/en/docs/",
                    centos:"https://www.linuxidc.com/Linux/2018-06/152959.htm",
                    express:"https://www.expressjs.com.cn/5x/api.html",
                    blogadmin:"http://www.fyyd.vip:3002/",
                    reactblog:"http://www.fyyd.vip:3001/",
                    mysql:"https://dev.mysql.com/doc/refman/8.0/en/connection-options.html",
                    apache:"http://httpd.apache.org/docs/2.4/",
                    gulpjs:"https://gulpjs.com/docs/en/api/registry",
                    babel:"https://babeljs.io/docs/en/",
            }
        };
    },
    computed: {
        // computedObj(){
        //     return this.obj;
        // }
    },
    watch: {
        // obj(){
        // }
    },
    //   directives: { //自定义的v-focus指令
    //         focus: {
    //             inserted: function (el, {value}) {
    //                 if (value) {
    //                     el.focus();
    //                 }
    //             }
    //         }
    //     },
    methods: {
        getWindowHeight() {
            this.bgHeight = window.innerHeight;
        },
        handleChange(val) {
            console.log(val);
        },
        handleEnter() {
            this.searchObj = Object.assign({}, this.newObj);
        },
        handleOver() {
            console.log("c2");
            // this.activeNames = ['1']
            this.$refs.autoFocus.focus();
            // this.searchObj = this.obj;

            // this.ifFocus = true
            // this.activeNames = ["1"]
        },

        // handleLeave(){
        //     this.activeNames = ['1']
        // },
        handleSearch() {
            for (var key in this.obj) {
                if (this.word) {
                    this.$delete(this.searchObj, key);
                    console.log("e2");
                    this.reg = new RegExp("^" + this.word);
                    this.searchKey = key.match(this.reg);
                    if (this.searchKey !== null) {
                        this.searchKeyInput = this.searchKey["input"];
                        console.log(this.searchKey, "p1");
                        this.$set(
                            this.searchObj,
                            this.searchKeyInput,
                            this.obj[this.searchKeyInput]
                        );
                    }
                }
                if (this.word === "") {
                    console.log("a2");
                }
            }
            console.log(this.searchObj, "j1");
        },
        handleDelete() {
            console.log("u1");
            // if (this.word) {
            for (var key in this.searchObj) {
                // console.log(this.word, "w1");
                this.reg = new RegExp("^" + this.word);
                this.searchKey = key.match(this.reg);

                this.$delete(this.searchObj, key);
            }
            if (this.word === "") {
                this.searchObj = Object.assign({}, this.newObj);
            }

            // this.$delete(this.searchObj, key);
        },
        load() {
            this.count += 2;
            // if(this.count > 50){
            //   this.count = 0
            // }
        },
        handlerLogin() {
            const h = this.$createElement;
            this.$msgbox({
                title: "登录",
                message: h(Login),
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
                                                setTimeout(() => {
                                                    window.location.reload();
                                                });
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
    components: {
        Search
    },
    mounted() {
        this.getWindowHeight();
        window.addEventListener("resize", this.getWindowHeight);

        this.newObj = {};
        Object.keys(this.obj)
            .sort()
            .map(key => {
                this.newObj[key] = this.obj[key];
            });
        console.log(this.newObj, "g2");
        // console.log(this.$refs,'d2');
    },
    created() {
        postIfLogin().then(res => {
            if (res.data.userInfo) {
                this.ifLogin = true;
            } else {
                this.ifLogin = false;
            }
        });
        //  this.changfouce();
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
                        align-items: center;
                        transform: rotate(-7deg);
                        padding-right: 70px;
                        font-size: 20px;
                        // margin: 0 auto;
                        .el-button {
                            // margin: 0 20px;
                            width: 150px;
                            font-size: 20px;
                            padding-bottom: 30px;

                            // text-align: left;
                        }

                        a {
                            width: 150px;
                            text-align: center;
                            margin: 30px 0;
                            text-decoration: none;
                        }
                    }
                }
            }
        }
    }
    .bgc {
        background-image: url("https://www.fyyd.vip/img/3.jpg");
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
        // &:hover{
        //     // activeNames: ["1"]
        // }
        .el-collapse-item {
            // z-index: 1;
            position: relative;
            margin: 0 auto;
            .infinite-list::-webkit-scrollbar {
                display: none;
            }
        }
    }
}
</style>


<style lang="less" scoped>
// .el-drawer {
//     width: 25% !important;
//     .el-drawer__header {
//         flex-direction: row-reverse;
//         transform: rotate(-7deg);

//         padding-top: 35px;
//     }
// }

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
    /deep/ .el-drawer {
        width: 40% !important;
        // background-color: #333 !important;
        .el-drawer__wrapper {
            transform: rotate(5deg) !important;
            .el-drawer__header {
                transform: rotate(-5deg) !important;
            }
            .el-drawer__body {
                .blog {
                    transform: rotate(-5deg) !important;
                }
            }
        }
    }
}
</style>