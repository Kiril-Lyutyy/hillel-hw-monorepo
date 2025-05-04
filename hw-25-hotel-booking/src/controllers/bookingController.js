const { addBooking, getRevenueByMonth } = require('../models/bookingModel');

const createBooking = async (req, res) => {
  const { guest_id, room_id, check_in_date, check_out_date, total_price } = req.body;
  try {
    const result = await addBooking(guest_id, room_id, check_in_date, check_out_date, total_price);
    res.status(201).json({ id: result.insertId, guest_id, room_id, check_in_date, check_out_date, total_price });
  } catch (err) {
    res.status(500).json({ message: 'Error creating booking', error: err });
  }
};

const getRevenue = async (req, res) => {
  const { month } = req.query;

  try {
    const revenue = await getRevenueByMonth(month);
    if (revenue === 0) {
      return res.status(404).json({ message: 'No bookings found for this month' });
    }
    res.status(200).json({ month, revenue });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching revenue', error: err });
  }
};

module.exports = { createBooking, getRevenue };
