const { DataTypes } = require('sequelize');
const sequelize = require('../include/dbconnect');

const ProductVariant = sequelize.define(
  'Variant',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
      vname: DataTypes.STRING,
      vlist: DataTypes.STRING,
  },
  { tableName: 'product_varient', timestamps: false }
);

module.exports = ProductVariant;
