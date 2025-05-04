const connection = require('../db/db');

const addRoom = (room_number, type, price, is_available) => {
  const query = `
    INSERT INTO Rooms (room_number, type, price, is_available)
    VALUES (?, ?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    connection.query(query, [room_number, type, price, is_available], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const getAvailableRooms = (date) => {
  const query = `
    SELECT * FROM Rooms
    WHERE is_available = 1
    AND id NOT IN (
      SELECT room_id FROM Bookings
      WHERE (check_in_date <= ? AND check_out_date > ?)
    )
  `;
  return new Promise((resolve, reject) => {
    connection.query(query, [date, date], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};


module.exports = { addRoom, getAvailableRooms };
