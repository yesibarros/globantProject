const {Country} = require('../models')

const countryController = {}

countryController.getAll = (req,res,next)=>{
    Country.find()
            .then(locations => res.send(locations))
            .catch(next)
}

countryController.createOne = (req,res,next)=>{
    Country.create(req.body)
            .then(country=> res.status(201).send(country))
            .catch(next)
}

countryController.modifyOne = (req,res,next)=>{
    Country.findByIdAndUpdate(req.params.id, req.body)
            .then(response=> {
                if(!response) return res.status(404).json({message: "Country not found!"})
                res.send("The country was updated!")})
            .catch(next) 
}

countryController.deleteOne = (req,res,next)=>{
    Country.findByIdAndDelete(req.params.id)
            .then(response=> {
                if(!response) return res.status(404).json({message: "Country not found!"})
                res.send("The country was deleted!")})
            .catch(next)
}

module.exports = countryController