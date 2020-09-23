<template>
  <div>
    <video id="videoElement"  class="flvplayer-app"></video>

    <button @click="play">
      播放
    </button>
    <button @click="pause">
      暂停
    </button>
  </div>

</template>

<script>

// import flvPlayer  from 'flvplayer'
import flvPlayer from 'flv.js'
export default {
  name: 'flv',
  data () {
    return {
      flvPlayer:null,
    }
  },
  props:{
    videoSrc:{
      type: String,

      default: 'http://zb.fyyd.vip/app/stream.flv?auth_key=1600868383-0-0-e2949e19ba55d216b94dc43cd80b9683'
    }
  },
  mounted () {
    if(flvPlayer.isSupported()){
      var videoElement = document.getElementById('videoElement')
      var videoSrc = this.videoSrc
      this.flvPlayer = flvPlayer.createPlayer({
        // url:"http://cyberplayerplay.kaywang.cn/cyberplayer/demo201711-L1.flv",
        url:videoSrc,
        type: 'flv',
      })
      this.flvPlayer.attachMediaElement(videoElement)
      this.flvPlayer.load()
    }
  },
  methods:{
    play(){
      this.flvPlayer.play();
    },
    pause(){
      this.flvPlayer.pause();
    }
  }
}
</script>

<style lang="less" scoped>

</style>