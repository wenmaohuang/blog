<template>
    <div class="articleShow">
        <section v-for="(item,index) in articleList" :key="index">
            <div class="head">
                <h5>
                    <span>{{'【'+item.type+'】'}}</span>
                    <a :model="item.title" :value="item.title" ref="title">{{item.title}}</a>
                </h5>
                <div class="time">
                    <p>{{item.day}}</p>
                    <div>
                        <span>{{item.month + '月'}}</span>
                        <span>{{item.year}}</span>
                    </div>
                </div>
            </div>
            <div class="content">
                <!-- <img src="http://www.fyyd.vip/img/1.png" @click="handleArticleList(item)" alt /> -->
                <router-link class='img' to="/content">
                    <img :src="item.surface" @click="handleArticleList(item)" alt />
                </router-link>
                <router-link class='p' to="/content">
                    <p v-html="item.content" @click="handleArticleList(item)"></p>
                </router-link>
            </div>
            <div class="footer">
                <div class="flex">
                    <h5>
                        <span>{{'【'+item.tag+'】'}}</span>
                    </h5>
                    <div class="reader">
                        <span class="iconfont icon-yuedu"></span>
                        <span>{{item.readcount}}</span>
                        
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script src="/static/layui/layui.js"></script>

<script>
import request from "../../api";
const getArticleShow = request.getArticleShow;
const postArticleReadCount = request.postArticleReadCount
const getChat = request.getChat

// import request from "../../../api/index";

// const postIfLogin = request.postIfLogin;
// const postArticleComment = request.postArticleComment;
// const postArticleMessage = request.postArticleMessage;

export default {
    name: "ArticleShow",
    data() {
        return {
            articleList: [],
            // article: '',
            content: "test",
            title: "",
            readcount:0,
        };
    },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    methods: {
        handleArticleList: function(item) {
            // console.log(this.$store.commit('edit'),555)
            // return item

            // item.readcount = item.readcount + 1
            this.$store.state.article = item;
            console.log(this.$store.state.article.readcount,'a#');
            this.$store.state.article.readcount = this.$store.state.article.readcount + 1 
            console.log(this.$store.state.article.readcount,'a%');
            postArticleReadCount({articleId:this.$store.state.article._id,readcount:this.$store.state.article.readcount}).then(res=>{
                    res.send({code:0})
            }).catch(e=>{
console.log(e);
            })

            // this.$store.state.article.readcount = this.readcount + 1
            console.log(item, "cc");
            console.log(this.$store.state.article, "dd");
            // this.$store.commit('handleArticleList')
        },
        
    },
    watch: {
        id() {
            getArticleShow(this.id, true).then(res => {
                this.articleList = res.data.data;
            });
        }
    },

    mounted() {
        getChat().then(res=>{
            console.log(res.data.data);
        })
        // console.log(this.$store.state.article,'b.');
        getArticleShow(this.$route.params.id, true).then(res => {
            this.articleList = res.data.data;
            // console.log(this, 666);
        });
    }
};
</script>

<style lang="less" scoped>
.articleShow {
    section {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        height: 450px;
        padding: 0 20px;
        margin-bottom: 20px;
        background-color: #fff;
        .head {
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            padding: 5px;
            h5 {
                width: 100%;
                border-bottom: 1px solid #ddd;
                padding: 10px 0;
                span {
                    color: blue;
                }
            }
            .time {
                display: flex;
                flex-direction: column;
                width: 120px;
                text-align: center;
                p {
                    position: relative;
                    font-size: 30px;
                    color: green;
                }
                div {
                    span {
                        padding: 0 5px;
                    }
                }
            }
        }
        .content {
            padding: 20px;
                display: flex;
            .img {

                img {
                    width: 250px;
                    height: 160px;
                    background-size: contain;
                }
            }
            .p {
                    width: 100%;
                      width: 100%;
                    height: 260px;
                    overflow: hidden;
                    line-height: 30px;
                    padding: 0 30px;
                    text-align: center;

                p {
                    // width: 500px;
                  
                }
            }
            @media only screen and (max-width: 500px) {
                .p{
                    display:none;
                }
            }
        }
        .footer {
            position: absolute;
            width: 90%;
            bottom: 10px;
            .flex {
                display: flex;
                justify-content: space-between;
                h5 {
                    width: 100%;
                    border-top: 1px solid #ddd;
                    span {
                        display: inline-block;
                        box-sizing: border-box;
                        padding: 10px 0;
                    }
                }
                .reader {
                    display:flex;
                    flex-direction: column;
                    .iconfont{
                        width: 20px;
                        font-size: 25px;
                        text-align: center;

                    }
                    span {
                        display: inline-block;
                        box-sizing: border-box;
                        text-align: center;
                        // padding: 10px 0;
                    }
                }
            }
        }
    }
}
</style>
