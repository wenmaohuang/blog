<template>
  <div class="register">
    <!-- <h3>register</h3> -->
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" class="form">
      <el-form-item label="用户名" prop="user">
        <el-input v-model="form.user"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="form.pwd" show-password></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkpwd">
        <el-input v-model="form.checkpwd" show-password></el-input>
      </el-form-item>
       <el-form-item label="验证码" prop="vcode">
        <el-input v-model="form.vcode"></el-input>
        <div class="svg">svg</div>
        <div class="refresh">刷新</div>
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
  data() {
    return {
      form: {
        user: "",
        pwd: "",
        checkpwd: ""
      },
      rules: {
        user: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            type: "string",
            min: 3,
            max: 8,
            message: "长度在 3 到 8 个字符",
            trigger: "blur"
          }
        ],
        pwd: {
          type: "string",
          validator:(rule,value,cb)=>{
              if (value) {
                  if (/^[\w<>,.?|;':"{}!@#$%^&*()\-\\]{6,12}$/.test(value)) {
                      cb()
                  } else {
                      cb(new Error("长度在 6 到 12 个字符"))
                  }
              } else {
                cb(new Error("请输入密码"))
              }
              this.form.checkpwd && this.$refs.form.validateField("checkpwd")

              console.log(this.form.checkpwd)
          },
        //   min: 6,
        //   max: 12,
          required: true,
        //   message: "长度在 6 到 12 个字符",
          trigger: ["blur","change"]
        },
        checkpwd: {
          validator: (rule, value, cb) => {
            if (value) {
              if (value === this.form.pwd) {
                cb();
              } else {
                cb(new Error("两次密码不一样"));
              }
            } else {
              cb(new Error("请再次输入密码"));
            }
          },
          trigger: ["blur","change"]

        }
      }
    };
  },
  mounted() {
    // console.log(this,'555')
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.register {
  /*background-color: #555;*/
  el-form {
    /*background-color: #aaa;*/
    .vcode{
      .el-input{
        float:left
        
      }
      div.svg{
        float:left
      }
    }
  }
}
</style>