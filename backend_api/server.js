const express = require('express');
const cors = require('cors');
const app = express();
const MovieRouter = require('./routes/movies.js');
const serverError = require('./middleware/serverError.js');
const notFound = require('./middleware/notfound.js');

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

app.use('/api/v1/movies', MovieRouter);




// Middleware to handle errors
app.use(serverError);

// Middleware to handle 404 errors
app.use(notFound);


