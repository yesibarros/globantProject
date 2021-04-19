import React, { useState } from "react";
import { View, StyleSheet, Dimensions, Animated } from "react-native";
import Tab from "./Tab";
import { LinearGradient } from "expo-linear-gradient";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("screen");

const TabBar = ({ navigation }) => {
  const [selected, setSelected] = useState("Home");
  const loginUser = useSelector(state=> state.loggedUser.user)
  const state = {
    routes: [
      {
        name: "Mi perfil",
      },
      
      {
        name: loginUser.role == "admin" ? "Admin" : loginUser.role == "mentee" ? "Progress" : "Solicitudes",
      },
      {
        name: loginUser.role == "mentor" ? "Mis mentees": "Mi mentor",
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
const showTabs= [routes[0], routes[1], routes[2]]


  return (
    <View style={styles.wrapper}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#ffc78f", "#ff9c38"]}
        style={styles.background}
      />
      {routes.map((route, index) => (
        <Tab
          tab={route}
          onPress={() => handlePress(route.name, index)}
          key={index}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    bottom: 0,
    height: 90,
    width,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 25,
    height: 100,
  },
});

export default TabBar;
