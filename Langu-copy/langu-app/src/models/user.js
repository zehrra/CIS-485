// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Add more fields as needed
});

module.exports = mongoose.model('User', userSchema);

//this is where the first code ends

/* mongoose.connect('mongodb://localhost:27017/langu', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to create and save a new user
async function createNewUser() {
  try {
    // Create a new user instance
    const newUser = new User({
      username: 'John Doe',
      email: '30@example',
      // Add more fields as needed
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    console.log('User saved:', savedUser);
  } catch (error) {
    console.error('Error saving user:', error);
  }
}

// Export the User model and the createNewUser function
module.exports = {
  User,
  createNewUser,
};

*/