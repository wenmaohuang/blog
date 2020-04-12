<template>
    <div id="nav">
        <Register v-show="false"></Register>
        <div class="nav-main">
            <div class="logo">FYYD</div>
            <div class="n-nav">
                <ul :class="'list' + whichActive">
                    <li>
                        <router-link to="/">首页</router-link>
                    </li>
                    <li>
                        <router-link to="blog">博客</router-link>
                    </li>
                    <li>
                        <router-link to="message">留言</router-link>
                    </li>
                    <li>
                        <router-link to="daily">日记</router-link>
                    </li>
                    <li>
                        <router-link to="links">友连</router-link>
                    </li>
                    <li>
                        <router-link to="about">关于</router-link>
                    </li>
                </ul>
            </div>
            <div class="login">
                <el-button type="primary" >登录</el-button>
                <el-button @click="handlerRegister" type="success" >注册</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    import Register from './Register'

    // console.log(Vue);
    export default {
        name: "Nav",
        data(){
            return {
                routerList:['Home','Blog','Message','Daily','Links','About'],
                alertKey: 0
            }
        },
        computed:{
            whichActive(){
                let index = this.routerList.indexOf(this.$route.name)
                return index + 1
            }
        },
        components:{
          Register
        },
        methods:{
            handlerRegister(){
                const h = this.$createElement;
                this.$msgbox({
                    title: '注册',
                    message: h('Register', {key: this.alertKey++}),
                    showCancelButton: false,
                    showConfirmButton: false,
                    closeOnClickModal: false,
                })
                    .then(()=>{
                    })
                    .catch(()=>{
                    })
            }
        }

    }
</script>

<style lang="less" scoped>
    #nav{
        overflow:hidden;
        >.nav-main{
            display: flex;
            justify-content: space-around;
            max-width:1260px;
            height:60px;
            margin: 0 auto;
            background-color:pink;
            .logo{
                width:80px;
                line-height: 60px;
                color:#777;
                font-family:BarbaraHand;
                font-size: 40px;
            }
            .login{
                line-height: 60px;
            }
            .n-nav{
                width:580px;
                ul{
                    display:flex;
                    width:100%;
                    height:100%;
                    margin: 0;
                    padding: 0;
                    li{
                        flex:1;
                        list-style-type: none;

                    }
                    a{
                        display:block;
                        position:relative;
                        line-height: 60px;
                        color:#212220;
                        text-decoration: none;
                        transition: 0.3s;
                        &::after{
                            position: absolute;
                            bottom:0;
                            left:0;
                            right:0;
                            margin: 0 auto;
                            content:'';
                            width:0px;
                            height:2px;
                            background-color:#6bc30d;

                        }
                        &:hover {
                            color:#6bc30d;
                            &::after{
                                transition: 0.3s;
                                width: 100%;
                            }

                        }
                    }
                    &.list1 li:nth-child(1),
                    &.list2 li:nth-child(2),
                    &.list3 li:nth-child(3),
                    &.list4 li:nth-child(4),
                    &.list5 li:nth-child(5),
                    &.list6 li:nth-child(6){
                        a{
                            color:green;
                            &::after{
                                width:100%;
                            }
                        }
                    }

                }
            }

        }
    }

</style>