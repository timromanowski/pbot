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
        user: { 
            name: { type: String, index: true }, 
            id: String 
        },
        channelId: String,
        id: String
    }    
});

module.exports = mongoose.model('User', userSchema);