<template>
    <div id="container" @click.stop="handleBlurSearchTitle">
        <el-container>
            <el-main>
                <ArticleShow></ArticleShow>
            </el-main>
            <el-aside>
                <div class="search">
                    <div class="search-main">
                        <input
                            type="text"
                            v-model="word"
                            @input="handleSearch"
                            @keyup.delete="handleDelete"
                            @click.stop="handleSeachTitle"
                            placeholder="请输入搜索内容"
                        />
                        <i class="el-icon-search"></i>
                        <div class="search-title" v-show="isShow">
                            <ul>
                            <router-link v-for="(item,index) in searchArr" :key="index"  class="img" to="/content">
                                <li @click="handleClick(item)">{{item}}</li>
                            </router-link>
                        </ul>
                        </div>
                    </div>
                    <div class="search-article">
                        <ul>
                            <li
                                @mouseenter="handleMouseenter(index)"
                                @mouseleave="handleMouseleave"
                                v-for="(item,index) in articleTages"
                                :key="index"
                            >
                                <router-link :to="'/blog/'+item">{{item}}</router-link>
                            </li>
                        </ul>
                        <div class="cover" :style="{top:coverIndex*40 + 'px'}"></div>
                    </div>
                </div>
                <HotArticle></HotArticle>
                <!-- <div class="hot">
                    <h3>热门文章</h3>
                    <ul>
                        <li v-for="(i,index) in articleHot" :key="index">
                            <i>{{index}}</i>
                            <a :href="i._id">{{i.title}}</a>
                        </li>
                    </ul>
                </div>-->
                <div class="recommend">
                    <h3>置顶文章</h3>
                    <ul>
                        <li>
                            <i>{{1}}</i>
                            <a :href="getArticleRecommend._id">{{getArticleRecommend.title}}</a>
                        </li>
                    </ul>
                </div>
                <div class="visitor">
                    <h3>最近访客</h3>
                    <ul>
                        <li
                            v-for="(item,index) in visitor"
                            :key="index"
                            :style="{backgroundImage:'url(http://www.fyyd.vip'+item.photo+')'}"
                        >
                            <!-- <p>{{item.user}}</p> -->
                        </li>
                    </ul>
                </div>
            </el-aside>
        </el-container>
    </div>
</template>


<script>
import request from "../../api/index";
import ArticleShow from "./ArticleShow";
import HotArticle from "./HotArticle";
let getArticleInfo = request.getArticleInfo;

// const getArticleShow = request.getArticleShow;

