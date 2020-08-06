<template>
    <div class="blog">
        <Container></Container>
    </div>
</template>

<script>
    import Container from '../../src/components/Container'
    export default {
        name: "index",
        components:{
            Container
        }
    }
</script>

<style scoped>
    .blog{
  background-image: url("../../src/assets/img/2.jpg");
        
    }
</style>