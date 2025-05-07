const Order = require('../models/order.model.js');
const Product = require('../models/product.model.js');

exports.createOrder = async (req, res, next) => {
  try {
    const { products } = req.body;

    let total = 0;

    for (const item of products) {
      const product = await Product.findById(item.product);

      if (!product || product.stock < item.quantity) {
        return res.status(400).json({ message: 'Insufficient stock or product not found' });
      }

      total += product.price * item.quantity;
      product.stock -= item.quantity;
      await product.save();
    }

    const order = await Order.create({ products, total });
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

exports.getAllOrders = async (_req, res, next) => {
  try {
    const orders = await Order.find().populate('products.product');

    res.json(orders);
  } catch (err) {
    next(err);
  }
};

exports.getTotalRevenue = async (_req, res, next) => {
  try {
    const result = await Order.aggregate([
      { $group: { _id: null, totalRevenue: { $sum: "$total" } } }
    ]);

    res.json({ totalRevenue: result[0]?.totalRevenue || 0 });
  } catch (err) {
    next(err);
  }
};

exports.getTopProducts = async (_req, res, next) => {
  try {
    const top = await Order.aggregate([
      { $unwind: "$products" },
      { $group: {
        _id: "$products.product",
        totalSold: { $sum: "$products.quantity" }
      }},
      { $sort: { totalSold: -1 } },
      { $limit: 3 },
      {
        $lookup: {
          from: "products",
          localField: "_id",
          foreignField: "_id",
          as: "product"
        }
      },
      { $unwind: "$product" }
    ]);

    res.json(top);
  } catch (err) {
    next(err);
  }
};
