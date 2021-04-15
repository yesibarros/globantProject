import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
// import {Avatar} from "react-native-paper"
import { AntDesign } from "@expo/vector-icons";

const Tab = ({ color, tab, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.tabText}>{tab.name}</Text>
      {/* <Avatar.Icon
                backgroundColor="#009387"
                color="#ffc78f"
                rounded
                icon={tab.icon}
                size={50}
                style={{ marginBottom: 5 }}
              /> */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  tabText: {
    color: "white",
    fontSize: 15,
    paddingTop: 20,
  },
});

export default Tab;
