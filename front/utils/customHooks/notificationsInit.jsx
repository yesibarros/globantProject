// EXPO
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

// REACT REDUX
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../state/loggedUser/thunks";

const useNotificationsInit = () => {
  const loginUser = useSelector((state) => state.loggedUser.user);
  const dispatch = useDispatch();

  return () =>
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then(() => {
        return Notifications.getExpoPushTokenAsync();
      })
      .then((response) => {
        const token = response.data;
        dispatch(
          updateProfile({ id: loginUser._id, notificationsToken: token })
        );
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
};

export default useNotificationsInit;
