// const HtmlWebpackPlugin = require('html-webpack-plugin')
// module.exports = {
//     entry:'./src/main.js',
//     output:{
//         path: __dirname + '/dist',
//         filename:'[name].js'
//     },
//     module:{
//         rules:[
//             {
//                 test:"/\.js$/",
//
//                 exclude:"/node_modules",
//                 loader:"babel-loader"
//             }
//         ]
//     },
//     resolve:{
//         alias:{
//             'vue$':'vue/dist/vue.esm.js'
//         }
//     },
//     devServer: {
//         open: true,
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title:'blog',
//             template: './public/index.html'
//         }),
//     ]
// }
//



// module.exports = {
//     //webpack配置
// 	configureWebpack: {
// 	    //关闭 webpack 的性能提示
// 	    //或者
 
// 	    //警告 webpack 的性能提示
// 	    performance: {
// 	    	hints:'warning',
// 	    	//入口起点的最大体积
// 	    	maxEntrypointSize: 50000000,
// 	    	//生成文件的最大体积
// 	    	maxAssetSize: 30000000,
// 	    	//只给出 js 文件的性能提示
// 	    	assetFilter: function(assetFilename) {
// 	    		return assetFilename.endsWith('.js');
// 	    	}
// 	    }
//     }
// }