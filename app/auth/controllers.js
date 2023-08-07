const sendEmail = require('../utils/sendmail')
const AuthCode = require('./AuthCode')
const User = require('./User')
const jwt = require('jsonwebtoken')
const { jwtOptions } = require('./passport')


const sendmail = (req, res) => {
    console.log(req.body);
    const code = "INST" + Date.now()

    AuthCode.create({
        email: req.body.email,
        code: code,
        valid_till: Date.now() + 1200,
    })

    sendEmail(req.body.email, "Auth code instagram.com", code)
    res.status(200).end();
}

const verifyCode = async (req, res) => {
    console.log(req.body);

    const authcode = await AuthCode.findOne({
        where: {email: req.body.email},
        order: [['valid_till', 'DESC']]
    })

    if (!authcode) {
        res.status(401).send({error: "Not found"})
    } else if (!new Date(authcode.valid_till).getTime() > Date.now()) {
        res.status(401).send({error: "Not found"})
    } else if (authcode.code !== req.body.code) {
        res.status(401).send({error: "Not found"})
    } else {


        let user = await User.findOne({
            where: {email: req.body.email}});

        if (!user) {
            user = await User.create({
                email: req.body.email,
            })
        }
    
        const expiresIn = 3600

        const token = jwt.sign({
            id: user.id, 
            email: user.email,
            }, 
            jwtOptions.secretOrKey, { expiresIn });
      res.status(200).send(token);

    }
}

module.exports = {sendmail, verifyCode}