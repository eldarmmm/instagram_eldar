const Post = require('./Post')

const validatePost = (req, res, next) => {
    let errors = {};

    if (!req.body.description || req.body.description.length === 0)
        errors.description = "Поле Описание обязательное"    

    if (JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

const isPostAuthor = async(req, res, next) => {
    const id = req.params.id || req.body.id

    const post = await Post.findByPk(id)
    if (post && req.user.id === post.userId) next();
    else res.status(403).send({message: "Access denied"})

}

module.exports = {validatePost, isPostAuthor}