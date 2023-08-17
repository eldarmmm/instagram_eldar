const Post = require('./Post')
const Comment = require('./Comment')

const createPost = async(req, res) => {

    const post = await Post.create({
        description: req.body.description,
        likes: req.body.likes,
        reposts: req.body.reposts,
        countryId: req.body.countryId,
        location: req.body.location,
        commentId: req.body.commentId,
        userId: req.body.userId,
        mediaId: req.body.mediaId
    })

    res.status(200).send(post);

    if (req.body.Comments && req.body.Comments.length > 0) {
        post.Comments = [];
        req.body.Comments.forEach(async comment => {
            const newComment = await Comment.create({
                postId: post.id,
                comment_text: comment.comment_text,
                likes: comment.likes,
                date: comment.date
            })
            post.Comments.push(newComment)
        })
    }

} 

module.exports = {
    createPost
}