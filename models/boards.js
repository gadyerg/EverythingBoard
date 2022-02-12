const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    category: {
        type: String,
        enum: ['Work', 'Question', 'Gaming', 'Sports', 'News', 'Misc.'],
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
});

const Board = new mongoose.model('Board', boardSchema);

module.exports = Board;