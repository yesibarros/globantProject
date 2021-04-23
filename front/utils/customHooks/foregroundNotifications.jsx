// REACT REDUX
import { useSelector, useDispatch } from "react-redux";
import { setReceivedPendingRequests } from "../../state/loggedUser/actions";
import { getProfile } from "../../state/loggedUser/thunks";
import { setMenuBadge } from "../../state/menuBadge/menuBadge";
import { newNotification } from "../../state/Notifications/actions";
import { getObjectives } from "../../state/objetivos/thunks";
import { getRequests } from "../../state/requests/Thunks";
import { getMyMeets } from "../../state/Meetings/thunks";

const useForegroundNotifications = () => {
  const loginUser = useSelector((state) => state.loggedUser.user);
  const dispatch = useDispatch();

  return (Notifications) =>
    Notifications.addNotificationReceivedListener((notification) => {
      const {
        type,
        user,
        receivedPendingRequests,
      } = notification.request.content.data;
      if (user == loginUser._id) {
        dispatch(newNotification(notification.request.content));
        dispatch(setMenuBadge(true));

        switch (type) {
          case "acceptedRequest":
            dispatch(getProfile());
          case "canceledRequest":
          case "rejectedRequest":
          case "newRequest":
            dispatch(getRequests());
            dispatch(setReceivedPendingRequests(receivedPendingRequests));
            break;
          case "cancelMatch":
            dispatch(getProfile());
            break;
          case "goals":
            dispatch(getObjectives(user));
            break;
          case "meeting":
            dispatch(getMyMeets());
            break;
        }
      }
    });
};

export default useForegroundNotifications;
