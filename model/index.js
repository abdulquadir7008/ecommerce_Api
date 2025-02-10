const sequelize = require('../include/dbconnect');
const Product = require('./Product');
const Category = require('./Category');
const Brand = require('./Brand');
const Variant = require('./ProductVariant');

// Define relationships
Product.belongsTo(Category, { foreignKey: 'category_id' });
Product.belongsTo(Brand, { foreignKey: 'brand_id' });
Product.belongsTo(Variant, { foreignKey: 'id' });
Category.hasMany(Product, { foreignKey: 'category_id' });
Brand.hasMany(Product, { foreignKey: 'brand_id' });
Variant.hasMany(Product, { foreignKey: 'id' });


module.exports = {
  sequelize,
  Product,
  Category,
  Brand,
  Variant,
};
