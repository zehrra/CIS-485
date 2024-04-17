// models/language.js
const mongoose = require('mongoose');

console.log("language js");
const languageSchema = new mongoose.Schema({
  name: String,
  // Add more fields as needed
});

module.exports = mongoose.model('Language', languageSchema);
