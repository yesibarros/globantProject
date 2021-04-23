const { User, Request } = require("../../models");
const userFindAndPopulate = require("../../utils/userFindAndPopulate");
const sendNotification = require("../../utils/expoPushNotifications");

const acceptRequest = async (req, res, next) => {
  let user = await User.findById(req.user._id); //can be either mentee or mentor
  const ReceivedRequests = req.body.request;
  const requestsIds = ReceivedRequests.map((request) => request.toString());
  try {
    const requests = await Request.find({ _id: requestsIds });
    for (let i = 0; i < requests.length; i++) {
      if (requests[i].to.toString() == user._id.toString()) {
        let done = false;
        if (requests[i].fromRole == "mentee") {
          if (user.mentees.length > 5)
            return res
              .status(400)
              .json({
                message:
                  "You have reached the maximum of 5 mentees, you can't accept more.",
              });

          await User.findOneAndUpdate(
            { _id: user._id },
            {
              $push: { mentees: requests[i].from },
              $inc: { receivedPendingRequests: -1 },
            }
          );
          await User.findOneAndUpdate(
            { _id: requests[i].from },
            { $set: { mentor: user._id } }
          );
          done = true;
        }

        if (requests[i].fromRole == "mentor") {
          if (user.mentor)
            return res
              .status(400)
              .json({
                message: "You can't accept a mentor while already having one.",
              });

          await User.findOneAndUpdate(
            { _id: user._id },
            {
              $set: { mentor: requests[i].from },
              $inc: { receivedPendingRequests: -1 },
            }
          );
          await User.findOneAndUpdate(
            { _id: requests[i].from },
            { $push: { mentees: user._id } }
          );
          done = true;
        }

        await Request.updateMany(
          { _id: requestsIds, status: "pending" },
          { status: "accepted" },
          { new: true }
        );
        //Send meet's notificacions
        if (done) {
          const mentToSend = await userFindAndPopulate({
            _id: requests[i].from,
          });
          if (mentToSend.notificationsToken)
            sendNotification(
              [mentToSend.notificationsToken],
              `Mentor Me`,
              "",
              `¡${user.firstName} ${user.lastName} ha haceptado tu solicitud!`,
              {
                type: "acceptedRequest",
                user: mentToSend._id,
                receivedPendingRequests: mentToSend.receivedPendingRequests,
                date: new Date().toString(),
              }
            );
        }
      }
    }

    //Send user and pending requests
    user = await userFindAndPopulate({ _id: user._id });
    const pendingRequests = await user.getPendingRequests();
    res.send({ user, pendingRequests });
  } catch (err) {
    next(err);
  }
};

module.exports = acceptRequest;
