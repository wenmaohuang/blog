<template>
    <div class="articleShow">
        <section v-for="(i,index) in articleList" :key="index">
            <div class="head">
                <h5>
                    <span>{{'【'+i.type+'】'}}</span>
                    <a href="">{{i.title}}</a>
                </h5>
                <div class="time">
                    {{time}}
                </div>
            </div>
            <div class="content">
                {{i.content}}
            </div>
        </section>
    </div>
</template>

<script>
    import request from '../api'
    const getArticleShow = request.getArticleShow

    let date = new Date().getFullYear()


    export default {
        name: "ArticleShow",
        data() {
            return {
                articleList: [],
                time: date
            }
        },
        computed:{
            id(){
                return this.$route.params.id
            }
        },
        watch:{
            id(){
                getArticleShow(this.id,true).then(res=>{
                    this.articleList = res.data.data
                })
            }
        },

        mounted() {
            getArticleShow(this.$route.params.id).then(res => {
                this.articleList = res.data.data
            })
        }

    }
</script>

<style lang="less" scoped>
.articleShow{
    >section{
        box-sizing:border-box;
        width: 100%;
        height: 330px;
        padding: 20px;
        /*margin: 20px;*/
        >.head{
            display: flex;
            justify-content: space-between;

            >h5{
            }
            >.time{
            }
        }
    }
}
</style>