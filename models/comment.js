const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your Chirp Model

const commentSchema = new mongoose.Schema({
    commentText: {type: String, required: true},
    chirpId: {type: Schema.Types.ObjectId, ref: 'Chirp', required: true},
    userId: {type: Schema.Types.ObjectId, ref: 'User', requried: true}
}, {timestamps: true })

module.exports = mongoose.model('Comment', commentSchema);