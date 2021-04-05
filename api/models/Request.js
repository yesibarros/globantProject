const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new mongoose.Schema({
    from: {
        type: Schema.Types.ObjectId, 
        ref: "user",
        required: true
    },
    to: {
        type: Schema.Types.ObjectId, 
        ref: "user",
        required: true
    },
    fromRole: {
        type: String,
        enum: ['mentee', 'mentor']
    },
    message: {
        type: String, 
    },
    status: {
        type: String,
        enum: ['pending', 'rejected', 'accepted'],
        default: 'pending'
    }
},{ versionKey: false });


module.exports= mongoose.model('request', requestSchema)