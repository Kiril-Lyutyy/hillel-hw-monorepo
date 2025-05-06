const express = require('express');
const router = express.Router();
const controller = require('../controllers/student.controller.js');

router.get('/', controller.getAllStudents);
router.get('/:id', controller.getStudentById);
router.post('/', controller.createStudent);
router.delete('/:id', controller.deleteStudent);

module.exports = router;