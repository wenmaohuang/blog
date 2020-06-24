<template>
    <div class="articleDetail">
        <Nav></Nav>
        <!-- <p>kjljkjkkkkkk</p> -->
        <div class="detail">
            <!-- <h5>
                <span>{{'【'+articleList.type+'】'}}</span>
                <a>{{articleList.title}}</a>
            </h5>
            <div class="time">
                <p>{{articleList.day}}</p>
                <div>
                    <span>{{articleList.month + '月'}}</span>
                    <span>{{articleList.year}}</span>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import Nav from "../../../src/components/Nav";
// import request from "../../api";
// const getArticleShow = request.getArticleShow;

export default {
    components: {
        Nav
    },
     mounted() {
        
    }
};
</script>

<style lang='less'>
.articleDetail {
    .detail {
        background-color: #aaa;
        margin: 20px auto;
        width: 1260px;
    }
}
</style>