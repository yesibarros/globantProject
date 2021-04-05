const { User, Request } = require("../../models");
const userFindAndPopulate = require("../../utils/userFindAndPopulate");

const acceptRequest = async (req, res, next)=>{
    const user = await User.findById(req.user._id) //can be either mentee or mentor
    const ReceivedRequests = req.body.request
    const requestsIds = ReceivedRequests.map(request => request._id.toString())
    const updatedRequests = await Request.updateMany({_id: requestsIds, status: "pending"},{status: "accepted"},{new: true})

    for(let i = 0; i < updatedRequests.length; i++){
        if(updatedRequests[i].to.toString() == user._id.toString()){
            //Save the user in the ment
            const ment = User.find({_id: updatedRequests[i].from})
            if(updatedRequests.roleFrom == "mentee"){
                ment.mentees = ment.mentees.push(user)
                user.mentor = ment            
            }
            if(updatedRequests.roleFrom == "mentor") {
                ment.mentor = user
                user.mentees = user.mentees.push(ment)
            }
            ment.receivedPendingRequests = ment.receivedPendingRequests-1
            user.receivedPendingRequests = user.receivedPendingRequests-1
            const updatedMent = await ment.save()
            const updatedUser = await user.save()

            //Save the ment in user

        }
    }

    //Sacar los ments y sus roles de updatedRequests
    //Si request.to == user._id entonces todo ok, si no, mandar unauthorized
    //A cada ment bajarle el pendingReceivedRequests en 1
    //A cada ment asignarle a user donde corresponda
    //Al user asignarle cada ment donde corresponda
    //Enviar notificaciones a los ments
    
    res.send("accept request")
}

module.exports = acceptRequest