/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: Order management and analytics
 */

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: List of orders
 */
/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               products:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     product:
 *                       type: string
 *                     quantity:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Order created
 */

/**
 * @swagger
 * /api/orders/analytics/revenue:
 *   get:
 *     summary: Get total revenue from all orders
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Total revenue
 */

/**
 * @swagger
 * /api/orders/analytics/top-products:
 *   get:
 *     summary: Get top 3 selling products
 *     tags: [Orders]
 *     responses:
 *       200:
 *         description: Top products by sales
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order.controller.js');

router.get('/', controller.getAllOrders);
router.post('/', controller.createOrder);
router.get('/analytics/revenue', controller.getTotalRevenue);
router.get('/analytics/top-products', controller.getTopProducts);

module.exports = router;
