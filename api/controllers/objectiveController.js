const {Objective} = require('../models')

const objectiveController = {}

objectiveController.getAll = (req,res,next)=>{ //Revisar según nuevos cambios en el modelo
    Objective.find(req.query)
            .populate("country")
            .then(objectives => res.send(objectives))
            .catch(next)
}

objectiveController.createOne = (req,res,next)=>{ //Revisar según nuevos cambios en el modelo
    Objective.create(req.body)
            .then(objectives=> res.status(201).send(objectives))
            .catch(next)
}

objectiveController.modifyOne = (req,res,next)=>{
    Objective.findByIdAndUpdate(req.params.id, req.body)
            .then(response=> {
                console.log(response)
                if(!response) return res.status(404).json({message: "Objective not found!"})
                res.send("The objective was updated!")})
            .catch(next) 
}

lobjectiveController.deleteOne = (req,res,next)=>{
    Objective.findByIdAndDelete(req.params.id)
            .then(response=> {
                if(!response) return res.status(404).json({message: "Objective not found!"})
                console.log(response)
                res.send("The objective was deleted!")})
            .catch(next)
}

module.exports = objectiveController