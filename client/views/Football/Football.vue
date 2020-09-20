<template>
  <div class="main">
    <div style="margin: 10px;">
      <a href="http://www.azhibo.com/zuqiuzhibo" style="font-size: 20px;padding: 10px;">A直播</a>
      <a href="https://kanqiubao.com/room/10716/" style="font-size: 20px;padding: 10px;">看球宝</a>

      <div style="width:700px;height: 400px;margin-top: 10px">
        <Video></Video>
      </div>
    </div>
    <Websocket></Websocket>
  </div>
</template>

<script>
import Websocket from "@/components/Websocket";
import Video from "@/components/Video";
export default {
  name: "football",
  components:{
    Websocket,
    Video
  }
}
</script>

<style scoped lang="less">
.main{
  display: flex;
}
</style>