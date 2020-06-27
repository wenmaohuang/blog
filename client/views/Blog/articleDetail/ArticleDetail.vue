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
                    <span>作者</span><span>...</span>
                    <span>阅读</span><span>...</span>
                    <span>发表时间</span><span>...</span>
                </div>
                <aplayer
                    autoplay
                    :music="{title: 'faded',artist: '',src: 'mp3/a.m4a',pic:'img/4.jpg'}"
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
        <ArticleDetail></ArticleDetail>
    </div>
</template>

<script>
import Nav from "../../../src/components/Nav";
import aplayer from "vue-aplayer";
import ArticleDetail from "../../../src/components/ArticleMessage";

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
        ArticleDetail
    },
    methods: {},

    created() {
        // console.log(222);
        this.article = this.$store.state.article;
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
                h5{

                }
                span{
                    font-size: 14px;
                }
            }
            .aplayer {
                // width: 1260px;
                // margin: 0 auto;
                margin: 0;
                box-shadow: 0 0 0 0 transparent;
                width: 400px;
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