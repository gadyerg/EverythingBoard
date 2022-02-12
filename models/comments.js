const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    comment: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Comment = new mongoose.model('Comment', commentSchema);

module.exports = Comment;