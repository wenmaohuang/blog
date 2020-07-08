<template>
    <div class="search">
        <div class="input">
            <input type="text" v-model="word" @input="fn" @keyup.enter="handleClick"/>
            <button @click="handleClick" >搜索</button>
        </div>
        <ul>
            <li v-for="(item,index) in jsonArr" :key="index">
                <a :href="'https://www.baidu.com/s?wd='+item" target="_blank">{{item}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Search",
    methods: {
        fn() {
            fetch("http://www.fyyd.vip:3002/search?word=" + this.word)
                .then(res => res.json())
                .then(msg => {

                    console.log(msg, "ggg");
                    console.log(this.word,'kkk');
                    this.jsonArr = msg;
                });
        },
        handleClick() {
            console.log(111);
                    console.log(this.word, "hhh");

                    window.location.href="https://www.baidu.com/s?wd=" + this.word

        }
    },
    data() {
        return {
            jsonArr: [],
            word: ""
        };
    }
};
</script>

<style scoped lang='less'>
.search {
    position: absolute;
    top:150px;
    .input{
    display: flex;

        input {
        height: 50px;
        width: 400px;
        font-size: 20px;
        border-width: 0;
        border-radius: 10px 0 0 10px;
        text-indent: 0.5em;
    }
    button {
        height: 50px;
        font-size: 20px;
        border-width: 0;
        width: 80px;
        border-radius: 0 10px 10px 0;
    }
    }
    ul {
        margin-top:20px;
        // padding:20px 10px;

        border-radius: 10px;
        background-color: #fff;
        // position: relative;
        li {
            padding: 8px;
            // padding: 10px 0;
            font-size: 16px;
        }
    }
}
/* #wrap{
        width: 400px;
        margin: 50px auto;
        font-family: "Microsoft YaHei";
    }
    #wrap input{
        width: 396px;
        height: 40px;
        text-indent: 1em;
        font-size: 18px;
    }
    #wrap ul li a{
        display: block;
        width: 100%;
        height: 25px;
        line-height: 25px;
        text-decoration: none;
        font-size: 12px;
        text-indent: 1em;
        color: #333;
        transition: background-color .3s;
    }
    #wrap ul li:nth-child(odd) a{
        background-color: rgba(238, 238, 238, 0.99);
    }
    #wrap ul li:nth-child(even) a{
        background-color: #e8e8e8;
    }
    #wrap ul li:hover a{
        background-color: #aaa;
    } */
</style>