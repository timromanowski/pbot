const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user_address: {
        useAuth: Boolean,
        serviceUrl: String,
        bot: { 
            name: String, 
            id: String 
        },
        conversation: { 
            id: String, 
            isGroup: Boolean 
        },       
        channelId: String,
        id: String       
    },
    name: { type: String, index: true }, 
    preferred_locale: String,
    age: Number
}, { timestamps: true } );

module.exports = mongoose.model('User', userSchema);