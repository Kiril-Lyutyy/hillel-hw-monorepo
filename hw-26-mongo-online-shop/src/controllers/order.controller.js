const Order = require('../models/order.model.js');
const Product = require('../models/product.model.js');

exports.createOrder = async (req, res) => {
  try {
    const { products } = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: 'Order must contain at least one product.' });
    }

    let total = 0;

    for (const item of products) {
      if (!item.quantity || item.quantity < 1) {
        return res.status(400).json({ message: 'Each product must have quantity >= 1' });
      }

      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(404).json({ message: `Product not found: ${item.product}` });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({ message: `Insufficient stock for product: ${product.name}` });
      }

      product.stock -= item.quantity;
      product.sold += item.quantity;
      await product.save();

      total += product.price * item.quantity;
    }

    const order = new Order({
      products,
      total,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ message: 'Internal server error.' });
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
