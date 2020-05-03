var express = require('express');
var router = express.Router();


/*文章相关的接口*/
router.use('/article',require('./article/index'))

// 注册相关接口
router.use('/register',require('./register/index'))

router.use('/login',require('./login/index'))


module.exports = router;