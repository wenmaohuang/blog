<template>
  <div class="register">
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
      <el-form-item label="验证码" prop="vcode" class="vcode">
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
import request from '../api/index'
const getRegisterVCode = request.getRegisterVCode

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
          validator: (rule, value, cb) => {
            if (value) {
              if (/^[\w<>,.?|;':"{}!@#$%^&*()\-\\]{6,12}$/.test(value)) {
                cb();
              } else {
                cb(new Error("长度在 6 到 12 个字符"));
              }
            } else {
              cb(new Error("请输入密码"));
            }
            this.form.checkpwd && this.$refs.form.validateField("checkpwd");

            console.log(this.form.checkpwd);
          },
          required: true,
          trigger: ["blur", "change"]
        },
        checkpwd: {
          required: true,
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
          trigger: ["blur", "change"]
        }
      }
    };
  },
  mounted() {
    getRegisterVCode().then(res=>{
      console.log(res)
    }).catch(e=>{
      console.log(e)
    })
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.register {
  .form {
    .vcode {
      
      .el-input {
        float: left;
        width: 30%;
      }
      .svg {
        float: left;
        margin-left: 20px;
      }
      .refresh{
        user-select: none;
        float: left;
        margin-left: 20px;
        color:blue;
        cursor: pointer;
        &:hover{
        text-decoration: underline;
      }
      }
      
    }
  }
}
</style>