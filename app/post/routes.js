const express = require('express')
const router = express.Router();
const {createPost, getMyPosts, getPost} = require('./controller')
const passport = require('passport');
const {validatePost} = require('./middlewares')

router.post('/api/post', passport.authenticate('jwt', {session: false}),validatePost ,createPost) 
router.get('/api/post', passport.authenticate('jwt', {session: false}), getMyPosts) 
router.get('/api/post/:id', passport.authenticate('jwt', {session: false}), getPost) 

module.exports = router;

