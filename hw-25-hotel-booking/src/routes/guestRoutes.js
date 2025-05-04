const express = require('express');
const { createGuest, listGuests } = require('../controllers/guestController');

const router = express.Router();

router.post('/', createGuest);
router.get('/', listGuests);

module.exports = router;
