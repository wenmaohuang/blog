var express = require('express');
var router = express.Router();


/*文章相关的接口*/
router.use('/article',require('./article/index'))
router.use('/articlemessage',require('./articlemessage/index'))

// 注册相关接口
router.use('/register',require('./register/index'))

router.use('/login',require('./login/index'))

router.use('/upload',require('./upload/index'))
router.use('/message',require('./message/index'))
router.use('/daily',require('./daily/index.js'))

module.exports = router;
