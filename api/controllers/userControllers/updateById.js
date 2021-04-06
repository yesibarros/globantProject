const { User } = require("../../models");
const userFindAndPopulate = require("../../utils/userFindAndPopulate");

const updateById = (req, res, next) => {
    if (req.user._id.toString() === req.params.id.toString()) {
      User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((user) => userFindAndPopulate({ _id: req.user._id }))
        .then((user) => res.send(user))
        .catch(next);
    } else {
      res.status(403).json({ message: "unauthorized" });
    }
  };

  module.exports = updateById