const express = require('express')
const logger = require('morgan')

const app = express();

app.use(logger('dev'))
app.use(express.urlencoded())
app.use(express.json())

app.use(require('./app/auth/routes'))
app.use(require('./app/post/routes'))


PORT = 8000;

app.listen(PORT, () => {
    console.log('Server is listening on port 8000');
})