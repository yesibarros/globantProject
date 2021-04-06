const { User, Request } = require("../../models");
const userFindAndPopulate = require("../../utils/userFindAndPopulate");

const acceptRequest = async (req, res, next)=>{
    let user = await User.findById(req.user._id) //can be either mentee or mentor
    const ReceivedRequests = req.body.request
    const requestsIds = ReceivedRequests.map(request => request.toString())
    try{
        await Request.updateMany({_id: requestsIds, status: "pending"},{status: "accepted"},{new: true})
        const requests = await Request.find({_id: requestsIds})
        for(let i = 0; i < requests.length; i++){
            if(requests[i].to.toString() == user._id.toString()){
                //Save the user in the ment, and save the ment in user
                const ment = await User.find({_id: requests[i].from})
                if(requests[i].fromRole == "mentee"){
                    if(user.mentees.length > 5) return res.status(400).json({message: "You have reached the maximum of 5 mentees, you can't accept more."})
                    user.mentees.push(ment[0]._id)
                    ment[0].mentor = user._id       
                }
                if(requests[i].fromRole == "mentor") {
                    if(user.mentor) res.status(400).json({message: "You can't accept a mentor while already having one."})
                    user.mentor = ment[0]._id
                    ment[0].mentees.push(user._id)
                }
                
                user.receivedPendingRequests = user.receivedPendingRequests-1
                await ment[0].save()
                await user.save()

                //Enviar notificaciones a los ments
                //...
            }
        }      

        //Send user and pending requests
        user = await userFindAndPopulate({_id: user._id})
        const pendingRequests = await user.getPendingRequests()
        res.send({user, pendingRequests})

    }catch(err){
        next(err)
    }
}

module.exports = acceptRequest