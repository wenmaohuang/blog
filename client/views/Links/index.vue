<template>
  <div class="Links">
    <!-- <Nav></Nav> -->

    <!-- <div class="canvas" ref="can">
      <div class="txt">
       
      </div>

    </div> -->
    <div class="link-main">
      <div class="rule">
        <h3>链接说明</h3>
        <p>
        
          <i class="fa fa-check"></i>原创优先&nbsp;
          <i class="fa fa-check"></i>技术优先
        </p>
        <p>本站链接如下：<br>
        名称：风<br>
        网址：https://www.fyyd.vip<br>
        描述：自由自在地流浪</p>

      </div>
      <Yinshi></Yinshi>

      <!-- <div class="container">
        <ul>
          <li v-for="(item,index) in linksList" :key="index">
            <a :href="item.href" target="_blank">
              <img :src="item.icon">
              <p>{{item.des}}</p>
            </a>
          </li>
        </ul>
      </div> -->
      
    </div>
  </div>
</template>

<script>
  // import Nav from "../../src/components/Nav";
  import Yinshi from "../../src/components/Yinshi";
  export default {
    name: "Links",
    data(){
      return {
        linksList:[
          {href:"http://www.fyyd.vip",icon:"img/2.png",des:"开发者"}
        ]
      }
    },
    components:{
      // Nav,
      Yinshi,
    }
  }
</script>

<style scoped lang="less">
  .Links{
    // width: 100%;
    // padding-top: 61px;
  // background-image: url("http://www.fyyd.vip/static/img/2.jpg");
  background-image: url("../../src/assets/img/2.jpg");
  height: 800px;

    
    .canvas{
        
      // position: relaabtaive;
      // padding: 20px;
      // padding: 20px 20px 0 20px;
    max-width: 1260px;
      margin: 0 auto;
      // width: 100%;
      height: 260px;
      .txt{
        position: absolute;
        left: 50%;
        top: 50%;
        text-align: center;
        transform: translate(-50%,-50%);
        color: #fff;
        h2{
          font-size: 25px;
          font-weight: normal;
        }
      }
    }
    .link-main{
      box-sizing: border-box;
      width: 100%;
      max-width: 1300px;
      padding: 20px 20px 0;
      // height: 500px;
      margin: 0 auto;
      .rule{
        box-sizing: border-box;
        padding: 20px;
        // width: 100%;
        background-color: #fff;
        height: 280px;
        h3{
          margin-bottom: 1rem;
          padding-left: 1rem;
          border-left: .25rem solid #6bc30d;
          font-weight: 700;
          font-size: 1.5rem;
          line-height: 1.5rem;
        }
        p{
          margin: 1.5rem 0;
          padding-left: 18px;
          font-family: Raleway,Segoe UI,Lucida Grande,Helvetica,Arial,Microsoft YaHei;
          line-height: 1.75rem;
          color: #515250;
        }
      }
      .container{
        box-sizing: border-box;
        width: 100%;
        height: 500px;
          padding:20px 0;

        ul{
          display: flex;
          // box-sizing: border-box;
          width: 100%;
          flex-wrap: wrap;
          // padding: 20px;
        height: 220px;

          justify-content: space-between;
          li{
            box-sizing: border-box;
            width: 23.5%;
            height: 150px;
            padding: 20px;
            background-color: #fff;
            // margin-top: 2%;
            transition: .5s;
            list-style-type: none;
            cursor: pointer;
            &:hover{
              transform: translateY(-2px);
              box-shadow: 0 0 5px #fff;
            }
            a{
              display: block;
              // padding: 20px;
              background: #fff;
            text-decoration: none;
              color: #333;
              img{
                float: left;
                width: 40px;
                height: 40px;
                border-radius: 100%;
              }
              h3{
                overflow: hidden;
                padding: 10px 15px 9px;
                height: 21px;
                font-weight: normal;
              }
              p{
                clear: both;
                display: block;
                overflow: hidden;
                margin-top: 1rem;
                padding: 10px 0;
                height: 60px;
                width: 50px;
                text-overflow: ellipsis;
                font-size: 13px;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 3;
              }
            }
          }
        }

      }
    }
  }
</style>