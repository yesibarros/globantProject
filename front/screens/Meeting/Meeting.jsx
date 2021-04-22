// REACT
import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { IconButton } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { state } from "../../utils/state";
import { useDispatch, useSelector } from "react-redux";

// SCREENS
import TabBar from "../../routes/Tab/TabBar";
import styles from "./MeetingStyle";
import CardMeeting from "./CardMeeting";
import { getMyMeets } from "../../state/Meetings/thunks";
import Header from "../header/Header";

export default function Meeting({ route, navigation }) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const meetings = useSelector((state) => state.meetings);

  useEffect(() => {
    dispatch(getMyMeets());
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#009387" }}>
      <Header navigation={navigation} />

      <View
        style={{
          backgroundColor: "white",
          height: hp("73.8%"),
          borderTopLeftRadius: 60,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.titleProgress}>REUNIONES</Text>
        </View>
        {meetings && meetings.length > 0 ? (
          <FlatList
            data={meetings}
            keyExtractor={(item) => item._id}
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
          />
        ) : (
          <View style={styles.n}>
            <Text style={styles.nText}>No tienes reuniones programadas</Text>
          </View>
        )}
      </View>
      <TabBar navigation={navigation} />
    </View>
  );
}
