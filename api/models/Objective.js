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
        type: Number,
        default: 0
    },
    status: {
        type: String, 
        Enum: ["pending", "achieved", "excellent"],
        default: "pending"
    }

});

module.exports= mongoose.model('objective', objectiveSchema)