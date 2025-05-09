const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    if (process.env.NODE_ENV === 'test') return;

    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
