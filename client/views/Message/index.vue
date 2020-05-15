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
const postIfLogin = request.postIfLogin;

export default {
  name: "index",
  methods: {
    handleSubmit(val) {
      postIfLogin()
        .then(res => {
          if (res.data.userInfo) {
          } else {
            layer.msg("请先登录", { icon: 2 });
          }
        })
        .catch(() => {
          layer.msg("服务器出错了", { icon: 2 });
        });
      console.log(val);
    }
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
    background-size:cover;
    // background-repeat: repeat;
    min-height:850px;


  .main {
    box-sizing: border-box;
    max-width: 1300px;
    padding: 20px;
    margin: 0 auto;

    .content {
      width: 100%;
      height: 500px;
      background-color: #fff;
      article {
        section{
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
      }
    }
  }
}
</style>