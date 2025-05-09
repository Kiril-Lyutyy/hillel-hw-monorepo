const User = require('../models/user.model.js');

async function getUserById(id) {
  const user = await User.findById(id);
  if (!user) throw new Error('User not found');
  return user;
}

module.exports = { getUserById };