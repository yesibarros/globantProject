import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { IconButton } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import {state} from "../../utils/state"
import TabBar from "../../routes/Tab/TabBar";
import styles from "./MeetingStyle";
import CardMeeting from './CardMeeting';
import { useDispatch, useSelector } from "react-redux";
import { getMyMeets } from "../../state/Meetings/thunks";


export default function Meeting({ route, navigation }) {
  const [viewModal, setViewModal] = useState(false);
  const idCurrent = route && route.params && route.params.idCurrent
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const logginUser = useSelector((state) => state.loggedUser.user);
  const id = idCurrent || logginUser._id;
  const meeting = route && route.params && route.params.meeting && [route.params.meeting] //MODIFICARLO POR UN DISPATCH EN USEEFFECT
  console.log(logginUser)
  const meetings = useSelector(state => state.meetings)

  
  useEffect(() => {
    dispatch(getMyMeets());
  }, []);
  
  return (
    <View style={{flex:1}}>
    <View style={{height: "100%", paddingBottom: 55}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
        <Text style={styles.titleProgress}>Reuniones</Text>
      </View>
      <FlatList
        data={meetings}
        renderItem={(meeting) => {
          const last =
            meeting.item._id === meeting[meetings.length - 1]
              ? true
              : false;
          return (
            <View style={styles.progressContainer}>
              <CardMeeting item={meeting.item} last={last} />
            </View>
          );
        }}
      />
    </View>
        <View style={{ flex: 0.08 }}>
        <TabBar state={state} navigation={navigation} />
      </View>
    </View>
  
  );
}
