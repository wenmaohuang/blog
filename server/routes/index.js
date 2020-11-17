var express = require('express');
var router = express.Router();


/*文章相关的接口*/
// router.use('/blog/article',require('./article/index'))
// router.use('/blog/articlemessage',require('./articlemessage/index'))
// router.use('/blog/register',require('./register/index'))
// router.use('/blog/login',require('./login/index'))
// router.use('/blog/upload',require('./upload/index'))
// router.use('/blog/message',require('./message/index'))
// router.use('/blog/daily',require('./daily/index.js'))
// router.use('/blog/home',require('./home/index.js'))
// router.use('/blog/visitor',require('./visitor/index.js'))
// router.use('/blog/chat',require('./chat/index.js'))


router.use('/article',require('./article/index'))
router.use('/articlemessage',require('./articlemessage/index'))
router.use('/register',require('./register/index'))
router.use('/login',require('./login/index'))
router.use('/upload',require('./upload/index'))
router.use('/message',require('./message/index'))
router.use('/daily',require('./daily/index.js'))
router.use('/home',require('./home/index.js'))
router.use('/visitor',require('./visitor/index.js'))
router.use('/chat',require('./chat/index.js'))

module.exports = router;
