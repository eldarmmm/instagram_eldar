const { DataTypes } =  require('sequelize');
const sequelize = require('../../config/db');
const Post = require('../post/Post')

const Comment = sequelize.define('Comment', {
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
{
    timestamps: false,
}
);

Comment.belongsTo(Post, {foreignKey: 'postId'});

module.exports = Comment;