const User = require('../models/user.model.js');
const Order = require('../models/order.model.js');

exports.getOrderCount = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const count = await Order.countDocuments({ userId: user._id });
  res.json({ count });
};