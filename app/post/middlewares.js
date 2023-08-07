const validatePost = (req, res, next) => {
    let errors = {};

    if (!req.body.description || req.body.description.length === 0)
        errors.description = "Поле Описание обязательное"    

    if (JSON.stringify(errors) !== JSON.stringify({})) res.status(400).send(errors)
    else next()
}

module.exports = {validatePost}