const router = require('express').Router();
const MovieController = require('../controllers/MovieController.js');



router.get('/', MovieController.index);

router.get('/:id', MovieController.show);



module.exports = router;