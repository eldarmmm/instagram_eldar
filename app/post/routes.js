const express = require('express')
const router = express.Router();
const {createPost, getMyPosts, getPost, deletePost, editPost} = require('./controller')
const passport = require('passport');
const {validatePost, isPostAuthor} = require('./middlewares')

router.post('/api/post', passport.authenticate('jwt', {session: false}),validatePost ,createPost) 
router.get('/api/post', passport.authenticate('jwt', {session: false}), getMyPosts) 
router.get('/api/post/:id', passport.authenticate('jwt', {session: false}), getPost) 
router.delete('/api/post/:id', passport.authenticate('jwt', {session: false}), isPostAuthor, deletePost)
router.put('/api/post', passport.authenticate('jwt', {session: false}), isPostAuthor, validatePost, editPost) 

module.exports = router;

