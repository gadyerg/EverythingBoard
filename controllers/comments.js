const Comment = require('../models/comments');
const Board = require('../models/boards');
const catchAsync = require('../utils/catchAsync');

module.exports.createComment = catchAsync(async (req, res) => {
    const {id} = req.params;
    const board = await Board.findById(id);
    const comment = new Comment(req.body);
    board.comments.push(comment);
    await board.save();
    await comment.save();
    res.redirect(`/boards/${id}`);
});