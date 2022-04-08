const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create your User Model

const userSchema = new Schema({
    userId: Schema.Types.ObjectId,
    userName: String,
    email : [emailSchema],
    password: {
        type: String,
        required: true
    }
})

const emailSchema = new Schema({
    email:{
        type: String,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
    }
})

module.exports = mongoose.model('User', userSchema);