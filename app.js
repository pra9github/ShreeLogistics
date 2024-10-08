const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the directory where the template files are located
app.set('views', path.join(__dirname, 'views'));

// Set up a static directory for serving static files (like CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index.ejs'); // This will render the index.ejs file
});

// Add GET routes for services and about
app.get('/services', (req, res) => {
    res.render('services.ejs');
});

app.get('/about', (req, res) => {
    res.render('about.ejs');
});

// Keep the existing POST routes
app.post('/services', (req, res) => {
    res.render('services.ejs');
});

app.post('/about', (req, res) => {
    res.render('about.ejs');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
