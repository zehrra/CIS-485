/* const lesson = require('../models/lesson');

exports.getAllLessons = async (req, res) => {
  try {
    const lessons = await lessons.find();
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLesson = async (req, res) => {
  try {
    const newLesson = await Lesson.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLesson = async (req, res) => {
  try {
    const lesson = await lesson.findById(req.params.id);
    if (!lesson) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(lesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLesson) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.partialUpdateLesson = async (req, res) => {
  try {
    const updatedLesson = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLesson) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const deletedLesson = await User.findByIdAndDelete(req.params.id);
    if (!deletedLesson) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
*/

const Lesson = require('../models/lesson');

exports.getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find(); // Corrected: Use Lesson instead of lessons
    res.json(lessons);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLesson = async (req, res) => {
  try {
    const newLesson = await Lesson.create(req.body);
    res.status(201).json(newLesson); // Corrected: Use newLesson instead of newUser
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getLesson = async (req, res) => {
  try {
    const foundLesson = await Lesson.findById(req.params.id); // Corrected: Use foundLesson instead of lesson
    if (!foundLesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(foundLesson);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateLesson = async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.partialUpdateLesson = async (req, res) => {
  try {
    const updatedLesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json(updatedLesson);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLesson = async (req, res) => {
  try {
    const deletedLesson = await Lesson.findByIdAndDelete(req.params.id);
    if (!deletedLesson) {
      return res.status(404).json({ message: 'Lesson not found' });
    }
    res.json({ message: 'Lesson deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
