const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

// Create a user schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// Create a User model
const User = mongoose.model('User', userSchema);

// Create a new user
app.get('/create', async (req, res) => {
    const newUser = new User({
        name: 'John Doe',
        email: 'john@example.com',
        age: 30
    });
    await newUser.save();
    res.send('User created successfully!');
});

// Get all users
app.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

// Update a user by ID
app.get('/update/:_id', async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndUpdate(id, { age: 35 });
    res.send('User updated successfully!');
});

// Delete a user by ID
app.get('/delete/:_id', async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.send('User deleted successfully!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
