const app = require('./src/app.js');
const mongoose = require('mongoose');
const seed = require('./src/seeds/seed.js');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    if (process.env.NODE_ENV === 'development') {
      await seed();
    }

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
