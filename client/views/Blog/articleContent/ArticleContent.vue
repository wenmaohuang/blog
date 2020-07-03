<template>
    <div class="articleDetail">
        <Nav></Nav>
        <div class="detail">
            <div class="head">
                <div class="title">
                    <h5>
                        <!-- <span>{{'【'+article.type+'】'}}</span> -->
                        <a
                            :model="article.title"
                            :value="article.title"
                            ref="title"
                        >{{article.title}}</a>
                    </h5>
                    <span>作者</span>
                    <span>...</span>
                    <span>阅读</span>
                    <span>...</span>
                    <span>发表时间</span>
                    <span>...</span>
                </div>
                <aplayer
                 :music="{
                    title:'faded',artist:'walker',src:'mp3/faded.m4a',pic:'img/4.jpg'
                    }"
                    :list="[
                     {title:'少年',artist:'梦然',src:'mp3/少年.m4a',pic:'img/4.jpg'},
                     {title:'faded',artist:'walker',src:'mp3/faded.m4a',pic:'img/4.jpg'}
                     ]"
                    :listFolded="true"
                    :autoplay="true"
                    :shuffle="true"
                    repeat="repeat-all"
                   
                ></aplayer>

                <div class="time">
                    <p>{{article.day}}</p>
                    <div>
                        <span>{{article.month + '月'}}</span>
                        <span>{{article.year}}</span>
                    </div>
                </div>
            </div>
            <div class="content">{{article.content}}</div>
        </div>
        <ArticleMessage @handleComment="comment"></ArticleMessage>
    </div>
</template>
<script src="/static/layui/layui.js"></script>

<script>
import Nav from "../../../src/components/Nav";
import aplayer from "vue-aplayer";

import request from "../../../api/index";

const postIfLogin = request.postIfLogin;
const postArticleComment = request.postArticleComment;
const postArticleMessage = request.postArticleMessage;



import ArticleMessage from "../../../src/components/ArticleMessage";

// import ArticleShow from "../../../src/components/ArticleShow"
// let  handleArticleList =   ArticleShow.methods.handleArticleList

export default {
    data() {
        return {
            article: ""
        };
    },
    components: {
        Nav,
        aplayer,
        ArticleMessage
    },
    methods: {
        comment(val){
            postIfLogin()
                .then(res => {
                    if (res.data.userInfo) {
                        console.log(res.data, 111);
                        console.log(val,98);

                        postArticleComment({
                            user: res.data.userInfo._id,
                            content: val
                        })
                            .then(res => {
                                console.log(res.data.data, "zz");
                                // this.$store.state.article.comment = res.data.data;
                                // this.$store.state.article.comment = res.data.data
                                // console.log(this.$store.state.article.comment,34);
                                postArticleMessage({
                                    comment: res.data.data,
                                    articleId: this.$store.state.article._id
                                })
                                    .then(res => {
                                        layer.msg("留言成功", { icon: 1 });
                                        setTimeout(() => {
                                            window.location.reload();
                                        }, 20000);
                                    })
                                    .catch(() => {
                                        layer.msg("服务器错误~请稍后再试", {
                                            icon: 2
                                        });
                                    });

                                layer.msg("留言成功", { icon: 1 });
                                setTimeout(() => {
                                    window.location.reload();
                                }, 20000);
                            })
                            .catch(() => {
                                layer.msg("服务器错误~请稍后再试", {
                                    icon: 2
                                });
                            });
                    } else {
                        layer.msg("请先登录", { icon: 2 });
                    }
                })
                .catch(() => {
                    layer.msg("服务器出错了", { icon: 2 });
                });
        
        }
    },

    created() {
        // console.log(222);
        this.article = this.$store.state.article;

        console.log(this.article, 11);
        //  console.log(ArticleShow.methods.handleArticleList(),222)
        // console.log(handleArticleList())
    }
};
</script>

<style lang='less'>
.articleDetail {
    background-image: url("../../../src/assets/img/2.jpg");
    min-height: 900px;

    .detail {
        // background-color: #aaa;
        background-color: #fff;

        margin: 20px auto 0;
        width: 1260px;
        .head {
            display: flex;
            justify-content: space-between;
            font-size: 20px;
            // padding: 5px;
            margin: 0 20px;
            border-bottom: 1px solid #ddd;

            .title {
                width: 100%;
                // border-bottom: 1px solid #ddd;
                padding: 25px 0 0;
                h5 {
                }
                span {
                    font-size: 14px;
                }
            }
            .aplayer {
                margin: 0;
                box-shadow: 0 0 0 0 transparent;
                width: 500px;
                .aplayer-body {
                    .aplayer-pic {
                        background-color: transparent !important;
                    }
                }
            }
            .time {
                display: flex;
                flex-direction: column;
                width: 150px;
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
            // background-color: #eee;
            padding: 0 25px;
            font-size: 16px;
            min-height: 400px;
            margin-top: 20px;
        }
    }
}
</style>