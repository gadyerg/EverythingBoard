const express = require('express');
const router = express.Router();
const boards = require('../controllers/boards')

router.route('/')
    .get(boards.index)
    .post(boards.postBoard)

router.route('/new')
    .get(boards.renderForm)

router.route('/:id')
    .get(boards.show);
    
module.exports = router;