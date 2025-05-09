const User = require('../models/user.model.js');
const Order = require('../models/order.model.js');

const getUserById = async (id) => {
  const user = await User.findById(id);
  if (!user) throw new Error('User not found');
  return user;
}


const getOrderCountByUserId = async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const count = await Order.countDocuments({ userId: user._id });
  res.json({ count });
};

module.exports = { getUserById, getOrderCountByUserId };