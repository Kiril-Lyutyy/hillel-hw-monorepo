const { addGuest, getGuests } = require('../models/guestModel');

const createGuest = async (req, res) => {
  const { first_name, last_name, email, phone } = req.body;
  try {
    const result = await addGuest(first_name, last_name, email, phone);
    res.status(201).json({ id: result.insertId, first_name, last_name, email, phone });
  } catch (err) {
    res.status(500).json({ message: 'Error creating guest', error: err });
  }
};

const listGuests = async (req, res) => {
  try {
    const guests = await getGuests();
    res.status(200).json(guests);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching guests', error: err });
  }
};

module.exports = { createGuest, listGuests };
