const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    userComment:{type: String, required: true, ref: "Post"},
})



module.exports = mongoose.model('Comment', commentSchema);