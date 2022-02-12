const Board = require('../models/boards');
const catchAsync = require('../utils/catchAsync');

module.exports.index = catchAsync(async (req, res) => {
    const boards = await Board.find({})
    res.render('index', {boards});
})

module.exports.show = catchAsync(async (req, res) => {
    const {id} = req.params;
    const board = await Board.findById(id).populate('comments');
    res.render('show', {board});
})

module.exports.renderForm = (req, res) => {
    res.render('new')
}

module.exports.postBoard = catchAsync(async (req, res) => {
    const board = new Board(req.body);
    board.likes = 0;
    await board.save();
    res.redirect('/boards')
})