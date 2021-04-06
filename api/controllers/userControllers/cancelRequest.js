const { User, Request } = require("../../models");
const userFindAndPopulate = require("../../utils/userFindAndPopulate");

const cancelRequest = async (req, res, next)=>{
    let user = await User.findById(req.user._id) //can be either mentee or mentor
    const ReceivedRequests = req.body.request
    const requestsIds = ReceivedRequests.map(request => request.toString())
    try{
        const requests = await Request.find({_id: requestsIds, status: "pending"})
        for(let i = 0; i < requests.length; i++){
            if(requests[i].to.toString() == user._id.toString()){
                //Save the user in the ment, and save the ment in user
                requests[i].status = "rejected"                                
                user.receivedPendingRequests = user.receivedPendingRequests-1
                await requests[i].save()
                await user.save()

                //Enviar notificaciones a los ments
                //const ment = await User.find({_id: requests[i].from})
                //...
            }
            if(requests[i].from.toString() == user._id.toString()){
                //Save the user in the ment, and save the ment in user
                requests[i].status = "canceled"  
                const ment = await User.find({_id: requests[i].from})        
                ment[0].receivedPendingRequests = ment[0].receivedPendingRequests-1
                await ment[0].save()
                await requests[i].save()
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

module.exports = cancelRequest