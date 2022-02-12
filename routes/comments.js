const express = require('express');
const router = express.Router({mergeParams: true});
const comments = require('../controllers/comments');

router.post('/', comments.createComment);

module.exports = router;