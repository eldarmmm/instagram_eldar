const express = require('express')
const router = express.Router();
const {createPost} = require('./controller')
const passport = require('passport');
const {validatePost} = require('./middlewares')

router.post('/api/post', passport.authenticate('jwt', {session: false}),validatePost ,createPost) 

module.exports = router;

