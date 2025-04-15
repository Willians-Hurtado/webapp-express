const connection = require('../data/db.js');


function index(req, res) {
    res.json({ message: 'List of movies' });

};


function show(req, res) {

    const { id } = req.params;
    res.json({ message: `List of Movies with id ${id}` });
};

module.exports = {
    index,
    show
}