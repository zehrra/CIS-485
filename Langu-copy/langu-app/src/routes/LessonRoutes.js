// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/lessonController');

router.get('/', LessonController.getAllLessons);
router.post('/', LessonController.createLesson);
router.get('/:id', LessonController.getLesson);
router.put('/:id', LessonController.updateLesson);
router.patch('/:id', LessonController.partialUpdateLesson);
router.delete('/:id', LessonController.deleteLesson);

module.exports = router;
