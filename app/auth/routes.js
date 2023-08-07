const express = require('express')
const router = express.Router();
const {sendmail, verifyCode} = require('./controllers')

router.post('/api/auth/sendmail', sendmail)
router.post('/api/auth/verifycode', verifyCode)
 
module.exports = router;

