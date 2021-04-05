const Area = require('../models/Area')

const areaController = {}

areaController.getAll = (req,res,next)=>{
    Area.find()
        .then(areas => res.send(areas))
        .catch(next)
}

areaController.createOne = (req,res,next)=>{
    Area.create(req.body)
            .then(area=> res.status(201).send(area))
            .catch(next)
}

areaController.modifyOne = (req,res,next)=>{
    Area.findByIdAndUpdate(req.params.id, req.body)
            .then(response=> {
                if(!response) return res.status(404).json({message: "Profile not found!"})
                res.send("The profile was updated!")})
            .catch(next) 
}

areaController.deleteOne = (req,res,next)=>{
    Area.findByIdAndDelete(req.params.id)
            .then(response=> {
                if(!response) return res.status(404).json({message: "Profile not found!"})
                res.send("The profile was deleted!")})
            .catch(next)
}

module.exports = areaController