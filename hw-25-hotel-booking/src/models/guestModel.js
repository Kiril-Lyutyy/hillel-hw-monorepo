const connection = require('../db/db');

const addGuest = (first_name, last_name, email, phone) => {
  const query = `
    INSERT INTO Guests (first_name, last_name, email, phone)
    VALUES (?, ?, ?, ?)
  `;
  return new Promise((resolve, reject) => {
    connection.query(query, [first_name, last_name, email, phone], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

const getGuests = () => {
  const query = 'SELECT * FROM Guests';
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

module.exports = { addGuest, getGuests };
