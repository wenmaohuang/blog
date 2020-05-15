<template>
    <div class="blog">
        <Nav></Nav>
        <Container></Container>
    </div>
</template>

<script>
    import Nav from '../../components/Nav'
    import Container from '../../components/Container'
    export default {
        name: "index",
        components:{
            Nav,
            Container
        }
    }
</script>

<style scoped>
    .blog{
  background-image: url("../../assets/img/2.jpg");
        
    }
</style>