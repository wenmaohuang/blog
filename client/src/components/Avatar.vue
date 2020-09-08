<template>
  <el-dialog   
      title="头像上传"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="beforeClose"
      :close-on-click-modal="false"
         action="https://www.fyyd.vip/upload/avatar"

  >
    <el-upload
      class="avatar-uploader"
      action="/upload/avatar"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :with-credentials="true"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-dialog>
</template>
<script>
export default {
  data() {
    return {
      imageUrl: "",
      form:{},
      rules:{}
    };
  },
  props:['dialogVisible'],
  methods: {
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        this.$message({
            message:"头像上传成功!",
            type:'sucess',
            duration:2000
        })
        setTimeout(()=>{
            window.location.reload()
        },1000)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    beforeClose(){
        this.$emit("handleClose");
      }
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  position: relative;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  background-color: #aaa;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
