import React from "react";
import {
  View,
  Text,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./headerStyle";

export default function Header() {

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
