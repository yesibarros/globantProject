const { Meeting, User } = require("../models");
const sendNotification = require("../utils/expoPushNotifications");

const meetingsController = {};

//buscar todas las reuniones del usuario
//Revisar que dato deberia recibir --- capaz si se usa para buscar las meets de mentee y de mentor desde el front deberia venir el objeto con el que se quiere trabajar y poner solo req.body
meetingsController.getMeet = (req, res, next) => {
  
  
  Meeting.find({$or: [{host: req.user._id}, {guest: req.user._id}]})
    .populate("host", [
      "role",
      "firstName",
      "lastName",
      "email",
      "img",
      "location",
    ])
    .populate("guest", [
      "role",
      "firstName",
      "lastName",
      "email",
      "img",
      "location",
    ])
    .then((meet) => {
      
      return meet ? res.status(200).send(meet) : res.sendStatus(404)
    })
    .catch(next);
};

// crear una reunion
meetingsController.createMeet = (req, res, next) => {
  Meeting.create(req.body)
    .then((newMeet) => {
      const host = req.user
      const guestId = req.body.guest
      User.findById(guestId)
          .then(guest=>{
            if(guest.notificationsToken) sendNotification([guest.notificationsToken], "Mentor Me", "", `${host.firstName} ${host.lastName} te está invitando a una reunión`, {type: "meeting", user: guest._id, date: String(new Date())})
            res.status(201).send(newMeet)
          })
    })
    .catch(next);
};

//actualizar reunion
meetingsController.updateMeet = (req, res, next) => {
  Meeting.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (upadatedMeet) => {
      if (!upadatedMeet) return res.sendStatus(404);
      return res.status(201).send(upadatedMeet);
    }
  ).catch(next);
};

// borarr reunion
meetingsController.deleteMeet = (req, res, next) => {
  Meeting.findOneAndDelete({ _id: req.params.id }).then((deletedMeet) => {
    const ment = req.user._id.toString() == deletedMeet.host.toString()? deletedMeet.guest : deletedMeet.host
    User.findById(ment)
          .then(guest=>{
            if(guest.notificationsToken) sendNotification([guest.notificationsToken], "Mentor Me", "", `${req.user.firstName} ${req.user.lastName} canceló la reunión`, {type: "meeting", user: guest._id, date: String(new Date())})
            
            deletedMeet
              ? res.status(200).json({ message: "Meet deleted" })
              : res.sendStatus(404);
          })
  }).catch(next);
};

module.exports = meetingsController;
