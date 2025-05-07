const express = require('express');
const setupSwagger = require('./swagger.js');
const connectDB = require('./config/db.js');
require('dotenv').config();

connectDB();

const app = express();

app.use(express.json());

setupSwagger(app);

app.get('/', (_req, res) => {
  res.send('Rest API is up and running!');
});

app.use('/api/products', require('./routes/product.routes.js'));
app.use('/api/categories', require('./routes/category.routes.js'));
app.use('/api/orders', require('./routes/order.routes.js'));

app.use((_req, res, _next) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong' });
});

module.exports = app;
