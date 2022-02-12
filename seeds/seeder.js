const Board = require('../models/boards');
const data = require('./data');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/everything-board')
    .then(() => {
        console.log('Connected to database');
    })
    .catch((err) => {
        console.log(err);
    });

async function seeder() {
    await Board.deleteMany();
    for (board of data.boards) {
        const newBoard = await new Board(board);
        await newBoard.save();
    }
}

seeder().then(() => {
    mongoose.connection.close();
});