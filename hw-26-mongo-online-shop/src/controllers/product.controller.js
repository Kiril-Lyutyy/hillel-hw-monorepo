const Product = require('../models/product.model.js');

exports.createProduct = async (req, res, next) => {
  try {
    const product = new Product(req.body);
    const saved = await product.save();

    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

exports.getAllProducts = async (_req, res, next) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getProductsByCategory = async (req, res, next) => {
  try {
    const { category } = req.query;
    const products = await Product.find({
      category: { $regex: new RegExp(`^${category}$`, 'i') }
    });

    res.json(products);
  } catch (err) {
    next(err);
  }
};

exports.getTopProducts = async (_req, res, next) => {
  try {
    const products = await Product.find().sort({ sold: -1 }).limit(3);

    res.json(products);
  } catch (err) {
    next(err);
  }
};
