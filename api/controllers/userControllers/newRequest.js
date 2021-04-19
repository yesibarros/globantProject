const { User, Request } = require("../../models");
const sendNotification = require("../../utils/expoPushNotifications")
const userFindAndPopulate = require("../../utils/userFindAndPopulate")

const newRequest = async (req, res, next) => {
  // console.log(req.body)
  try {
    //SETUP
    const user = await User.findById(req.user._id); //can be either mentee or mentor
    const ments = req.body.mentees || [req.body.mentor];
    let pendingRequestsSent = req.body.mentees
      ? await user.getPendingRequestsSentToMentees()
      : await user.getPendingRequestSentToMentor();
    pendingRequestsSent = pendingRequestsSent.map((ment) => ment.to.toString()); //We only need the ids
    const requestedRole = req.body.mentees ? "mentor" : "mentee";
    const userProperty = req.body.mentees ? "mentees" : "mentor";

    //VALIDATIONS
    if (!ments)
      return res
        .status(400)
        .json({ message: "Ups! You must send mentees or a mentor to add." });
    if (user.role.includes("mentor") && user.mentees.length > 5)
      return res
        .status(400)
        .json({ message: "Ups! You already have 5 mentees." });
    if (
      req.body.mentees &&
      user.role.includes("mentor") &&
      user.mentees.length + ments.length > 5
    )
      return res
        .status(400)
        .json({
          message: `You already have ${
            user.mentees.length
          } mentees, you can only send requests to ${
            5 - user.mentees.length
          } more.`,
        });
    if (req.body.mentor && pendingRequestsSent.length == 1)
      return res
        .status(400)
        .json({
          message:
            "You already sent a request to a mentor. Cancel it to send a new one.",
        });
    if (!user.role.includes("mentor") && req.body.mentees)
      return res
        .status(400)
        .json({ message: "Ups! You can't add mentees to a mentee." });

    //Normalize ments
    let normalizedMents = ments.map((ment) => {
      return typeof ment == "object"
        ? { _id: ment._id.toString(), message: ment.message || "" }
        : { _id: ment.toString(), message: "" };
    });

    if (req.body.mentees)
      normalizedMents = normalizedMents.filter(
        (ment) =>
          !user[userProperty].includes(ment._id) &&
          !pendingRequestsSent.includes(ment._id)
      );
    if (req.body.mentor)
      normalizedMents = normalizedMents.filter(
        (ment) =>
          user[userProperty] != ment._id &&
          !pendingRequestsSent.includes(ment._id)
      );

    //Get only the ids
    const mentsIds = normalizedMents.map((ment) => ment._id);
    if (mentsIds.length) {
      //Find ments instances to save in request
      const foundMents = await User.find({ _id: { $in: mentsIds } });
      //Build requests
      const requests = [];
      foundMents.forEach((ment) => {
        const message = normalizedMents.find(
          (m) => m._id == ment._id.toString()
        ).message;
        requests.push({
          from: user,
          to: ment,
          fromRole: requestedRole,
          message: message.length
            ? message
            : `¡Hola! Me gustaría ser tu ${requestedRole}`,
        });
      });
      //Create requests
      await Request.create(requests);
      //Increase pending requests in ments
      await User.updateMany(
        { _id: { $in: mentsIds } },
        { $inc: { receivedPendingRequests: 1 } }
      );

      //SEND NOTIFICATIONS TO MENTS
      
      // Array de tokens, title, subtitle, body, data, sound
     if(foundMents[0].notificationsToken){
        const mentToSend = await userFindAndPopulate({_id: foundMents[0]._id}) //Esto funciona para un solo usuario, corregir se se va a usar un array de usuarios
        sendNotification([foundMents[0].notificationsToken], `Mentor Me`, "", `Recibiste una nueva solicitud de ${user.firstName} ${user.lastName}`, {type: "newRequest", user: mentToSend._id , receivedPendingRequests: mentToSend.receivedPendingRequests, date: (new Date()).toString()})
      }

    }
    //Send all pending requests from user
    const allPedningRequests = await user.getPendingRequests();
    res.send(allPedningRequests);
  } catch (err) {
    next(err);
  }
};

module.exports = newRequest;
