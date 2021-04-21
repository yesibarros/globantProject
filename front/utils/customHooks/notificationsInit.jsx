import React from 'react'

//Expo - notificaciones
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";

//Redux
import {useSelector, useDispatch} from "react-redux"
import {updateProfile} from "../../state/loggedUser/thunks"

const useNotificationsInit = () => {
    const loginUser = useSelector(state => state.loggedUser.user)
    const dispatch = useDispatch()

    return () => Permissions.getAsync(Permissions.NOTIFICATIONS)
    .then((statusObj) => {
      if (statusObj.status !== "granted") {
        return Permissions.askAsync(Permissions.NOTIFICATIONS);
      }
      return statusObj;
    })
    // .then((response) => {
    //   if (response.status !== "granted") {
    //     alert("No podremos enviarte notificaciones.");
    //     throw new Error("Permission not granted");
    //   }
    // })
    .then(() => {
     
      return Notifications.getExpoPushTokenAsync();
    })
    .then((response) => {
      const token = response.data;
      console.log("getting token", token)
      dispatch(updateProfile({id: loginUser._id, notificationsToken: token}));
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
    
}

export default useNotificationsInit


