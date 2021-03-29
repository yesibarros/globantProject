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
    .populate({ path: "location", populate: { path: "country" } })
    .populate("areas")
    .populate("technologies")
    .then((userstype) => {
      if (!userstype) return res.sendStatus(404);

      const bestMatch = orderByMatch(userstype, req.user, areas, technologies);
      res.status(200).send(bestMatch);
    })
    .catch(next);
};

userController.updateById = (req, res, next) => {
  if (req.user._id.toString() === req.params.id.toString()) {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then((user) => userFindAndPopulate({ _id: req.user._id }))
      .then((user) => res.send(user))
      .catch(next);
  } else {
    res.status(403).json({ message: "unauthorized" });
  }
};

module.exports = userController;
