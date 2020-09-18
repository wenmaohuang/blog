<template>
  <div class="dialogLogin">
    <el-button type="text" @click="dialogFormVisible = true;handleFocus()" @open="hanldeOpen()">登录</el-button>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible" append-to-body="true" @keyup.native.enter="handleLogin()">


      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="用户名" prop="user">
          <el-input ref="autoFocus" v-model="form.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
          <el-input v-model="form.pwd" show-password></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false;handleLogin()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import request from "../../api/index";

const postLogin = request.postLogin;


export default {
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,

      formLabelWidth: "120px",

      form: {
        user: "",
        pwd: "",
      }, //表单验证
      rules: {
        //用户名验证
        user: [{
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        }, {
          //数据类型
          type: "string", //正则规则
          // pattern: /^[\w\u4e00-\u9fa5\uac00-\ud7ff\u0800-\u4e00\-]{2,7}$/,
          message: "请输入正确格式用户名",
          trigger: ["blur", "change"],
        },],

        //密码验证
        pwd: {
          type: "string",
          validator: (rule, value, cb) => {
            if (value) {
              //验证密码是否符合规则
              if (/^[\w<>,.?|;':"{}!@#$%^&*()\-\\]{6,18}$/.test(value)) {
                cb();
              } else {
                cb(new Error("请输入正确格式密码"));
              }
            } else {
              cb(new Error("请输入密码"));
            }

            //在这里还需要触发确认密码的验证
            this.form.checkPwd && this.$refs.form.validateField("checkPwd");
          },
          required: true,
          trigger: ["blur", "change"],
        },
      },
    };
  },
  methods: {
    handleFocus() {
      // console.log(this.$refs, "[]");
      this.$nextTick(function () {
        this.$refs.autoFocus.focus();
      });
    },

    handleLogin() {
      this.$refs["form"].validate((valid) => {
        console.log(valid,'hg');
        if (valid) {
          postLogin(this.form)
              .then((res) => {
                console.log(res.dada, 'jh');
                if (res.data.code) {
                  this.$message({
                    message: res.data.msg,
                    type: "error",
                    duration: 2000,
                  });
                } else {
                  this.$message({
                    message: res.data.msg,
                    type: "success",
                    duration: 2000,
                  });
                  // done();
                  setTimeout(() => {
                    window.location.reload();
                  });
                }
              })
              .catch(() => {
                this.$message({
                  message: "登录失败,稍后再试",
                  type: "error",
                  duration: 2000,
                });
              });
        } else {
          return false;
        }
      });
    },
  },
  mounted() {

  },
};
</script>

<style lang='less'>
.dialogLogin {
  .el-button {
    font-size: 20px;
  }

  // position: absolute;
  // z-index: 2500;
  .el-form {
    user-select: none;
    padding-right: 30px;

    .vcode {
      .el-input {
        float: left;
        width: 35%;
      }

      div.svg {
        float: left;
        width: 35%;
        height: 40px;

        /deep/ svg {
          width: 100% !important;
          height: 100% !important;
        }
      }

      .el-link {
        font-size: 12px;
      }
    }
  }

}
</style>
<style lang="less">
.el-dialog__wrapper {
  .el-dialog {
    width: 450px;
  }

  @media only screen and (max-width: 500px) {
    .el-dialog {
      width: 95%;
    }
  }
}
</style>