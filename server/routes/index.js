var express = require('express');
var router = express.Router();


/*文章相关的接口*/
router.use('/blog/article',require('./article/index'))
router.use('/blog/articlemessage',require('./articlemessage/index'))

// 注册相关接口
router.use('/blog/register',require('./register/index'))

router.use('/blog/login',require('./login/index'))

router.use('/blog/upload',require('./upload/index'))
router.use('/blog/message',require('./message/index'))
router.use('/blog/daily',require('./daily/index.js'))
router.use('/blog/home',require('./home/index.js'))
router.use('/blog/visitor',require('./visitor/index.js'))
// router.use('/search',require('./search/index.js'))


router.use('/blog/chat',require('./chat/index.js'))

// router.use('/search',require('./search/ArticleSend.jsx'))

module.exports = router;
