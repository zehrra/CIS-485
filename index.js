const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static('public'));


app.get('/data', (req, res) => {
    res.json({ message: 'Hello, this is JSON data!' });
});

app.get('/ascii-image', (req, res) => {
    const imagePath = path.join(__dirname, 'public/img/flower.jpg');
    imageToAscii(imagePath, (err, converted) => {
    if(err) return res.send("Failed to convert image.");
    res.send("<pre>" + converted + "</pre>");
    });
   });

// Starting the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
   });
