const { DataTypes } = require('sequelize');
const sequelize = require('../include/dbconnect');

const Category = sequelize.define(
  'Category',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    maincat: DataTypes.INTEGER,
    image: DataTypes.STRING,
    status: DataTypes.INTEGER,
  },
  { tableName: 'category', timestamps: false }
);

module.exports = Category;
