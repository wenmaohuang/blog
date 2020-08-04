<template>
    <div class="blog">
        <!-- <Nav></Nav> -->
        <Container></Container>
        <!-- <router-view></router-view> -->
    </div>
</template>

<script>
    // import Nav from '../../src/components/Nav'
    import Container from '../../src/components/Container'
    export default {
        name: "index",
        components:{
            // Nav,
            Container
        }
    }
</script>

<style scoped>
    .blog{
  background-image: url("../../src/assets/img/2.jpg");
        
    }
</style>