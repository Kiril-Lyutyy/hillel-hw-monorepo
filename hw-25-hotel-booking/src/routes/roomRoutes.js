const express = require('express');
const { createRoom, getAvailableRoomsByDate } = require('../controllers/roomController');

const router = express.Router();

router.post('/', createRoom);
router.get('/available', getAvailableRoomsByDate);

module.exports = router;
