const { User } = require("../models");

const userFindAndPopulate = (object) => {
  return User.findOne(object)
    .populate("location")
    .populate("mentees")
    .populate("mentor")
    .populate("areas")
    .populate("objectives")
    .populate("technologies");
};

module.exports = userFindAndPopulate;
