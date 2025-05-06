const express = require('express');
const router = express.Router();
const controller = require('../controllers/analytics.controller.js');

router.get('/avg-grades', controller.getStudentsWithAvgGrade);
router.get('/students-by-course', controller.getStudentsListByCourseTitle);
router.get('/top-student', controller.getTopStudent);
router.get('/students-per-course', controller.getStudentCountPerCourse);
router.get('/courses-high-grade', controller.getCoursesWithHighAvgGrade);

module.exports = router;
