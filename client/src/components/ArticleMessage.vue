<template>
    <div class="message">
        <div class="main">
            <div class="content">
                <article>
                    <section>
                        <h5>发表评论</h5>
                        <!-- <MessageRichText @Sub="handleSubmit"></MessageRichText> -->
                        <!-- <MessageRichText @Sub="handleSubmit(val);handleSubmitMessage()"></MessageRichText> -->
                        <MessageRichText @Sub="handleSubmit"></MessageRichText>
                    </section>
                    <section class="mes">
                        <ul>
                            <li v-for="(item,index) in commentList" :key="index">
                                <div class="comment-parent">
                                    <div class="p-img"></div>
                                    <div class="p-name">{{item.user.user}}</div>
                                   
                                    <div class="p-content" v-html="item.content"></div>
                                    <div class="p-time">
                                        <span>{{item.date|getTime}}</span>
                                        <!-- <a href>回复</a> -->
                                        <span class="reply" @click="reply(index,item._id)">回复</span>

                                    </div>
                                </div>
                                <ChildMessage :parentComment="item" :parentUser="item.user.user" :childCommentList="item.children"></ChildMessage>
                                <ParentRichText
                                    ref="parentR"
                                    @Parent="parentSubmit"
                                ></ParentRichText>
                                <!-- <div class="comment-children"></div> -->
                            </li>
                        </ul>
                    </section>
                </article>
            </div>
        </div>
    </div>
</template>
    
<script src="/blog/static/layui/layui.js"></script>

<script>
import MessageRichText from "./MessageRichText";
import request from "../../api/index";
import { get } from "http";

import ParentRichText from "../../src/components/ParentRichText";
import ChildMessage from "../../src/components/ChildMessage";

// const postIfLogin = request.postIfLogin;
const postArticleComment = request.postArticleComment;
const postArticleMessage = request.postArticleMessage;
const getArticleMessage = request.getArticleMessage;
const postArticleChildMessage = request.postArticleChildMessage
const postIfLogin = request.postIfLogin;

// const getArticlecomment = request.getArticlecomment;

export default {
    name: "index",
    data() {
        return {
            layui: null,
            commentList: [],
            comment: {}
        };
    },
    filters: {
        getTime(val) {
            let date = new Date(val);
            return `${date.getFullYear()}年${date.getMonth() +
                1}月${date.getDate()}日`;
        }
    },
    methods: {
        handleSubmit(val) {
            // this.$store.state.articleMessage.content = val;
            // console.log(this.comment,78);
            console.log(val,89);

                this.$emit('handleComment',val)
        },
         parentSubmit(val) {
            postIfLogin()
                .then(res => {
                    if (res.data.userInfo) {
                        console.log(res.data, 111);
                        // res.send({code:0})
                        // res.send({ code: 0 });
                        console.log(val, "pp");
                        postArticleChildMessage({
                            parentId: this.parentId,
                            user: res.data.userInfo._id,
                            content: val,
                            reUser: res.data.userInfo.user
                        })
                            .then(res => {
                                layer.msg("留言成功", { icon: 1 });
                                setTimeout(() => {
                                    window.location.reload();
                                }, 10000);
                            })
                            .catch(() => {
                                layer.msg("服务器错误~请稍后再试", { icon: 2 });
                            });
                    } else {
                        layer.msg("请先登录", { icon: 2 });
                    }
                })
                .catch(() => {
                    layer.msg("服务器出错了", { icon: 2 });
                });
        },
         reply(index, _id) {
            this.commentIndex = index;
            // console.log(this.commentIndex, "gg");
            this.parentId = _id;
            // console.log(this.$refs, "ff", index);
            this.$refs.parentR[index].parentReply(index);
        }
    },
    created() {},
    watch:{
        article(){
             
        }
    },
    mounted() {
        console.log(this.$store.state.article, 12);
        console.log(this.comment, 23);
        // this.commentList = this.$store.state.article.comment
        getArticleMessage().then(res => {
            this.articleList = res.data.data;
            this.articleList.forEach(element => {
                if(element.title === this.$store.state.article.title){
                    this.commentList = element.comment
            console.log(this.commentList,56);

                }
            });

        });
        // getArticlecomment().then(res => {
        //     this.commentList = res.data.data;
        //
        // });
    },
    components: {
        MessageRichText,
        ParentRichText,
        ChildMessage
    }
};
</script>

<style lang='less' scoped>
.message {
    .main {
        box-sizing: border-box;
        max-width: 1260px;
        margin: 0 auto;

        .content {
            width: 100%;
            background-color: #fff;
            article {
                section {
                    box-sizing: border-box;
                    width: 100%;
                    padding: 20px 15px;
                    h5 {
                        font-size: 1.5rem;
                    }
                    p {
                        font-size: 1.25rem;
                        text-align: center;

                        margin: 1rem atuo;
                    }
                }
                .mes {
                    ul {
                        li {
                            border-bottom: 1px dashed #aaa;
                            margin: 10px;
                            .comment-parent {
                                .p-content {
                                    margin: 10px;
                                }
                                .p-time {
                                    margin: 10px;
                                    .reply{
                                        cursor: pointer;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>