const mongoose = require('mongoose');

const messageSchema= mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    },
    message: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports= mongoose.model('message',messageSchema);