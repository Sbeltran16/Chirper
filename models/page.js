const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userText: String,
}, {
    timestamps: true
});


const postSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userText: {type: String, required: true},
    comment: [commentSchema],
}, {
    timestamps: true
});


module.exports = mongoose.model('Post', postSchema);