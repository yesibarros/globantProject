const {Location} = require('../models')

const locationController = {}

locationController.getAll = (req,res,next)=>{
    Location.find()
            .then(locations => res.send(locations))
            .catch(next)
}

locationController.createOne = (req,res,next)=>{
    const {locationName} = req.body
    Location.create({locationName})
            .then(location=> res.status(201).json({message: "Location created!"}))
}

module.exports = locationController