const { DataTypes } = require('sequelize');
const sequelize = require('../include/dbconnect');

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
      title: DataTypes.STRING,
      brand_id: DataTypes.INTEGER,
      price: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      image2: DataTypes.STRING,
      status: DataTypes.INTEGER,
      maincat:DataTypes.STRING,
  },
  { tableName: 'products', timestamps: false }
);

module.exports = Product;
