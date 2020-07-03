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
            <el-form-item label="验证码" class="vcode" prop="svgcode">
                <el-input v-model="form.svgcode"></el-input>
                <div class="svg" v-html="register.svgText"></div>
                <el-link
                    :underline="false"
                    type="primary"
                    :disabled="register.disabled"
                    class="refresh"
                    @click="getVcode"
                >{{register.refreshText}}</el-link>
                <!-- <div class="refresh" @click="getVcode">刷新</div> -->
            </el-form-item>
            <el-form-item>
                <el-button type="success" @click="submitForm('form')">立即注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import request from "../../api/index";
const getRegisterVCode = request.getRegisterVCode;
const getCheckVcode = request.getCheckVcode;
const postRegister = request.postRegister;

export default {
    name: "Register",
    data() {
        return {
            form: {
                user: "",
                pwd: "",
                checkpwd: "",
                svgcode: ""
            },
            rules: {
                user: [
                    {
                        required: true,
                        message: "请输入用户名",
                        trigger: "blur"
                    },
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
                            if (
                                /^[\w<>,.?|;':"{}!@#$%^&*()\-\\]{6,12}$/.test(
                                    value
                                )
                            ) {
                                cb();
                            } else {
                                cb(new Error("长度在 6 到 12 个字符"));
                            }
                        } else {
                            cb(new Error("请输入密码"));
                        }
                        this.form.checkpwd &&
                            this.$refs.form.validateField("checkpwd");

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
                },
                svgcode: {
                    required: true,
                    validator: (rule, value, cb) => {
                        if (!value) {
                            cb(new Error("请输入验证码!"));
                        } else {
                            getCheckVcode(value)
                                .then(res => {
                                    console.log(res.data.code);

                                    if (res.data.code === 0) {
                                        cb();
                                    } else {
                                        cb(new Error("验证码错误！"));
                                    }
                                })
                                .catch(() => {
                                    cb(new Error("未知错误"));
                                });
                        }
                    },
                    trigger: "blur"
                }
            },
            register: {
                svgText: "loading...",
                refreshText: "刷新",
                disabled: true,
                timer: null
            }
        };
    },

    methods: {
        getVcode() {
            getRegisterVCode()
                .then(res => {
                    // console.log(res);

                    // clearTimeout(this.register.timer);
                    // console.log(this.register, 11);
                    // console.log(res.data, 22);
                    // console.log(new Date(), 33);
                    let t = 60000;
                    let fn = () => {
                        t -= 1000;
                        if (t < 0) {
                            clearTimeout(this.register.timer);
                            this.register.disabled = false;
                            this.register.refreshText = "刷新";
                            t = 60000;
                        } else {
                            this.register.disabled = true;
                            this.register.refreshText =
                                // (((res.data.time - t) / 1000) | 0) + "s后刷新";
                                t / 1000 + "s后刷新";
                        }
                    };
                    this.register.timer = setInterval(fn, 1000);
                    fn();
                    this.register.svgText = res.data.data;

                    // console.log(res.data.data)
                    //更新图片
                })
                .catch(e => {
                    console.log(e);
                });
        },

        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    // alert('submit!');
                    postRegister(this.form)
                        .then(res => {
                            console.log(res);

                            setTimeout(
                              location.reload()
                              , 1000);
                        })
                        .catch(e => {
                            console.log(e);
                        });
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
        // resetForm(formName) {
        //   this.$refs[formName].resetFields();
        // }
    },
    mounted() {
        this.getVcode();
    },
    destroyed() {
        clearTimeout(this.register.timer);
    }
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
                margin-left: 10px;
                width: 100px;
                /deep/ svg {
                    width: 100%;
                    height: 100%;
                }
            }
            .refresh {
                user-select: none;
                float: left;
                margin-left: 10px;
                color: blue;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>