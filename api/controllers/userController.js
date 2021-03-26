const { User } = require("../models");
const orderByMatch = require("../utils/orderByMatch");
const userFindAndPopulate = require("../utils/userFindAndPopulate");

const userController = {};

userController.getUser = (req, res, next) => {
  const id = req.body.id || req.user._id;
  userFindAndPopulate({ _id: id })
    .then((userProfile) => {
      if (!userProfile) res.sendStatus(404);
      else {
        userProfile.password = 0;
        userProfile.salt = 0;
        res.status(200).send(userProfile);
      }
    })
    .catch(next);
};

userController.getAllUserbyParam = (req, res, next) => {
  const { role, areas, technologies } = req.body;
  User.find(
    {
      _id: { $nin: [...req.user.mentees, req.user._id] },
      role: { $in: role },
      areas: { $in: areas },
      technologies: { $in: technologies },
    },
    { mentees: 0, password: 0, salt: 0, mentor: 0, objectives: 0 }
  )
    .populate("location")
    .populate("areas")
    .populate("technologies")
    .then((userstype) => {
      if (!userstype) return res.sendStatus(404);

      const bestMatch = orderByMatch(userstype, req.user, areas, technologies);
      res.status(200).send(bestMatch);
    })
    .catch(next);
};

module.exports = userController;
