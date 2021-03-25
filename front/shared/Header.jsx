import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./headerStyle";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function Header() {
  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <View style={styles.droidSafeArea}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#ff9c38", "#ffc78f"]}
          style={styles.background}
        >
          <Text style={styles.headerText}>MENTOR ME</Text>
        </LinearGradient>
      </View>
    </View>
  );
}
