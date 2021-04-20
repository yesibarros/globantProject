import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setReceivedPendingRequests } from '../../state/loggedUser/actions'
import { getProfile } from '../../state/loggedUser/thunks'
import { setMenuBadge } from '../../state/menuBadge/menuBadge'
import { newNotification } from '../../state/Notifications/actions'
import { getObjectives } from '../../state/objetivos/thunks'
import { getRequests } from '../../state/requests/Thunks'
import { getMyMeets } from '../../state/Meetings/thunks'

const useBackgroundNotifications = () => {
    const loginUser = useSelector((state) => state.loggedUser.user);
    const dispatch = useDispatch();

    return (Notifications, navigation) => Notifications.addNotificationResponseReceivedListener(
      ({notification}) => {
        const {type, user, receivedPendingRequests} = notification.request.content.data
        if(user == loginUser._id){
          
          dispatch(newNotification(notification.request.content))
          dispatch(setMenuBadge(true))

          switch(type){
            case "acceptedRequest":
              dispatch(getProfile())
            case "canceledRequest":
            case "rejectedRequest":
            case "newRequest":
              dispatch(getRequests())  
              dispatch(setReceivedPendingRequests(receivedPendingRequests)).then(()=>navigation.navigate("Notifications"))
              break;
            case "cancelMatch":
              dispatch(getProfile()).then(()=>{navigation.navigate("Notifications")})
              break;
            case "goals":
              dispatch(getObjectives(user)).then(()=>navigation.navigate("Notifications"))
              break;
            case "meeting":
              dispatch(getMyMeets()).then(()=>navigation.navigate("Meeting"))
              break;
          }
        }
      }
      );
}

export default useBackgroundNotifications