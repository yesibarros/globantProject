const mongoose = require('mongoose');

const objectiveSchema = new mongoose.Schema({
    objectiveName: {
        type: String,
        // required: true,
        min: 4,
        max: 120
    },
    description: {
        type: String
    },
    order: {
        type: Number
    },
    status: {
        type: String, 
        Enum: ["pending", "achieved", "excellent"]
    }

});

module.exports= mongoose.model('objective', objectiveSchema)