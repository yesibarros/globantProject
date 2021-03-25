import React from "react";
import {
  View,
  Text,
  SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./headerStyle";

export default function Header() {

  return (
    
      <SafeAreaView style={styles.droidSafeArea}>
        <LinearGradient
          // Background Linear Gradient
          colors={["#ff9c38", "#ffc78f"]}
          style={styles.background}
        >
          <Text style={styles.headerText}>MENTOR ME</Text>
        </LinearGradient>
      </SafeAreaView>
    
  );
}
