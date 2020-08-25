<template>
    <div id="app">
        <!-- <router-view v-if="isRouterAlive"></router-view> -->
        <router-view v-wechat-title="$route.meta.title" />
    </div>
</template>
<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            // isRouterAlive:true
        };
    },
    created() {
        let sessionStore = sessionStorage.getItem("new_store");
        sessionStore && this.$store.replaceState(JSON.parse(sessionStore));
    },
    mounted() {
        // console.log(this,333)
        window.onbeforeunload = () => {
            sessionStorage.setItem(
                "new_store",
                JSON.stringify(this.$store.state)
            );
        };
    }
};
</script>


<style lang="less" scoped>
@import "../src/assets/css/font.css";
#app {
    width:100%;
    margin: 0;
    padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}
</style>