/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: List of products
 */
/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               stock:
 *                 type: integer
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created
 */
/**
 * @swagger
 * /api/products/by-category:
 *   get:
 *     summary: Get products by category (case-insensitive)
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: true
 *         description: Category name
 *     responses:
 *       200:
 *         description: Products by category
 */

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller.js');

router.post('/', controller.createProduct);
router.get('/', controller.getAllProducts);
router.get('/by-category', controller.getProductsByCategory);
router.get('/top', controller.getTopProducts);

module.exports = router;
