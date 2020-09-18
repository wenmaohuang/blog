<template>
  <div>
    <a href="http://www.azhibo.com/zuqiuzhibo">足球直播</a>
    <Websocket></Websocket>
  </div>
</template>

<script>
import Websocket from "@/components/Websocket";
export default {
  name: "football",
  components:{
    Websocket
  }
}
</script>

<style scoped>

</style>