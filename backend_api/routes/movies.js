const router = require('express').Router();
const MovieController = require('../controllers/MovieController.js');



router.get('/', MovieController.index);

router.get('/:id', MovieController.show);


router.post('/:id/review', MovieController.storeReview);

module.exports = router;