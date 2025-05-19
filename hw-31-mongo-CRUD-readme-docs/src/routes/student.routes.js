const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Students CRUD operations
 */

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Create a new student
 *     tags: [Students]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, age, group, marks]
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *               group:
 *                 type: string
 *               marks:
 *                 type: array
 *                 items:
 *                   type: number
 *     responses:
 *       201:
 *         description: Student created successfully
 */
router.post('/', studentController.createStudent);

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Student list retrieved successfully
 */
router.get('/', studentController.getAllStudents);

/**
 * @swagger
 * /api/students/{id}:
 *   patch:
 *     summary: Update student age
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               age:
 *                 type: number
 *     responses:
 *       200:
 *         description: Age updated successfully
 */
router.patch('/:id', studentController.updateStudentAge);

/**
 * @swagger
 * /api/students/group/{group}:
 *   delete:
 *     summary: Remove student by group
 *     tags: [Students]
 *     parameters:
 *       - in: path
 *         name: group
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Student removed successfully
 */
router.delete('/group/:group', studentController.deleteByGroup);

/**
 * @swagger
 * /api/students/filter/older-than-20:
 *   get:
 *     summary: Students older than 20
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Found students
 */
router.get('/filter/older-than-20', studentController.studentsOlderThan);

/**
 * @swagger
 * /api/students/filter/high-marks:
 *   get:
 *     summary: Students with high marks
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Found students
 */
router.get('/filter/high-marks', studentController.studentsWithHighMarks);

/**
 * @swagger
 * /api/students/filter/name-starts-a:
 *   get:
 *     summary: Students whose names start with 'A'
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Students found
 */
router.get('/filter/name-starts-a', studentController.studentsNameStartsWithA);

/**
 * @swagger
 * /api/students/sort/age-desc:
 *   get:
 *     summary: Sort students by age descending
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Sorted students
 */
router.get('/sort/age-desc', studentController.sortByAgeDesc);

/**
 * @swagger
 * /api/students/agg/average-marks:
 *   get:
 *     summary: Average marks of students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Calculated average marks
 */
router.get('/agg/average-marks', studentController.averageMarks);

/**
 * @swagger
 * /api/students/agg/group-count:
 *   get:
 *     summary: Count of students by group
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Student count by group
 */
router.get('/agg/group-count', studentController.groupCount);

/**
 * @swagger
 * /api/students/agg/total-avg:
 *   get:
 *     summary: Average mark of all students
 *     tags: [Students]
 *     responses:
 *       200:
 *         description: Average mark of all students
 */
router.get('/agg/total-avg', studentController.totalAvgMark);

module.exports = router;
