/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */


const express = require('express');
const router = express.Router();
const userController = require('../services/user.service.js');

/**
 * @swagger
 * /api/user/{id}/orders/count:
 *   get:
 *     summary: Get order count by user ID
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: Order count retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   example: 3
 *       404:
 *         description: User not found
 */
router.get('/:id/orders/count', userController.getOrderCountByUserId);

module.exports = router;