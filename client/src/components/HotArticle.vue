<template>
    <div class="hot">
        <h3>热门文章</h3>
        <ul>
            <li v-for="(i,index) in articleHot" :key="index">
                <i>{{index}}</i>
                <a :href="i._id">{{i.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import request from "../../api/index";
let getArticleInfo = request.getArticleInfo;
let getArticleHot = request.getArticleHot;

export default {
    name: "HotArticle",
    data(){
        return{
            articleHot:''
        }
    },
    mounted() {
        getArticleInfo()
            .then(res => {
                this.articleTages = res.data.data.tags; // console.log(res.data.data.tags);
            })
            .catch(err => {
                console.log(err);
            }),
            getArticleHot()
                .then(res => {
                    this.articleHot = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
    }
};
</script>

<style lang='less' scoped>
 .hot {
    box-sizing: border-box;
    margin-top: 20px;
    background-color: #89ab22;
    padding: 20px 20px;

    h3 {
        position: relative;
        padding: 0 5px 10px;
        line-height: 30px;
        font-weight: 400;
        border-bottom: 1px solid #e8e;
        color: #383;
        font-size: 18px;
    }

    ul {
        padding: 0;
        margin: 0;

        > li {
            height: 30px;
            line-height: 30px;
            margin: 3px 0;
            list-style-type: none;

            i {
                display: inline-block;
                font-style: normal;
                font-size: 12px;
                margin: 0 8px;
                line-height: 25px;
                width: 25px;
                height: 25px;
                color: #666;
                text-align: center;
                border-radius: 100%;
                background-color: #edef;
                text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
            }

            &:nth-child(1) i {
                background-color: #e24e86;
                color: #fff;
            }

            &:nth-child(2) i {
                background-color: #2ea;
                color: #fff;
            }

            &:nth-child(3) i {
                background-color: #6bc;
                color: #fff;
            }
        }
    }
}
@media only screen and (max-width: 500px) {
//    .hot{
//        display: none;
//    } 
}
</style>