const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const postSchema = new Schema({
    userText: String,
})


module.exports = mongoose.model('Post', postSchema);