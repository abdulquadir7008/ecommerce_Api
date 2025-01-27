const sequelize = require('../include/dbconnect');
const Product = require('./Product');
const Category = require('./Category');
const Brand = require('./Brand');

// Define relationships
Product.belongsTo(Category, { foreignKey: 'category_id' });
Product.belongsTo(Brand, { foreignKey: 'brand_id' });
Category.hasMany(Product, { foreignKey: 'category_id' });
Brand.hasMany(Product, { foreignKey: 'brand_id' });

module.exports = {
  sequelize,
  Product,
  Category,
  Brand,
};
