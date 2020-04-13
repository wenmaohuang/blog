const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/main.js',
    output:{
        path: __dirname + '/dist',
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:"/\.js$/",

                exclude:"/node_modules",
                loader:"babel-loader"
            }
        ]
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title:'blog',
            template: './public/index.html'
        }),
    ]
}

