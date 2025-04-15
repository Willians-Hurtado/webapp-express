const express = require('express');
const cors = require('cors');
const app = express();
const connection = require('./data/db.js');

const PORT = process.env.PORT || 3000;

//
app.use(cors(

    {
        origin: process.env.FRONT_URL || 'http://localhost:5173',
    }
));

// Middleware to parse JSON bodies
app.use(express.json());

// static assets middleware
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);


});

// Import routes
app.get('/', (req, res) => {
    res.send('movies API server')
});


app.get('/api/v1/movies', (req, res) => {
    res.json({ message: 'List of movies' });
});

app.get('/api/v1/movies/:id', (req, res) => {

    const { id } = req.params;
    res.json({ message: `List of Movies with id ${id}` });
});




// Middleware to handle errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Middleware to handle 404 errors
app.use((req, res, next) => {
    res.status(404).send('Sorry cant find that!')
});


