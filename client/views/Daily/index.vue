<template>
  <div class="daily">
    <Nav></Nav>
    <div class="daily-main">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <!-- <h1>this is daily page</h1> -->
  </div>
</template>
<script>
import Nav from "../../components/Nav";
export default {
  name: "index",
  components: {
    Nav
  }
};
</script>

<style lang='less' scoped>
.daily {
  // width: 100%;
  background-image: url("../../assets/img/2.jpg");


  .daily-main {
    box-sizing: border-box;
        margin: auto;
  width: 100%;

    max-width: 1260px;
    padding: 20px;

    min-height: 800px;
    // background-color: #eee;
  }
}
</style>