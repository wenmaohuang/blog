<template>
    <div class="articleShow">
        <section v-for="(i,index) in articleList" :key="index">
            <div class="head">
                <h5>
                    <span>{{'【'+i.type+'】'}}</span>
                    <a href>{{i.title}}</a>
                </h5>
                <div class="time">
                    <p>{{i.day}}</p>
                    <div>
                        <span>{{i.month + '月'}}</span>
                        <span>{{i.year}}</span>
                    </div>
                </div>
            </div>
            <div class="content">
                <img src="http://www.fyyd.vip/img/1.jpg" alt />
                <p v-html="i.content"></p>
            </div>
            <div class="footer">
                <div class="flex">
                    <h5>
                        <span>{{'【'+i.tag+'】'}}</span>
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
            articleList: [
                
            ],
          
        };
    },
    computed: {
        id() {
            return this.$route.params.id;
        }
    },
    methods: {
      
    },
    watch: {
        id() {
            getArticleShow(this.id, true).then(res => {
                this.articleList = res.data.data;
            // console.log(this.articleList,666)

                
            });
        }
    },

    mounted() {
        
        getArticleShow(this.$route.params.id,true).then(res => {
            this.articleList = res.data.data;
            // console.log(this.articleList,555)
            console.log(this,666)
        
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
                // height: 200px;
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
                // position: static;
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
                    // display:block;
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
