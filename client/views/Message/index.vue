<template>
    <div class="message">
        <!-- <Nav></Nav> -->
        <div class="main">
            <div class="content">
                <article>
                    <section>
                        <h2>留言板</h2>
                        <p>沟通交流,拉近你我~</p>
                        <RichText @Sub="handleSubmit"></RichText>
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
                                        <span class="reply" @click="reply(index,item._id)">回复</span>
                                    </div>
                                </div>
                                <ChildMessage :parentComment="item" :parentUser="item.user.user" :childCommentList="item.children"></ChildMessage>
                                <ParentRichText
                                    ref="parentR"
                                    :childIndex="ind"
                                    @Parent="parentSubmit"
                                ></ParentRichText>
                                
                                <!-- <section class="child">
                                    <ul>
                                        <li
                                            v-for="(childItem,childIndex) in item.children"
                                            :key="childIndex"
                                        ></li>
                                    </ul>
                                </section>-->
                            </li>
                        </ul>
                    </section>
                </article>
            </div>
        </div>
    </div>
</template>
    
<script src="/static/layui/layui.js"></script>

<script>
// import Nav from "../../src/components/Nav";
import RichText from "../../src/components/RichText";
import ParentRichText from "../../src/components/ParentRichText";
import ChildMessage from "../../src/components/ChildMessage";


import request from "../../api/index";
import { get } from "http";

const postIfLogin = request.postIfLogin;
const postMessage = request.postMessage;
const getMessage = request.getMessage;
const postChildMessage = request.postChildMessage;

export default {
    name: "index",
    computed: {},
    // filter(){},
    data() {
        return {
            layui: null,
            commentList: [],
            commentIndex: "",
            ind: 1,
            childReply: "",
            isTrue: true,
            parentId: ""
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
            // console.log(val,'222')
            postIfLogin()
                .then(res => {
                    if (res.data.userInfo) {
                        console.log(res.data, "nn");
                        // res.send({code:0})
                        // res.send({ code: 0 });
                        postMessage({
                            user: res.data.userInfo._id,
                            content: val
                        })
                            .then(res => {
                                layer.msg("留言成功", { icon: 1 });
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1000);
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
        parentSubmit(val) {
            postIfLogin()
                .then(res => {
                    if (res.data.userInfo) {
                        console.log(res.data, 111);
                        // res.send({code:0})
                        // res.send({ code: 0 });
                        console.log(val, "pp");
                        postChildMessage({
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
    mounted() {
        getMessage().then(res => {
            this.commentList = res.data.data;
            console.log(this.commentList, 44);
        });
    },
    components: {
        // Nav,
        RichText,
        ParentRichText,
        ChildMessage
    }
};
</script>

<style lang='less' scoped>
.message {
    background-image: url("../../src/assets/img/2.jpg");
    background-size: cover;
    min-height: 850px;

    .main {
        box-sizing: border-box;
        max-width: 1300px;
        padding: 20px;
        margin: 0 auto;

        .content {
            width: 100%;
            // height: 500px;
            background-color: #fff;
            article {
                section {
                    box-sizing: border-box;
                    width: 100%;
                    padding: 20px 15px;
                    h2 {
                        font-weight: 700;
                        font-size: 2rem;
                        // margin: 0 atuo;
                        text-align: center;
                        // background-color: #aaa;
                    }
                    p {
                        font-size: 1.25rem;
                        text-align: center;

                        margin: 1rem atuo;
                    }
                }
                .mes {
                    ul {
                        > li {
                            border-bottom: 1px dashed #aaa;
                            margin: 10px;
                            .comment-parent {
                                .p-content {
                                    margin: 10px;
                                }
                                .p-time {
                                    margin: 10px;
                                    .reply {
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