const Post = require('./Post')

const createPost = async(req, res) => {

    const post = await Post.create({
        description: req.body.description,
        likes: req.body.likes,
        comments: req.body.comments,
        reposts: req.body.reposts,
        countryId: req.body.countryId,
        location: req.body.location,
        userId: req.body.userId,
        mediaId: req.body.mediaId
    })

    res.status(200).send(post);

} 

module.exports = {
    createPost
}