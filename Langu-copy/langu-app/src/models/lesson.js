// models/lesson.js
const mongoose = require('mongoose');
// const language = require('../models/language');

console.log("lesson js");
const lessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  language: {
    type: mongoose.Schema.Types.ObjectId,
   ref: 'Language',
  },
  // Add more fields as needed
});

module.exports = mongoose.model('Lesson', lessonSchema);


