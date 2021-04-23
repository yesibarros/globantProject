//REACT
import React from "react";

//REACT-NATIVE
import { StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//REACT-NATIVE-PAPER
import { Text } from "react-native-paper";

const Tab = ({ tab, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
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
