const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your Chirp Model

const chirpSchema = new mongoose.Schema({
    chirpText: {type: String, required: true},
}, {timestamps: true })

module.exports = mongoose.model('Chirp', chirpSchema);