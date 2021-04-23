const { User } = require("../../models");
const orderByMatch = require("../../utils/orderByMatch");

const getMatchs = (req, res, next) => {
    let roleForUser = req.user.role
    if(!req.user.role.includes("admin") && !req.user.role.includes("mentor")) roleForUser = ["mentor"]
    if(!req.user.role.includes("admin") && !req.user.role.includes("mentee")) roleForUser = ["mentee"]
    const role = req.query.role? req.query.role : roleForUser;
    const areas = req.query.areas? req.query.areas.split(",") : req.user.areas
    const technologies = req.query.technologies? req.query.technologies.split(",") : req.user.technologies
    
    //Find results
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
        
        //Order the results and send them
        const bestMatch = orderByMatch(userstype, req.user, areas, technologies);
        res.status(200).send(bestMatch);
      })
      .catch(next);
  };

  module.exports = getMatchs


