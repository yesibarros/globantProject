const { Meeting } = require("../models");

const meetingsController = {};

//buscar todas las reuniones del usuario
//Revisar que dato deberia recibir --- capaz si se usa para buscar las meets de mentee y de mentor desde el front deberia venir el objeto con el que se quiere trabajar y poner solo req.body
meetingsController.getMeet = (req, res, next) => {
  Meeting.find(req.body)
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
    .then((meet) => (meet ? res.status(200).send(meet) : res.sendStatus(404)))
    .catch(next);
};

// crear una reunion
meetingsController.createMeet = (req, res, next) => {
  Meeting.create(req.body)
    .then((newMeet) => res.status(201).send(newMeet))
    .catch(next);
};

//actualizar reunion
meetingsController.updateMeet = (req, res, next) => {
  Meeting.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(
    (upadatedMeet) => {
      if (!upadatedMeet) return res.sendStatus(404);
      return res.status(201).send(upadatedMeet);
    }
  );
};

// borarr reunion
meetingsController.deleteMeet = (req, res, next) => {
  Meeting.findOneAndDelete({ _id: req.params.id }).then((deletedMeet) => {
    deletedMeet
      ? res.status(200).json({ message: "Meet deleted" })
      : res.sendStatus(404);
  });
};

module.exports = meetingsController;
