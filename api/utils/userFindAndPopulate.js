const { User } = require("../models");

const userFindAndPopulate = (object) => {
  return User.findOne(object)
    .populate({
      path: "location",
      populate: { path: "country" },
    })
    .populate({
      path: "mentees",
      select: "firstName lastName _id img location",
    })
    .populate({
      path: "mentor",
      select: "firstName lastName _id img location",
    })
    .populate({
      path: "pendingMentors",
      select: "firstName lastName _id img location",
    })
    .populate({
      path: "pendingMentees",
      select: "firstName lastName _id img location",
    })
    .populate("areas")
    .populate("objectives")
    .populate("technologies");
};

module.exports = userFindAndPopulate;
