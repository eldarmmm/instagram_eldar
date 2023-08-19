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

const getMyPosts = async(req, res) => {
    const posts = await Post.findAll({where: {userId: req.user.id}});
    res.status(200).send(posts)
}

const getPost = async(req, res) => {
    const post = await Post.findByPk(req.params.id);
    res.status(200).send(post)
}

const deletePost = async(req, res) => {

    const data = await Post.destroy({where: {id: req.params.id}})
    
    res.status(200).end()
}

const editPost = async(req, res) => {
    await Post.update({
        description: req.body.description,
        likes: req.body.likes,
        comments: req.body.comments,
        reposts: req.body.reposts,
        countryId: req.body.countryId,
        location: req.body.location,
        userId: req.body.userId,
        mediaId: req.body.mediaId
    }, {where: {
        id: req.body.id
    }})
    res.status(200).end()
}

module.exports = {
    createPost,
    getMyPosts,
    getPost,
    deletePost,
    editPost
}