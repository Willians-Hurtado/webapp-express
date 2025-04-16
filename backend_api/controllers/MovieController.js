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

    const sqlReviews = 'SELECT * FROM reviews WHERE movie_id = ?';

    connection.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.length === 0) return res.status(404).json({ message: 'Movie not found' });

        const movie = result[0];

        connection.query(sqlReviews, [id], (err, reviews) => {
            if (err) return res.status(500).json({ error: err.message });

            movie.reviews = reviews;

            console.log(movie);

            res.json(movie);
        });

    });



};


function storeReview(req, res) {

    const id = Number(req.params.id);
    const { name, text, vote } = req.body;

    const created_at = new Date().toISOString().slice(0, 19).replace('T', ' ');

    const updated_at = created_at;


    const insertSql = 'INSERT INTO reviews (movie_id, name, text, vote, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?)';

    const values = [id, name, text, vote, created_at, updated_at];

    connection.query(insertSql, values, (err, result) => {

        if (err) return res.status(500).json({ error: err.message });

        res.status(201).json({ message: 'Review created successfully', reviewId: result.insertId });

    });



};


module.exports = {
    index,
    show,
    storeReview
}