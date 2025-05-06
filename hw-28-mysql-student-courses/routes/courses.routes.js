const express = require('express');
const router = express.Router();
const controller = require('../controllers/courses.controller.js');

router.get('/', controller.getAllCourses);
router.get('/:id', controller.getCourseById);
router.post('/', controller.createCourse);
router.delete('/:id', controller.deleteCourse);

module.exports = router;