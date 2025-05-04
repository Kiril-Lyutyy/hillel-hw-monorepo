const { addRoom, getAvailableRooms } = require('../models/roomModel');

const createRoom = async (req, res) => {
  const { room_number, type, price, is_available } = req.body;
  try {
    const result = await addRoom(room_number, type, price, is_available);
    res.status(201).json({ id: result.insertId, room_number, type, price, is_available });
  } catch (err) {
    res.status(500).json({ message: 'Error creating room', error: err });
  }
};

const getAvailableRoomsByDate = async (req, res) => {
  const { date } = req.query;

  try {
    const availableRooms = await getAvailableRooms(date);

    if (availableRooms.length === 0) {
      return res.status(404).json({ message: 'No rooms available on this date' });
    }

    res.status(200).json(availableRooms);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching available rooms', error: err });
  }
};

module.exports = { createRoom, getAvailableRoomsByDate };
