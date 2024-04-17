/* const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();
const UserRoutes = require('./routes/userRoutes');
const LanguageRoutes = require('./routes/languageRoutes');
const LessonRoutes = require('./routes/lessonRoutes');
const UserController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;


router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);

module.exports = router;

//app.use()
// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/langu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', UserRoutes); // Corrected path
app.use('/languages', LanguageRoutes); // Corrected path
app.use('/lessons', LessonRoutes); // Corrected path

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
*/
// import React from 'react';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/userRoutes');
const LanguageRoutes = require('./routes/languageRoutes');
const LessonRoutes = require('./routes/lessonRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/langu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/users', UserRoutes); // Use the UserRoutes router for /users
app.use('/languages', LanguageRoutes); // Use the LanguageRoutes router for /languages
app.use('/lessons', LessonRoutes); // Use the LessonRoutes router for /lessons

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
