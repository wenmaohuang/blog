<template>
    <div id="app">
        <!-- <router-view v-if="isRouterAlive"></router-view> -->
        <router-view v-wechat-title="$route.meta.title"/>
    </div>
</template>
<script>
    export default {
        name:"App",
        components:{
        },
        data(){
            return{
                // isRouterAlive:true
            }
        },
        mounted(){
            // console.log(this,333)
        }
    }
</script>


<style lang="less" scoped>
    @import "../src/assets/css/font.css";
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // text-align: center;
        color: #2c3e50;

    }


</style>