const { DataTypes } = require('sequelize');
const sequelize = require('../include/dbconnect');

const Brand = sequelize.define(
  'Brand',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brandname: DataTypes.STRING,
    image: DataTypes.STRING,
    status: DataTypes.INTEGER,
  },
  { tableName: 'brand', timestamps: false }
);

module.exports = Brand;
