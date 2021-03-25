const Location = require('../models/Location')

const locationController = {}

locationController.getAll = (req,res,next)=>{
    Location.find()
            .then(locations => res.send(locations))
            .catch(next)
}

module.exports = locationController