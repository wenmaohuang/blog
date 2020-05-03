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

<style lang='sass' scoped>
.daily
    box-sizing: border-box
    max-width: 1360px
    width: 100%
    padding: 0 50px
    >.daily-main
        width: 100%
        height: 500px
        background-color: #eee
        

    

</style>