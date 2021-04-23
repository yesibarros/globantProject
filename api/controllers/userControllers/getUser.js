
const userFindAndPopulate = require("../../utils/userFindAndPopulate");

const getUser = (req, res, next) => {
    const id = req.query.id || req.user._id;
    
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

module.exports = getUser