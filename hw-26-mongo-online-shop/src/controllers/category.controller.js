const Category = require('../models/category.model.js');

exports.createCategory = async (req, res, next) => {
  try {
    const category = new Category(req.body);
    const saved = await category.save();

    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

exports.getAllCategories = async (_req, res, next) => {
  try {
    const category = await Category.find();

    res.json(category);
  } catch (err) {
    next(err);
  }
};