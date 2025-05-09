const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

router.get('/:id/orders/count', userController.getOrderCount);

module.exports = router;