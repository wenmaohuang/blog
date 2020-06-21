<template>
  <div class="daily">
    <Nav></Nav>
    <div class="daily-main">
      <el-timeline>
        <el-timeline-item :timestamp="i.time" placement="top" v-for="(i,index) in content" :key=index> 
          <el-card>
            <h4>{{i.content}}</h4>
            <!-- <p>{{i.time}}</p> -->
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <!-- <h1>this is daily page</h1> -->
  </div>
</template>
<script>
import Nav from "../../components/Nav";
import request from "../../api/index"
const getDaily = request.getDaily


export default {
  name: "index",
  data(){
    return {
      content:''
    }
  },
  components: {
    Nav
  },
  mounted(){
    getDaily().then(res=>{
        console.log(res.data.data,1112321)
        this.content = res.data.data

    }).catch(()=>{
        console.log('err')
    })
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