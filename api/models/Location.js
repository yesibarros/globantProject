const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const locationSchema = new mongoose.Schema({
    locationName: {
        type: String,
        // required: true,
        min: 4,
        max: 120
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    country: {
        type: Schema.Types.ObjectId, 
        ref: "country"
    }
},{ versionKey: false });




module.exports= mongoose.model('location', locationSchema)