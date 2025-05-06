const express = require('express');
const studentRoutes = require('./routes/student.routes.js');
const coursesRoutes = require('./routes/courses.routes.js');
const enrollmentRoutes = require('./routes/enrollment.routes');
const analyticsRoutes = require('./routes/analytics.routes');
require('dotenv').config();

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Rest API is up and running!');
});

app.use('/api/students', studentRoutes);
app.use('/api/courses', coursesRoutes);
app.use('/api/enrollments', enrollmentRoutes);
app.use('/api/analytics', analyticsRoutes);

app.use((_req, res, _next) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, _req, res, _next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Something went wrong' });
});

module.exports = app;
