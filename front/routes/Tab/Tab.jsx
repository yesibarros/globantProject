import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Text } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Tab = ({ color, tab, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {/* <Avatar.Icon
        backgroundColor="transparent"
        color="white"
        rounded
        icon={icon}
        size={hp("4%")}
      /> */}
      <Text style={styles.tabText}>{tab.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: hp("1%"),
  },
  tabText: {
    color: "white",
    fontSize: hp("2.8%"),
  },
});

export default Tab;
