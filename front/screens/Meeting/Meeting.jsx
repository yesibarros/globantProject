import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { IconButton } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import {state} from "../../utils/state"
import TabBar from "../../routes/Tab/TabBar";
import styles from "./MeetingStyle";
import CardMeeting from './CardMeeting';
import { useDispatch, useSelector } from "react-redux";
// import { getMyMeets } from "../../state/Meetings/thunks";


export default function Meeting({ route, navigation }) {
  const [viewModal, setViewModal] = useState(false);
  const idCurrent = route && route.params && route.params.idCurrent
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const logginUser = useSelector((state) => state.loggedUser.user);
  const id = idCurrent || logginUser._id;
  const meeting = route && route.params && route.params.meeting && [route.params.meeting] //MODIFICARLO POR UN DISPATCH EN USEEFFECT

  // const meetings = useSelector(state => state.meetings)

  
  // useEffect(() => {
    // if(logginUser.role && logginUser.role[0] === 'mentor'){
      //   navigation.navigate('Meetings')
      // }
      //   dispatch(getMyMeets());
      // }, [id]);
      
      // meeting {
      //   "date": 2021-04-23T16:18:16.082Z,
      //   "description": "Hola Draco Malfoy quiero una reunion",
      //   "guest": "6070adac05180748ab03064e",
      //   "host": "60709f5105180748ab03064d",
      //   "link": " ",
      //   "title": "Reunión",
      // }
      
  return (
    <View style={{flex:1}}>
    <ScrollView style={{ flexGrow: 0.92 }}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
        <Text style={styles.titleProgress}>Reuniones</Text>
      {logginUser.role && logginUser.role[0] === 'mentor'
      ?
      <IconButton
        size={35}
        color="#009387"
        icon="plus"
        onPress={() => {
          setViewModal(true)
        }}
      />
      :
      null
      }
      </View>
      <FlatList
        data={meeting}
        renderItem={(meeting) => {
          const last =
            meeting.item._id === meeting[meeting.length - 1]
              ? true
              : false;
          return (
            <View style={styles.progressContainer}>
              <CardMeeting item={meeting.item} last={last} />
            </View>
          );
        }}
      />
    </ScrollView>
        <View style={{ flex: 0.08 }}>
        <TabBar state={state} navigation={navigation} />
      </View>
    </View>
  
  );
}
