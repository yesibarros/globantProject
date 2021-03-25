
const {User} = require('../models/User')

const userController = {}

userController.getUser = (req, res, next) => {
    const { id } = req.body
    User.findById(userId)
    .populate("")
    .then( userProfile => {
        if(!userProfile) res.sendStatus(404)
        else res.status(200).send(userProfile)
    })
    .catch(next)
} 

// location
//   mentees
//   mentor
//   area
//   technologies
  



userController.getAllUserbyParam =  (req, res, next) => {

    
    res.send("userByParam mentee o mentor")
}

module.exports = userController;

