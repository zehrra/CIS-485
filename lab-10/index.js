const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken'); // Import jsonwebtoken package
const bcrypt = require('bcrypt'); // Import bcrypt package for password hashing
const path = require('path');

const app = express();
const port = 3000;

// Secret key for signing JWT tokens
const secretKey = 'secret'; // Replace 'your_secret_key_here' with your actual secret

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Basic route to prove that the server runs
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Middleware for pre-processing incoming requests
app.use((req, res, next) => {
    // Middleware function to log something to the console
    console.log('Middleware is running.');
    next();
});

// Middleware to apply only to routes except those starting with '/account/'
app.use((req, res, next) => {
    if (!req.path.startsWith('/account/')) {
        // Only run the middleware if the path does not start with '/account/'
        console.log('Middleware is applied to routes except those starting with /account/');
        next();
    } else {
        next('route'); // Skip to the next route
    }
});

// Array of in-memory users
const users = [
    // You can add usernames, passwords, and other user information here
];

// Routes
app.get('/home', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/contact', (req, res) => {
    res.send('Contact page');
});

app.get('/account/login-page', (req, res) => {
    res.sendFile(path.join(__dirname,'login.html'));
});

app.get('/account/sign-up-page', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup.html'));
});

app.post('/account/login', async (req, res) => {
    const { username, password, redirect } = req.body;

    // Find the user by username
    const user = users.find(user => user.username === username);
    if (!user) {
        // User not found, return 400 with an error message
        return res.status(400).send('Username password combination did not authenticate.');
    }

    // Check if the password matches using bcrypt
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        // Password does not match, return 400 with an error message
        return res.status(400).send('Username password combination did not authenticate.');
    }

    // If there is a match, generate a JWT token for the user
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

    // Set the token in a session cookie with HttpOnly flag
    res.cookie('token', token, {
        httpOnly: true,
        secure: false, // Set it to false since HTTPS is not configured
    });

    // Redirect the user to the original page they were trying to access
    if (redirect) {
        res.redirect(redirect);
    } else {
        // If no redirect specified, send them to the home page
        res.redirect('/home');
    }
});

app.post('/account/sign-up', async (req, res) => {
      const { username, password, redirect } = req.body;

    // Find the user by username
    const user = users.find(user => user.username === username);
    if (!user) {
        // User not found, return 400 with an error message
        return res.status(400).send('Username password combination did not authenticate.');
    }

    // Check if the password matches using bcrypt
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        // Password does not match, return 400 with an error message
        return res.status(400).send('Username password combination did not authenticate.');
    }

    // If there is a match, generate a JWT token for the user
    const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

    // Set the token in a session cookie with HttpOnly flag
    res.cookie('token', token, {
        httpOnly: true,
        secure: false, // Set it to false since HTTPS is not configured
    });

    // Redirect the user to the original page they were trying to access
    if (redirect) {
        res.redirect(redirect);
    } else {
        // If no redirect specified, send them to the home page
        res.redirect('/home');
    }

    // Check if the username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        // User with the provided username already exists, return a 400 status
        return res.status(400).send('Username already exists.');
    }

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Save the user (in-memory for this example)
        users.push({ username, password: hashedPassword });

        // Respond with a 201 status indicating success
        res.status(201).send('User created.');
    } catch (error) {
        // Handle any error that occurred during password hashing
        console.error('Error hashing password:', error);
        res.status(500).send('Internal server error.');
    }
});

app.post('/account/logout', (req, res) => {
    // Logic for handling logout
});

// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

