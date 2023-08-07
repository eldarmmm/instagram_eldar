const { DataTypes } =  require('sequelize');
const sequelize = require('../../config/db');

const User = sequelize.define('User', {
    fullName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    login:
    {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},
{
    timestamps: false,
});

module.exports = User