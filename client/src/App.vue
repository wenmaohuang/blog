<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
    export default {
        name:"App",
        components:{
        }
    }
</script>


<style lang="less" scoped>
    @import "../assets/css/font.css";
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

    }
    .el-menu-vertical{
        display: flex;
    }

</style>