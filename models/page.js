const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userText: String
})


const postSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userText: String,
    comment: [commentSchema]

})


module.exports = mongoose.model('Post', postSchema);