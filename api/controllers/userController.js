
const {User} = require('../models/User')

const userController = {}

userController.getUser = (req, res, next) => {
    res.send("userPerfil")
} 
userController.getAllUserbyParam =  (req, res, next) => {
    res.send("userByParam mentee o mentor")
}

module.exports = userController;