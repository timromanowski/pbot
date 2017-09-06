const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_address: {
        id: String,
        channelId: String,
        user: { id: String, name: String },
        conversation: { id: String },
        bot: { id: String, name: String },
        serviceUrl: String
    },
    name: { type: String, index: true },
    preferred_locale: String,
    age: Number
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);