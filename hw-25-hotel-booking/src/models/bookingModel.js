const connection = require('../db/db');

const addBooking = (guest_id, room_id, check_in_date, check_out_date, total_price) => {
  const query = `
    INSERT INTO Bookings (guest_id, room_id, check_in_date, check_out_date, total_price)
    VALUES (?, ?, ?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    connection.query(query, [guest_id, room_id, check_in_date, check_out_date, total_price], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const getRevenueByMonth = (month) => {
  const query = `
    SELECT SUM(total_price) AS revenue
    FROM Bookings
    WHERE DATE_FORMAT(check_in_date, '%Y-%m') = ? OR DATE_FORMAT(check_out_date, '%Y-%m') = ?
  `;
  
  return new Promise((resolve, reject) => {
    connection.query(query, [month, month], (err, results) => {
      if (err) return reject(err);
      resolve(results[0]?.revenue || 0);
    });
  });
};

module.exports = { addBooking, getRevenueByMonth };
