<template>
  <div class="articleShow">
    <section v-for="(i,index) in articleList" :key="index">
      <div class="head">
        <h5>
          <span>{{'【'+i.type+'】'}}</span>
          <a href>{{i.title}}</a>
        </h5>
        <div class="time">
          <p>{{date}}</p>
          <div>
            <span>{{month + '月'}}</span>
            <span>{{year}}</span>
          </div>
        </div>
      </div>
      <div class="content">
        <img src="../assets/img/1.jpg" alt width="200" height="200" />
        <p v-html="i.content"></p>
        <p>{{test()}}</p>
      </div>
    </section>
  </div>
</template>

<script>
import request from "../api";
const getArticleShow = request.getArticleShow;

let getYear = new Date().getFullYear();
let getMonth = new Date().getMonth() + 1;
let getDate = new Date().getDate();

export default {
  name: "ArticleShow",
  data() {
    return {
      articleList: [],
      year: getYear,
      month: getMonth,

      date: getDate
    };
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    test() {
      console.log(this.articleList);
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
    getArticleShow(this.$route.params.id).then(res => {
      this.articleList = res.data.data;
       if(location.href.indexOf("#reloaded")==-1){
        location.href=location.href+"#reloaded";
        location.reload();
    }
      window.console.log(this.articleList, 666);
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
    height: 330px;
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
      p {
        padding: 0 20px;
      }
    }
  }
}
</style>
