<template>
    <div class="register">
        <h3>register</h3>
        <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="form">
            <el-form-item label="用户名" prop="user">
                <el-input v-model="form.user"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.pwd" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码">
                <el-input v-model="form.checkpwd" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="success">立即注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

    export default {
        name: "Register",
        data(){
           return{
               form:{
                   user:'',
                   pwd:'',
                   checkpwd:''
               },
               rules:{
                    user:[
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                        {type:"string", min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                    ],

               }
           }
        }
    }
</script>

<style lang="less" scoped>
    .register{
        /*background-color: #555;*/
        el-form{
            /*background-color: #aaa;*/
            
        }
    }

</style>