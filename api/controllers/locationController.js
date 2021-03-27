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

locationController.modifyOne = (req,res,next)=>{
    Location.findByIdAndUpdate(req.params.id, req.body)
            .then(res=> res.send("The location was updated!"))
            .catch(next) 
}

locationController.deleteOne = (req,res,next)=>{
    Location.findByIdAndDelete(req.params.id)
            .then(res=> res.send("The location was deleted!"))
            .catch(next)
}

module.exports = locationController