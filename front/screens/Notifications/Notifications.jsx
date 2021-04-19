import React, {useState, useEffect} from 'react'
import {View, Text, ActivityIndicator} from 'react-native'
import { FlatList } from "react-native-gesture-handler";
import {IconButton} from "react-native-paper"

//STYLE
import styles from "./NotificationsStyle";
import { useTheme } from "@react-navigation/native";

//COMPONENTS
import TabBar from "../../routes/Tab/TabBar";
import NotificationCard from "./NotificationCard"

//REDUX
import { useSelector } from 'react-redux';
import { setMenuBadge } from '../../state/menuBadge/menuBadge'

//UTILS


const Notifications = ({ navigation }) => {
  const loginUser= useSelector(state => state.loggedUser.user)
  
    const [isLoading, setIsLoading] = useState(true)
    const notifications = useSelector(state => state.notifications)

    const { colors } = useTheme();

    useEffect(() => {
    
        setMenuBadge(false)
        setIsLoading(false)
 
    },[notifications])

    if(isLoading){
      return(
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ActivityIndicator
            size='large'
            color='blue'
          />
        </View>
      )
    }
   
    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <IconButton
      icon="menu"
      color={colors.icon}
      size={35}
      style={{position: "absolute"}}
      onPress={() => navigation.openDrawer()}
    />
        <View style={styles.titleContainer}>
          <Text style={[styles.title, {color: colors.text}]}>NOTIFICACIONES</Text>
        </View>     
        {!notifications?.length ? (
          <View style={styles.noNotificationsContainer}>
            <Text style={styles.noNotificationsText}>¡Estás al día! No hay nuevas notificaciones.</Text>
          </View>
        ): (
          <View style={styles.notificationsContainer}>
            <FlatList 
              data={notifications}
              keyExtractor={(item) => item.data.date}
              inverted
              renderItem={({item}) => <NotificationCard notification={item} navigation={navigation}/>}
            />          
        <View style={styles.titleContainer}>
          <Text style={[{color: "#c4c4c4"}]}>Desliza para la izquierda para eliminar</Text>
        </View>
          </View>
        )}
        <View style={{ flex: 0.08 }}></View>
        <TabBar navigation={navigation} />
      </View>
    );
}

export default Notifications