let getUser = request.getUser;
let getArticleTItle = request.getArticleTItle;
export default {
    name: "Container",
    components: {
        ArticleShow,
        HotArticle
    },

    data() {
        return {
            word: "",
            articleTages: [],
            articleList: [],
            articleHot: [],
            coverIndex: this.$route.params.id * 1,
            visitor: [],
            searchArr: [],
            isShow:true,
            // blurPadding: ""
        };
    },

    methods: {
        handleSeachTitle(){
            this.articleList.forEach(item => {
                // console.log('a..');
                if (this.searchArr.length < this.articleList.length) {
                    this.searchArr.push(item.title);
                }
            });
        },
        handleBlurSearchTitle(){
            this.searchArr = [];
        },
        // handleEvent(e){
        //     console.log(e.target,'a&');
        // },
        handleClick(item){
            // this.$store.state.article = item
            console.log(item,'a)');
            this.articleList.forEach(i => {
                // console.log(i.title,item);
                if(i.title === item){
            this.$store.state.article = i

                console.log(i,'a*');
                    // console.log();
                }
            })
            
            console.log(this.$store.state.article,item,'a=');
        },
        handleMouseenter(index) {
            this.coverIndex = index;
        },

        handleMouseleave() {
            this.coverIndex = 0;
        },
        handleSearch() {
            // console.log(this.articleList,'a/');
            // for (var title in this.articleList) {

            this.searchArr = [];

            this.articleList.forEach(item => {
                // console.log('a..');
                // this.searchArr.push(item.title);
                if (this.word) {
                    // this.$delete(this.searchObj, key);
                    // console.log("e2");
                    this.reg = new RegExp("^" + this.word);
                    // console.log(item.title,"a;");
                    this.searchTitle = item.title.match(this.reg);
                    // console.log(this.searchTitle, "a,,");
                    if (this.searchTitle !== null) {
                        this.searchTitleInput = this.searchTitle["input"];
                        console.log(this.searchTitleInput, "p1");
                        this.searchArr.push(this.searchTitleInput);
                        console.log(this.searchArr, "a[");
                        // this.$set(
                        //     this.searchObj,
                        //     this.searchTitleInput,
                        //     this.obj[this.searchTitleInput]
                        // );
                    }
                }
                if (this.word === "") {
                    // console.log("a2");
                }
            });
            // console.log(this.searchObj, "j1");
        },
        handleDelete() {
            // for (var key in this.searchObj) {
            //     this.reg = new RegExp("^" + this.word);
            //     this.searchKey = key.match(this.reg);

            //     this.$delete(this.searchObj, key);
            // }
            if (this.word === "") {
                this.articleList.forEach(item => {
                    // console.log('a..');
                    if (this.searchArr.length < this.articleList.length) {
                        this.searchArr.push(item.title);
                    }
                });
            }

            // this.$delete(this.searchObj, key);
        },
        // handleFocus() {
        //     this.articleList.forEach(item => {
        //         // console.log('a..');
        //         if (this.searchArr.length < this.articleList.length) {
        //             this.searchArr.push(item.title);
        //         }
        //     });
        //     // this.blurPadding = "10px";
        //     // this.isShow = true

        // },
        // handleBlur() {
        //     // this.searchArr = [];
        //     // this.blurborderradius = 0;
        //     // this.isShow = false
        // }
    },

    computed: {
        getArticleRecommend() {
            return this.articleHot[0] || {};
        }
    },

    mounted() {
        console.log(this.$store.state.article,'a-');
        getArticleInfo()
            .then(res => {
                this.articleTages = res.data.data.tags; // console.log(res.data.data.tags);
                // console.log(this.articleTages,'aa');
                // console.log(res,'bb');
            })
            .catch(err => {
                console.log(err);
            });
        // getArticleTItle()
        //     .then(res => {
        //         this.articleHot = res.data.data;
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        getUser()
            .then(res => {
                this.visitor = res.data.data;
                // console.log(res.data.data,'aaa');
            })
            .catch(() => {});
        getArticleTItle().then(res => {
            this.articleList = res.data.data;

            // console.log(this.articleList, 666);
        });
    }
};
</script>
<style lang="less" scoped>
#container {
    // position:absolute;
    // z-index: 10;
    display: flex;
    justify-content: space-around;

    > .el-container {
    // position:absolute;

        max-width: 1300px;
        margin: 20px auto;

        // margin: 0 auto;
        .el-main {
            padding: 0 20px;
        }

        > .el-aside {
            margin: 0 20px 0 0;
            width: 300px;
            height: 1200px;
            background-color: aqua;

            > .search {
                background-color: #fff;

                .search-main {

                    position: relative;
                    z-index: 10;
                    height: 40px;
                    padding: 20px;
                    background-color: grey;

                    input {
                        width: 100%;
                        height: 40px;
                        border-radius: 20px;
                        border: 0;
                        outline: 0;
                        text-indent: 2em;
                    }

                    i {
                        position: absolute;
                        font-size: 18px;
                        line-height: 20;
                        cursor: pointer;

                        &::before {
                            position: relative;
                            top: -160px;
                            left: -30px;
                        }
                    }
                    .search-title{
                        // padding: 10px;
                         position: absolute;
                        // z-index: 1;
                        top: 80px;
                        background-color: #789;
                        // padding: 10px !important;
                        border-radius: 10px;
                        ul {
                            margin: 10px;
                            // list-style-type: none;
                            margin-block-start: 0;
                            margin-block-end: 0;
                            // box-sizing: border-box;
                            // padding: 0;
                        // opacity:1;

                        li {
                            // padding: 5px;
                            padding: 5px;
                            font-size: 16px;
                            color: #fff;
                        }
                    }
                    }
                    
                }

                .search-article {
                    position: relative;
                    margin-top: 20px;

                    ul {
                        margin: 0;
                        padding: 0;

                        li {
                            position: relative;
                            z-index: 1;
                            box-sizing: border-box;
                            padding: 0 10px;
                            list-style-type: none;
                            height: 40px;
                            line-height: 40px;

                            a {
                                display: block;
                                text-decoration: none;
                                border-bottom: 1px dotted #eee;
                            }
                        }
                    }

                    .cover {
                        box-sizing: border-box;
                        position: absolute;
                        width: 100%;
                        left: 0;
                        top: 0;
                        height: 40px;
                        border-right: 5px solid #000;
                        background-color: rgba(0, 0, 0, 0.05);
                        transition: 0.2s;
                    }
                }
            }

            > .recommend {
                box-sizing: border-box;
                margin-top: 20px;
                background-color: #89ab22;
                padding: 20px 20px;

                h3 {
                    position: relative;
                    padding: 0 5px 10px;
                    line-height: 30px;
                    font-weight: 400;
                    border-bottom: 1px solid #e8e;
                    color: #383;
                    font-size: 18px;
                }

                ul {
                    padding: 0;
                    margin: 0;

                    > li {
                        height: 30px;
                        line-height: 30px;
                        margin: 3px 0;
                        list-style-type: none;

                        i {
                            display: inline-block;
                            font-style: normal;
                            font-size: 12px;
                            margin: 0 8px;
                            line-height: 25px;
                            width: 25px;
                            height: 25px;
                            color: #666;
                            text-align: center;
                            border-radius: 100%;
                            background-color: #edef;
                            text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
                        }

                        &:nth-child(1) i {
                            background-color: #e24e86;
                            color: #fff;
                        }

                        &:nth-child(2) i {
                            background-color: #2ea;
                            color: #fff;
                        }

                        &:nth-child(3) i {
                            background-color: #6bc;
                            color: #fff;
                        }
                    }
                }
            }

            > .recommend {
                background-color: #3c9;
            }

            > .visitor {
                background-color: #386;
                margin-top: 20px;

                h3 {
                    position: relative;
                    margin: 0 20px;
                    padding: 20px 0 10px;
                    line-height: 30px;
                    font-weight: 400;
                    border-bottom: 1px solid #e8e;
                    font-size: 18px;
                }
                ul {
                    display: flex;
                    flex-wrap: wrap;
                    margin: 20px;
                    list-style-type: none;

                    li {
                        width: 50px;
                        height: 50px;
                        margin: 10px;
                        background-size: cover;
                        background-position: 60%;
                        border-radius: 50%;
                    }
                }
            }
        }

        @media only screen and (max-width: 500px) {
            .el-aside {
                display: none;
            }
        }
    }
}
</style>
