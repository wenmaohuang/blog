<template>
  <div class="main">
    <div style="margin: 10px;">
      <a href="http://www.azhibo.com/zuqiuzhibo" style="font-size: 20px;padding: 10px;">A直播</a>
      <a href="https://kanqiubao.com/room/10716/" style="font-size: 20px;padding: 10px;">看球宝</a>

      <div style="margin-top: 10px">
        <Video></Video>
      </div>
      <div style="margin-top: 10px">
        <BlogVideo></BlogVideo>
      </div>
    </div>
    <Websocket></Websocket>
  </div>
</template>

<script>
import Websocket from "@/components/Websocket";
import Video from "@/components/Video";
import BlogVideo from "@/components/BlogVideo";
export default {
  name: "football",
  components:{
    BlogVideo,
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