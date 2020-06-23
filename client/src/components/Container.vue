<template>
    <div id="container">
        <el-container>
            <el-main>
                <ArticleShow></ArticleShow>
            </el-main>
            <el-aside>
                <div class="search">
                    <div class="search-main">
                        <input type="text" v-model="searchInput" placeholder="请输入搜索内容" />
                        <i class="el-icon-search"></i>
                    </div>
                    <div class="search-article">
                        <ul>
                            <li
                                @mouseenter="handleMouseenter(index)"
                                @mouseleave="handleMouseleave"
                                v-for="(item,index) in articleTages"
                                :key="index"
                            >
                                <router-link  :to="'/blog/'+item">{{item}}</router-link>
                            </li>
                        </ul>
                        <div class="cover" :style="{top:coverIndex*40 + 'px'}"></div>
                    </div>
                </div>
                <div class="hot">
                    <h3>热门文章</h3>
                    <ul>
                        <li v-for="(i,index) in articleHot" :key="index">
                            <i>{{index}}</i>
                            <a :href="i._id">{{i.title}}</a>
                        </li>
                    </ul>
                </div>
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
                            v-for="(i,index) in visitor"
                            :key="index"
                            :style="{backgroundImage:'url('+i.photo+')'}"
                        >
                            <p>{{i.user}}</p>
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

let getArticleInfo = request.getArticleInfo;
let getArticleHot = request.getArticleHot;
export default {
    name: "Container",
    components: {
        ArticleShow
    },

    data() {
        return {
            searchInput: "",
            articleTages: [],
            articleHot: [],
            coverIndex: this.$route.params.id * 1,
            visitor: [
                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                },

                {
                    user: "afei",
                    photo: "/img/defaultPhoto.png"
                }
            ]
        };
    },

    methods: {
        handleMouseenter(index) {
            this.coverIndex = index;
        },

        handleMouseleave() {
            this.coverIndex = 0;
        }
    },

    computed: {
        // getArticleTags() {
        //   return [...this.articleTages];
        // },

        getArticleRecommend() {
            return this.articleHot[0] || {};
        }
    },

    mounted() {
        getArticleInfo()
            .then(res => {
                this.articleTages = res.data.data.tags; // console.log(res.data.data.tags);
                // console.log(this.a);
            })
            .catch(err => {
                console.log(err);
            }),
            getArticleHot()
                .then(res => {
                    this.articleHot = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
    }
};
</script>
<style lang="less" scoped>
#container {
    display: flex;
    justify-content: space-around;

    > .el-container {
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

            > .hot,
            .recommend {
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
                    // color: #383;
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
