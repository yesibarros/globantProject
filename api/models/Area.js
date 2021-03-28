const mongoose = require('mongoose');



const areaSchema = new mongoose.Schema({
    areaName: {
        type: String,
        // required: true,
        min: 4,
        max: 120
    },
    areaWeight: {
        type: Number,
        default: 8
    }

},{ versionKey: false });




module.exports= mongoose.model('area', areaSchema)