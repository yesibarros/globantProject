const { User } = require("../../models")
const userFindAndPopulate = require("../../utils/userFindAndPopulate")
const sendNotification = require("../../utils/expoPushNotifications")

const cancelMatch = async (req, res, next) => {
    console.log(req.body)
    try{
        if(req.body.mentee){
            await User.findByIdAndUpdate(req.body.mentee, {$unset: {mentor: ""}})
            await User.findByIdAndUpdate(req.user._id, {$pull: {mentees: req.body.mentee}})
            //Enviar notificación al mentee
            const menteeToSend = await userFindAndPopulate({_id: req.body.mentee})
            if(menteeToSend.notificationsToken) sendNotification([menteeToSend.notificationsToken], `Mentor Me`, "", `${req.user.firstName} ${req.user.lastName} ha dejado de ser tu mentor.`, {type: "cancelMatch", user: menteeToSend})
        }
        if(req.body.mentor){
            await User.findByIdAndUpdate(req.user._id, {$unset: {mentor: ""}})
            await User.findByIdAndUpdate(req.body.mentor, {$pull: {mentees: req.user._id}})
            //Enviar notificación al mentor
            const mentorToSend = await userFindAndPopulate({_id: req.body.mentor})
            if(mentorToSend.notificationsToken) sendNotification([mentorToSend.notificationsToken], `Mentor Me`, "", `${req.user.firstName} ${req.user.lastName} ha dejado de ser tu mentee.`, {type: "cancelMatch", user: mentorToSend})
        }

        const userToSend = await userFindAndPopulate({_id: req.user._id})
        console.log(userToSend)
        res.send(userToSend)
    }catch(err){
        next(err)
    }

}

module.exports = cancelMatch