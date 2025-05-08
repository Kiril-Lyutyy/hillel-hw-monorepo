const app = require('./src/app.js');
const mongoose = require('mongoose');
const seed = require('./src/seeds/seed.js');

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MongoDB URI is not defined. Please set the MONGO_URI environment variable.');
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log('MongoDB connected successfully!');
    
    if (process.env.NODE_ENV === 'development') {
      await seed();
    }
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
