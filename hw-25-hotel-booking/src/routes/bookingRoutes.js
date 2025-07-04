const express = require('express');
const { createBooking, getRevenue } = require('../controllers/bookingController');

const router = express.Router();

router.post('/', createBooking);
router.get('/revenue', getRevenue);

module.exports = router;
