<template>
    <div class="search">
        <div class="input">
            <input
                type="text"
                v-model="word"
                @input="fn"
                @keyup.enter="handleClick"
                @focus="handleFocus"
                ref="autoFocus"
            />
            <button @click="handleClick">搜索</button>
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
            fetch("https://test.fyyd.vip:3102/search?word=" + this.word)
            // fetch("http://localhost:3002/search?word=" + this.word)
                .then(res => res.json())
                .then(msg => {
                    // console.log(msg, "ggg");
                    // console.log(this.word,'kkk');
                    this.jsonArr = msg;
                    console.log(this.jsonArr,'e1');
                });
        },
        // fnSpace() {
        //     // fetch("https://test.fyyd.vip:3102/search?word=" + this.word)
        //     fetch("http://localhost:3002/search?word=" + this.word)
        //         .then(res => res.json())
        //         .then(msg => {
        //             // console.log(msg, "ggg");
        //             console.log(msg, "kkk");
        //             this.jsonArr = msg;
        //         });
        // },
        handleClick() {
            // console.log(111);
            // console.log(this.word, "hhh");
            // this.wordList.push(this.word);

            function setStore(data) {
                const list = JSON.parse(localStorage.getItem("list")) || [];
                list.push(data);
                if (list.length > 8) {
                    list.shift();
                }
                localStorage.setItem("list", JSON.stringify(list));
            }
            setStore(this.word);

            window.location.href = "https://www.baidu.com/s?wd=" + this.word;
            // localStorage.setItem("hisData", this.wordList);
        },
        handleFocus(){
            this.jsonArr = JSON.parse(localStorage.getItem("list"))
            console.log(this.jsonArr,'d1');
        }
    },
    data() {
        return {
            jsonArr: [],
            word: "",
            // hisData:[],
            wordList: []
        };
    },
    mounted() {
        console.log(localStorage, "aa");
        this.$refs.autoFocus.focus();
    }
};
</script>

<style scoped lang='less'>
.search {
    position: absolute;
    top: 150px;
    .input {
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
        margin-top: 20px;
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
@media only screen and (max-width: 500px) {
    .search {
        .input {
            input {
                width: 250px;
            }
        }
    }
}
</style>