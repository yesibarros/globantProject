const User = require("../models/User");

const userController = {};

userController.getUser = (req, res, next) => {
  
  
  const { id } = req.body;
  User.findById(id)
    .populate("location")
    .populate("mentees")
    .populate("mentor")
    .populate("area")
    .populate("technologies")
    .then((userProfile) => {
      if (!userProfile) res.sendStatus(404);
      else res.status(200).send(userProfile);
    })
    .catch(next); 
};

userController.getAllUserbyParam = (req, res, next) => {
  const { role } = req.body;
  User.findOne({ role: role })
    .then((userstype) => {
      if (!userstype) res.sendStatus(404);
      else res.status(200).send(userstype);
    })
    .catch(next);
};

module.exports = userController;
