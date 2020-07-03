<template>
    <section class="child">
        <ul>
            <li v-for="(childItem,childIndex) in childCommentList" :key="childIndex">
                <div class="c-img"></div>
                <div class="c-main">
                    <div class="c-name">
                        {{childItem.reUser}}
                        <span>回复</span>
                        <span>{{parentUser}}</span>
                    </div>

                    <div class="c-content" v-html="childItem.content"></div>
                </div>
                <div class="c-time">
                    <span>{{childItem.date|getTime}}</span>
                    <span class="reply" @click="cReply(childIndex,parentComment._id,childItem)">回复</span>
                </div>
            </li>
        </ul>
        <ChildRichText ref="childR" @Child="ChildSubmit"></ChildRichText>
    </section>
</template>
<script src="/static/layui/layui.js"></script>

<script>
import request from "../../api/index";

import ChildRichText from "../../src/components/ChildRichText";
const postIfLogin = request.postIfLogin;
const postChildMessage = request.postChildMessage;

export default {
    props: {
        parentUser: {
            type: String
        },
        parentComment: {
            type: Object
        },
        childCommentList: {
            type: Array
        }
    },
    filters: {
        getTime(val) {
            let date = new Date(val);
            return `${date.getFullYear()}年${date.getMonth() +
                1}月${date.getDate()}日`;
        }
    },
    methods: {
        ChildSubmit(val) {
            postIfLogin()
                .then(res => {
                    if (res.data.userInfo) {
                        console.log(res.data, 222);
                        // res.send({code:0})
                        // res.send({ code: 0 });
                        console.log(val, "pp");
                        postChildMessage({
                            parentId: this.chidlParentId,
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
        cReply(childIndex, _id, childItem) {
            this.childCommentIndex = childIndex;
            // console.log(this.commentIndex, "gg");
            this.chidlParentId = _id;
            // console.log(childIndex, "aa");
            // console.log(this.$refs, "ff", index);
            // console.log(this.$refs,'bb');
            this.$refs.childR.childReply(childIndex);
            console.log(childItem, "cc");
        }
    },
    components: {
        ChildRichText
    }
};
</script>

<style lang='less'>
.child {
    width: 100%;
    // height:250px;
    ul {
        li {
            border-bottom: 1px dashed transparent;
            .c-main{
                display:flex;
                padding:20px;
            }
            .c-time {
                padding:0 20px 20px;

                .reply {
                    cursor: pointer;
                }
            }
        }
    }
}
.index0 {
    // display: none;
}
.comment-children {
    // height: 250px;
}
</style>