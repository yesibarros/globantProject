// REACT
import React, { useEffect } from "react";

//REACT-NATIVE
import { View, Text, FlatList } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
import { getMyMeets } from "../../state/Meetings/thunks";

// ROUTES
import TabBar from "../../routes/Tab/TabBar";

//STYLE
import styles from "./MeetingStyle";

//SCREEN
import CardMeeting from "./CardMeeting";
import Header from "../header/Header";

export default function Meeting({ navigation }) {
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
          backgroundColor: colors.background,
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
          <Text style={[styles.titleProgress, { color: colors.text }]}>
            REUNIONES
          </Text>
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
