//REACT
import React from "react";

//REACT-NATIVE
import { View, Text } from "react-native";

//SHARED
import Header from "../../shared/Header";

//STYLE
import styles from "./homeStyles";

export default function Home() {
  return (
    <View style={styles.header}>
      <Header />
      <View>
        <Text style={styles.headerText}>HOME</Text>
      </View>
    </View>
  );
}
