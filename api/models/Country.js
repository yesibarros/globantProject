const mongoose = require('mongoose');



const countrySchema = new mongoose.Schema({
   countryName: {
        type: String,
        required: true,
        min: 4,
        max: 120
    },
},{ versionKey: false });




module.exports= mongoose.model('country', countrySchema)