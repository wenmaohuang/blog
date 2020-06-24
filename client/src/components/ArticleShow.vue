<template>
    <div class="articleShow" >
        <section  v-for="(item,index) in articleList" :key="index">
            <div class="head">
                <h5>
                    <span>{{'【'+item.type+'】'}}</span>
                    <a :model="item.title" :value="item.title" ref='title'>{{item.title}}</a>
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
                <router-link to="/content">
                    <img src="http://www.fyyd.vip/img/1.png" @click="handleArticleList(item)" alt />
                    <p v-html="item.content"></p>
                </router-link>
            </div>
            <div class="footer">
                <div class="flex">
                    <h5>
                        <span>{{'【'+item.tag+'】'}}</span>
                    </h5>
                    <div class="reader">
                        <span>10</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import request from "../../api";
const getArticleShow = request.getArticleShow;

export default {
    name: "ArticleShow",
    data() {
        return {
            articleList: [],
            content:'test',
            title:''
        };
    },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    methods: {
        handleArticleList(a) {
            console.log(a,2222)
            console.log(this.content, 888);
        console.log(this.$refs.title,999)

            
        // console.log(this.$refs.contentTest.value,'1111')
        // console.log(e)

        }
    },
    watch: {
        id() {
            getArticleShow(this.id, true).then(res => {
                this.articleList = res.data.data;
            });
        }
    },

    mounted() {
        getArticleShow(this.$route.params.id, true).then(res => {
            this.articleList = res.data.data;
            console.log(this, 666);
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
            display: flex;
            padding: 20px;
            img {
                width: 200px;
                background-size: contain;
            }
            p {
                padding: 0 20px;
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
                    span {
                        display: inline-block;
                        box-sizing: border-box;
                        padding: 10px 0;
                    }
                }
            }
        }
    }
}
</style>
