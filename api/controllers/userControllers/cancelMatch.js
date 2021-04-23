const { User } = require("../../models");
const userFindAndPopulate = require("../../utils/userFindAndPopulate");
const sendNotification = require("../../utils/expoPushNotifications");

const cancelMatch = async (req, res, next) => {
  try {
    if (req.body.mentee) {
      await User.findByIdAndUpdate(req.body.mentee, { $unset: { mentor: "" } });
      await User.findByIdAndUpdate(req.user._id, {
        $pull: { mentees: req.body.mentee },
      });
      //Send notification to mentee
      const menteeToSend = await userFindAndPopulate({ _id: req.body.mentee });
      if (menteeToSend.notificationsToken && req.body.messageEndOfMentoring) {
        sendNotification(
          [menteeToSend.notificationsToken],
          `Mentor Me`,
          "",
          `${req.body.messageEndOfMentoring}`,
          {
            type: "cancelMatch",
            user: menteeToSend._id,
            date: String(new Date()),
          }
        );
      } else if (menteeToSend.notificationsToken) {
        sendNotification(
          [menteeToSend.notificationsToken],
          `Mentor Me`,
          "",
          `${req.user.firstName} ${req.user.lastName} ha dejado de ser tu mentor.`,
          {
            type: "cancelMatch",
            user: menteeToSend._id,
            date: String(new Date()),
          }
        );
      }
    }
    if (req.body.mentor) {
      await User.findByIdAndUpdate(req.user._id, { $unset: { mentor: "" } });
      await User.findByIdAndUpdate(req.body.mentor, {
        $pull: { mentees: req.user._id },
      });
      //Enviar notificación al mentor
      const mentorToSend = await userFindAndPopulate({ _id: req.body.mentor });
      if (mentorToSend.notificationsToken)
        sendNotification(
          [mentorToSend.notificationsToken],
          `Mentor Me`,
          "",
          `${req.user.firstName} ${req.user.lastName} ha dejado de ser tu mentee.`,
          {
            type: "cancelMatch",
            user: mentorToSend._id,
            date: String(new Date()),
          }
        );
    }

    const userToSend = await userFindAndPopulate({ _id: req.user._id });
    res.send(userToSend);
  } catch (err) {
    next(err);
  }
};

module.exports = cancelMatch;
