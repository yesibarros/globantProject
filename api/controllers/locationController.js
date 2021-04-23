const {Location} = require('../models')

const locationController = {}

locationController.getAll = (req,res,next)=>{
    Location.find(req.query)
            .populate("country")
            .then(locations => res.send(locations))
            .catch(next)
}

locationController.createOne = (req,res,next)=>{
    Location.create(req.body)
            .then(location=> res.status(201).send(location))
}

locationController.modifyOne = (req,res,next)=>{
    Location.findByIdAndUpdate(req.params.id, req.body)
            .then(response=> {
                if(!response) return res.status(404).json({message: "Location not found!"})
                res.send("The location was updated!")})
            .catch(next) 
}

locationController.deleteOne = (req,res,next)=>{
    Location.findByIdAndDelete(req.params.id)
            .then(response=> {
                if(!response) return res.status(404).json({message: "Location not found!"})
                res.send("The location was deleted!")})
            .catch(next)
}

module.exports = locationController