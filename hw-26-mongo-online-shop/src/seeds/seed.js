const Product = require('../models/product.model.js');
const Category = require('../models/category.model.js');
const Order = require('../models/order.model.js');

const seed = async () => {
  try {
    await Promise.all([
      Product.deleteMany({}),
      Category.deleteMany({}),
      Order.deleteMany({}),
    ]);

    const categories = await Category.insertMany([
      { name: 'Smartphones' },
      { name: 'Laptops' },
      { name: 'Accessories' },
    ]);

    const products = await Product.insertMany([
      { name: 'iPhone 17', price: 1199, stock: 10, category: categories[0].name },
      { name: 'MacBook Pro', price: 2399, stock: 5, category: categories[1].name },
      { name: 'USB-C Cable', price: 19, stock: 100, category: categories[2].name },
    ]);

    const order1Items = [
      { product: products[0], quantity: 1 },
      { product: products[2], quantity: 3 },
    ];
    const order1Total = order1Items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const order2Items = [
      { product: products[1], quantity: 2 },
    ];
    const order2Total = order2Items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    await Order.insertMany([
      {
        products: order1Items.map(i => ({
          product: i.product._id,
          quantity: i.quantity,
        })),
        total: order1Total,
      },
      {
        products: order2Items.map(i => ({
          product: i.product._id,
          quantity: i.quantity,
        })),
        total: order2Total,
      },
    ]);

    console.log('DB seeded successfully!');
  } catch (err) {
    console.error('Error seeding DB!', err);
  }
};

module.exports = seed;
