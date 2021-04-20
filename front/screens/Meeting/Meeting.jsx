import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";

import { useTheme } from "@react-navigation/native";
import {state} from "../../utils/state"
import TabBar from "../../routes/Tab/TabBar";
import styles from "./MeetingStyle";
import CardMeeting from './CardMeeting';
import { useDispatch, useSelector } from "react-redux";
import { getMyMeets } from "../../state/Meetings/thunks";


export default function Meeting({ route, navigation }) {
  
  const { colors } = useTheme();
  const dispatch = useDispatch();
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
      {meetings && meetings.length > 0? (
      <FlatList
        data={meetings}
        keyExtractor={item=>item._id}
        renderItem={(meeting) => {
          const last =
            meeting.item._id === meetings[meetings.length - 1]._id
              ? true
              : false;
          return (
            <View style={styles.progressContainer}>
              <CardMeeting item={meeting.item} last={last} />
            </View>
          );
        }}
      />): null}
    </View>
        <View style={{ flex: 0.08 }}>
        <TabBar state={state} navigation={navigation} />
      </View>
    </View>
  
  );
}
