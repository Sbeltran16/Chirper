const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userText: String
})



module.exports = mongoose.model('Comment', commentSchema);