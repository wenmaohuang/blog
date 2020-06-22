<template>
    <div class="message">
        <Nav></Nav>
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
                                        <a href>回复</a>
                                    </div>
                                </div>
                                <div class="comment-children"></div>
                            </li>
                        </ul>
                    </section>
                </article>
            </div>
        </div>
    </div>
</template>
    <script src="../../public/layui/layui.js"></script>

<script>
import Nav from "../../components/Nav";
import RichText from "../../components/RichText";
import request from "../../api/index";
import { get } from "http";
const postIfLogin = request.postIfLogin;
const postMessage = request.postMessage;
const getMessage = request.getMessage;

export default {
    name: "index",
    // filter(){},
    data() {
        return {
            commentList: [
                {
                    _id: "11",
                    user: {
                        _id: "xxx",
                        user: "阿飞",
                        photo: "http://localhost:8080/img/defaultPhoto.jpg"
                    },
                    content: "<p>11</p><p>22</p>",
                    date: new Date() + "",
                    children: [
                        {
                            user: {
                                _id: "xxx",
                                user: "xiao",
                                photo:
                                    "http://localhost:8080/img/defaultPhoto.jpg"
                            },
                            content: "shan lu shi ba wan",
                            $user: "阿飞"
                        },
                        {
                            user: {
                                _id: "xxx",
                                user: "hua",
                                photo:
                                    "http://localhost:8080/img/defaultPhoto.jpg"
                            },
                            content: "shan lu shi ba wan",
                            $user: "hua"
                        }
                    ]
                },
                {
                    _id: "11",
                    user: {
                        _id: "xxx",
                        user: "阿飞",
                        photo: "http://localhost:8080/img/defaultPhoto.jpg"
                    },
                    content: "<p>11</p><p>22</p>",
                    date: new Date() + "",
                    children: [
                        {
                            user: {
                                _id: "xxx",
                                user: "xiao",
                                photo:
                                    "http://localhost:8080/img/defaultPhoto.jpg"
                            },
                            content: "shan lu shi ba wan",
                            $user: "阿飞"
                        },
                        {
                            user: {
                                _id: "xxx",
                                user: "hua",
                                photo:
                                    "http://localhost:8080/img/defaultPhoto.jpg"
                            },
                            content: "shan lu shi ba wan",
                            $user: "hua"
                        }
                    ]
                }
            ]
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
                        console.log(res.data, 111);
                        // res.send({code:0})
                        // res.send({ code: 0 });
                        postMessage({
                            user: res.data.userInfo._id,
                            content: val
                        })
                            .then(res => {
                                // res.send({ code: 0 });
                                // console.log(res.data, 222);

                                layer.msg("留言成功", { icon: 1 });
                                setTimeout(() => {
                                    window.location.reload();
                                }, 1000);
                            })
                            .catch(() => {
                                // res.send({ code: 1 });
                                layer.msg("服务器错误~请稍后再试", { icon: 2 });
                            });
                    } else {
                        layer.msg("请先登录", { icon: 2 });
                    }
                })
                .catch(() => {
                    layer.msg("服务器出错了", { icon: 2 });
                });
            // console.log(val);
        }
    },
    mounted() {
        getMessage().then(res => {
            console.log(res.data.data, 333);
            this.commentList = res.data.data;
            // this.commentList = res.
        });
    },
    components: {
        Nav,
        RichText
    }
};
</script>

<style lang='less' scoped>
.message {
    background-image: url("../../assets/img/2.jpg");
    background-size: cover;
    // background-repeat: repeat;
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
                        li {
                            border-bottom: 1px dashed #aaa;
                            margin: 10px;
                            .comment-parent {
                            .p-content{
                                margin: 10px;

                            }
                            .p-time{
                                margin: 10px;

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