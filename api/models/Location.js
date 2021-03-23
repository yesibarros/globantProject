const mongoose = require('mongoose');



const locationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        // required: true,
        min: 4,
        max: 120
    },

});




module.exports= mongoose.model('location', locationSchema)