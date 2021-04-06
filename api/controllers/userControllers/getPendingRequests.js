const {User} = require("../../models")

const getPendingReq = (req,res,next)=>{
    User.findById(req.user._id)
        .then(user => user.getPendingRequests())
        .then(requests => res.send(requests))
        .catch(next)
}

module.exports = getPendingReq