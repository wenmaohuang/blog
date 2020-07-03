<template>
    <div class="child-edit" v-show="isShow">
        <textarea :id="commentIndex" style="display:none"></textarea>
        <button type="button" @click="handleClick" class="layui-btn">提交</button>
    </div>
</template>
    <script src="/static/layui/layui.js"></script>

<script>
export default {
    name: "RichText",
    data() {
        return {
            layedit: null,
            index: 1,
            layui: "",
            commentIndex: "",
            isShow: false
        };
    },
    computed: {},
    watch: {
        commentIndex() {}
    },
    methods: {
        handleClick() {
            this.$emit("Child", this.layedit.getContent(this.index));
        },
        childReply(index) {
            this.commentIndex = "childedit" + index;

            // console.log(this.changeIsTrue(), "kk");

            this.changeIsShow();
        },
        changeIsTrue() {
            this.isTrue = !this.isTrue;
            return this.isTrue;
        },
        changeIsShow() {
            this.isShow = !this.isShow;
            // return this.isShow;
        }
    },
    props: {
        childIndex: {
            type: Number
        }
    },

    mounted() {},
    updated() {
        layui.use("layedit", () => {
            this.layedit = layui.layedit;
            this.index = this.layedit.build(this.commentIndex, {
                tool: ["face"],
                height: 80
            }); //建立编辑器
        });
    }
};
</script>

<style lang='less'>
.layui-layedit {
    border-color: transparent;
}

.child-edit {
    // width:100%
}
</style>
<style lang="less">
@media only screen and (max-width: 500px) {
    .layui-layer {
        left: 0 !important;
    }
}
</style>