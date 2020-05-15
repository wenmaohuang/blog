<template>
  <div class="About">
    <Nav></Nav>
    <div class="about-main">
      <div class="a-m-content">
        <article>
          <section>
            <h1>关于我</h1>
            <p>最近喜欢敲代码~</p>
            <span>可以通过以下方式联系到我：</span>
            <ul>
              <li>
                邮 箱 ：
                <a href="648371113@qq.com">648371113@qq.com</a>
              </li>
            </ul>
          </section>
          <section>
            <h1>关于本站</h1>
            <span>本站结构：</span>
            <ul>
              <li>
                前 端 ：
                <code>elementUI + Vue</code>
              </li>
              <li>
                后 端 ：
                <code>Node + Mongoose</code>
              </li>
            </ul>
            <p>本站采用阿里云提供的服务器ESC。</p>
          </section>

          <section>
            <h1>特别说明</h1>
            <ul>
              <li>本站文章仅代表个人观点，和任何组织或个人无关。</li>
            </ul>
            <!-- <br />
            <br /> -->
          </section>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Nav";

export default {
  name: "About",
  components: {
    Nav
  }
};
</script>

<style scoped lang="less">
.About {
  background-image: url("../../assets/img/2.jpg");
  width: 100%;
 
  .about-main {
    box-sizing: border-box;
    width: 100%;
    max-width: 1300px;
    padding: 30px 20px;
    height:800px;
    margin: 0 auto;
    .a-m-content {
      background-color: #fff;

      article {
        padding: 10px;
        section {
          padding: 20px;
          background: #fff;
          font-size: 1rem;
          code {
            background: rgba(27, 31, 35, 0.05);
            padding: 0.2rem 0.4rem;
            color: #bd4147;
            border-radius: 4px;
            font-family: Menlo, Monaco, Consolas, Courier New, monospace;
          }
          h1 {
            margin-bottom: 1rem;
            padding-left: 1rem;
            border-left: 0.25rem solid #6bc30d;
            font-weight: 700;
            font-size: 1.5rem;
            line-height: 1.5rem;
          }
          p {
            margin: 1.5rem 0;
            padding-left: 18px;
            line-height: 1.75rem;
          }
          span {
            padding-left: 18px;
          }
          ul {
            padding-left: 18px;
            li {
              list-style-type: none;
              line-height: 2rem;
              a {
                color: #0366d6;
              }
            }
          }
        }
      }
    }
  }
}
</style>