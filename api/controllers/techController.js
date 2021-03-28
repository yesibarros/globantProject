const Technology = require('../models/Technology')

const techController = {}

techController.getAll = (req,res,next)=>{
    Technology.find()
              .then(technologies => res.send(technologies))
              .catch(next)
}

techController.createOne = (req,res,next)=>{
    Technology.create(req.body)
            .then(technology=> res.status(201).send(technology))
            .catch(next)
}

techController.modifyOne = (req,res,next)=>{
    Technology.findByIdAndUpdate(req.params.id, req.body)
            .then(response=> {
                if(!response) return res.status(404).json({message: "Technology not found!"})
                res.send("The technology was updated!")})
            .catch(next) 
}

techController.deleteOne = (req,res,next)=>{
    Technology.findByIdAndDelete(req.params.id)
            .then(response=> {
                if(!response) return res.status(404).json({message: "Technology not found!"})
                res.send("The technology was deleted!")})
            .catch(next)
}

module.exports = techController