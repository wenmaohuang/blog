// var express = require('express')
// var router = express.Router()
// const request = require('request')
// router.get("/", (req, res) => {
//     let { word } = req.query;
//     if (word) {
//         request.get(
//             'https://www.baidu.com/sugrec?prod=pc&wd=' + encodeURI(word) + '&cb=lyj'
//             , (err, a, body) => {
//                 if (err) {
//                     res.send([]);
//                     return;
//                 }
//                 let str = body.match(/^[\da-z_]+\((.+)\)$/i)[1];
//                 str = JSON.parse(str);
//                 // str = JSON.stringify(str);
//                 if (str.g) {
//                     res.send(
//                         str.g.map(item => item.q)
//                     );
//                 } else {
//                     res.send([]);
//                 }
//             }
//         );
//     } else {
//         res.send([]);
//     }
// });

// module.exports = router
