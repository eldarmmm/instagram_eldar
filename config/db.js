const { Sequelize } = require('sequelize');
const dbconfig = require('./config')

const sequelize = new Sequelize(
    dbconfig.development.database, 
    dbconfig.development.username, 
    dbconfig.development.password, {
        host: dbconfig.development.host,
        dialect: dbconfig.development.dialect,
    }
)

sequelize
    .authenticate()
    .then(() => {
        console.log('Success');
    })
    .catch((error) => {
        console.error('unable to connect to the database:', error);
    });

    module.exports = sequelize;