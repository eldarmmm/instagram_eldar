const { DataTypes } =  require('sequelize');
const sequelize = require('../../config/db');
const Country = require('../region/Country')
const City = require('../region/City')
const User = require('../auth/User')
const Media = require('../media/Media')
const Comment = require('./Comment')

const Post = sequelize.define('Post', {
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    reposts: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
},
{
    timestamps: false,
}
);

Post.belongsTo(Country, {foreignKey: 'countryId'}); 
Post.belongsTo(City, {foreignKey: 'location'});
Post.belongsTo(User, {foreignKey: 'userId'});
Post.belongsTo(Media, {foreignKey: 'mediaId'});
Post.hasMany(Comment, {foreignKey: 'commentId'});


module.exports = Post;