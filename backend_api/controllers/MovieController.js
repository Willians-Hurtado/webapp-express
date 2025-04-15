const connection = require('../data/db.js');


function index(req, res) {

    const sql = 'SELECT * FROM movies';
    connection.query(sql, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        console.log(result);
        res.json(result);



    });


};


function show(req, res) {

    const { id } = req.params;

    const sql = 'SELECT * FROM movies WHERE id = ?';

    connection.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.length === 0) return res.status(404).json({ message: 'Movie not found' });

        const movie = result[0];

        res.json(movie);
    });

};

module.exports = {
    index,
    show
}