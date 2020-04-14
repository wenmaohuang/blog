var express = require('express');
var router = express.Router();


/*文章相关的接口*/
// var connection = require('../db/connection/connection')


router.use('/article',require('./article/index'))

module.exports = router;