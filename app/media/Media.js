const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const Media = sequelize.define('Media', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data: {
    type: DataTypes.BLOB,
    allowNull: false,
  },
  mimeType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // You can add more properties as needed, such as title, description, etc.
}, {
  timestamps: false,
});

module.exports = Media;
