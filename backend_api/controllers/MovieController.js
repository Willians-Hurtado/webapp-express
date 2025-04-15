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
    res.json({ message: `List of Movies with id ${id}` });
};

module.exports = {
    index,
    show
}