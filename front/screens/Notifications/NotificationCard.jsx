import React from 'react'
import { Avatar, Card } from 'react-native-paper';
import { TouchableOpacity } from 'react-native'

import Swipeout from 'react-native-swipeout';

//STYLES
import styles from './NotificationsCardSyle'
import {primaryGreen} from "../../utils/Colors"

//UTILS
import formatDate from '../../utils/formatDate'

//REDUX
import { useDispatch } from 'react-redux'
import { removeNotification } from '../../state/Notifications/actions'

const NotificationCard = ({notification, navigation}) => {

    const dispatch = useDispatch()

    const type = notification.data.type
    const icon = (t)=>{
        switch(t){
            case "goals": return "rocket-launch-outline"
            case "newRequest": return "account-plus-outline"
            case "acceptRequest": return "account-check-outline"
            case "canceledRequest": return "account-cancel-outline"
            case "rejectedRequest": return "account-remove-outline"
            case "cancelMatch": return "account-minus-outline"
            default: return "bell-outline"
        }
    }

   const swipeSettings = {
    autoClose: true,
    backgroundColor: "transparent",
    right: [{text: "Eliminar", color: "red", backgroundColor: "transparent", onPress:()=>{dispatch(removeNotification(notification.data.date))}}]
   }

   const handleTouch = (t)=>{
        switch(t){
            case "goals": return navigation.navigate("Progress")
            case "newRequest": return navigation.navigate("Requests")
            case "acceptRequest": return navigation.navigate("TabBarNavigator")
            case "canceledRequest": return navigation.navigate("Requests")
            case "rejectedRequest": return navigation.navigate("Requests")
            case "cancelMatch": return navigation.navigate("TabBarNavigator")
            default: return navigation.navigate("TabBarNavigator")
        }
   }

    return (
        <Swipeout {...swipeSettings}>
            <Card style={styles.card}>
                <TouchableOpacity onPress={()=>handleTouch(type)}>
                <Card.Title
                    subtitle={formatDate(notification.data.date)}
                    titleStyle={styles.title}
                    titleNumberOfLines={2}
                    title={notification.body}
                    left={(props) => <Avatar.Icon size={40} style={styles.left} color={primaryGreen} icon={icon(type)} />}
                />
                </TouchableOpacity>
            </Card>
        </Swipeout>
    )
}

export default NotificationCard
