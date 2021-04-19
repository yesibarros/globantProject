const { Objective, User } = require("../models");
const sendNotification = require("../utils/expoPushNotifications")

const objectiveController = {};

objectiveController.getAll = (req, res, next) => {
  //Revisar según nuevos cambios en el modelo
  const id = req.query._id || req.user._id
  Objective.find({mentee: id})
    .populate({path: "mentee", select: "_id firstName lastName img"})
    .populate({path: "mentor", select: "_id firstName lastName img"})
    .then((objectives) => {
      return res.send(objectives);
    })
    .catch(next);
};

objectiveController.createOne = (req, res, next) => {
  //Revisar según nuevos cambios en el modelo
  
  Objective.create(req.body)
    .then((objectives) => {
      User.find({_id: req.body.mentee})
          .then(mentee => {
            if(mentee[0].notificationsToken) sendNotification([mentee[0].notificationsToken], `Mentor Me`, "", `¡Tienes un nuevo objetivo!`, {type: "goals", user: mentee[0]._id, date: String(new Date())})
            res.status(201).send(objectives)
          })  
    })
    .catch(next);
};

objectiveController.modifyOne = (req, res, next) => {
  Objective.findByIdAndUpdate(req.params.id, req.body)
    .then((response) => {
      console.log(response);
      if (!response) return res.status(404).json({ message: "Objective not found!" });
      
      Objective.find({mentee: response.mentee})
      .populate("mentee")
      .populate("mentor")
      .then((objectives) => {
        User.find({_id: objectives[0].mentee})
          .then(mentee => {
            if(mentee[0].notificationsToken) sendNotification([mentee[0].notificationsToken], `Mentor Me`, "", `¡Uno de tus objetivos fue modificado!`, {type: "goals", user: mentee[0]._id, date: String(new Date())})
            res.send("The objective was updated!");
          }) 
      })    
    })
    .catch(next);
};

objectiveController.deleteOne = (req, res, next) => {
  Objective.findByIdAndDelete(req.params.id)
    .then((response) => {
      if (!response)
        return res.status(404).json({ message: "Objective not found!" });
      console.log(response);
      res.send("The objective was deleted!");
    })
    .catch(next);
};

module.exports = objectiveController;
