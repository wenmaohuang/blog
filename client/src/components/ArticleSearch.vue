<template>
    <div @click.stop="handleBlurSearchTitle" class="search-main">
        <input
            type="text"
            v-model="word"
            @input="handleSearch"
            @keyup.delete="handleDelete"
            @click.stop="handleSeachTitle"
            placeholder="请输入搜索内容"
        />
        <i class="el-icon-search"></i>
        <div class="search-title">
            <ul>
                <router-link
                    v-for="(item,index) in searchArr"
                    :key="index"
                    class="img"
                    to="/content"
                >
                    <li @click="handleClick(item)">{{item}}</li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
import request from "../../api/index";
let getTitle = request.getArticleTitle;

export default {
    data() {
        return {
            word:'',
            searchArr: []
        };
    },
    methods: {
        handleSeachTitle() {
            this.articleList.forEach(item => {
                // console.log('a..');
                if (this.searchArr.length < this.articleList.length) {
                    this.searchArr.push(item.title);
                }
            });
        },
        handleBlurSearchTitle() {
            this.searchArr = [];
        },
        handleSearch() {
            this.searchArr = [];
            this.articleList.forEach(item => {
                if (this.word) {
                    this.reg = new RegExp("^" + this.word);
                    this.searchTitle = item.title.match(this.reg);
                    if (this.searchTitle !== null) {
                        this.searchTitleInput = this.searchTitle["input"];
                        this.searchArr.push(this.searchTitleInput);
                    }
                }
                // if (this.word === "") {

                // }
            });
        },
        handleClick(item) {
            // console.log(item, "a)");
            this.articleList.forEach(i => {
                if (i.title === item) {
                    this.$store.state.article = i;
                    // console.log(i, "a*");
                }
            });
            // console.log(this.$store.state.article, item, "a=");
        },
        handleDelete() {
            if (this.word === "") {
                this.articleList.forEach(item => {
                    if (this.searchArr.length < this.articleList.length) {
                        this.searchArr.push(item.title);
                    }
                });
            }
        }
    },
    mounted() {
        getTitle()
            .then(res => {
                console.log(res, "a&");
                this.articleList = res.data.data;
            })
            .catch(() => {
                console.log("error occur");
            });
    }
};
</script>

<style lang='less' scoped>
.search-main {
    position: relative;
    z-index: 10;
    height: 40px;
    padding: 20px;
    background-color: grey;

    input {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        border: 0;
        outline: 0;
        text-indent: 2em;
    }

    i {
        position: absolute;
        font-size: 18px;
        line-height: 20;
        cursor: pointer;

        &::before {
            position: relative;
            top: -160px;
            left: -30px;
        }
    }
    .search-title {
        position: absolute;
        top: 80px;
        background-color: #789;
        border-radius: 10px;
        ul {
            margin: 10px;
            margin-block-start: 0;
            margin-block-end: 0;

            li {
                padding: 5px;
                font-size: 16px;
                color: #fff;
            }
        }
    }
}

</style>