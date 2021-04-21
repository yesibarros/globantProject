import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import Tab from "./Tab";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const TabBar = ({ navigation }) => {
  const [selected, setSelected] = useState("Home");
  const loginUser = useSelector((state) => state.loggedUser.user);
  const state = {
    routes: [
      {
        name: "Mi perfil",
      },

      {
        name:
          loginUser.role == "admin"
            ? "Admin"
            : loginUser.role == "mentee"
            ? "Progress"
            : "Solicitudes",
      },
      {
        name: loginUser.role == "mentor" ? "Mis mentees" : "Mi mentor",
      },
    ],
    stale: false,
    type: "tab",
  };
  const { routes } = state;
  //console.log("STATE", state)
  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };
  const icnoName = ["account-box-outline", "progress-upload", "school-outline"];
  const showTabs = [routes[0], routes[1], routes[2]];

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#ffc78f", "#ff9c38"]}
        style={styles.background}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {routes.map((route, index) => (
            <Tab
              tab={route}
              onPress={() => handlePress(route.name, index)}
              key={index}
              icon={icnoName[index]}
            />
          ))}
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "yellow",
    width: wp("100%"),
  },
  background: {
    height: hp("6%"),
  },
});

export default TabBar;
