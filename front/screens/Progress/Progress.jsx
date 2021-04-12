import React from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import { Title } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

import styles from "./progressStyle";
import CardProgress from "./CardProgress";
import { SafeAreaView } from "react-native-safe-area-context";
// objectiveName
// description
// order
// status: (list con estado, )

export default function Progress() {
  const { colors } = useTheme();
  const objectives = [
    {
      _id: 1,
      objectiveName: "objetivo1",
      description: "hacer el objetivo",
      status: "pendiente",
    },
    {
      _id: 2,
      objectiveName: "objetivo2",
      description: "hacer el objetivoooooooooooooooo",
      status: "completado",
    },
    {
      _id: 3,
      objectiveName: "objetivo3",
      description: "hacerloooooo",
      status: "pendiente",
    },
    {
      _id: 4,
      objectiveName: "objetivo4",
      description: "hacer el objetivo o no hacerlo",
      status: "pendiente",
    },
    {
      _id: 5,
      objectiveName: "objetivo4",
      description: "hacer el objetivo o no hacerlo",
      status: "pendiente",
    },
    {
      _id: 6,
      objectiveName: "objetivo4",
      description: "hacer el objetivo o no hacerlo",
      status: "pendiente",
    },
    {
      _id: 7,
      objectiveName: "objetivo4",
      description: "hacer el objetivo o no hacerlo",
      status: "pendiente",
    },
    {
      _id: 8,
      objectiveName: "objetivo4",
      description: "hacer el objetivo o no hacerlo",
      status: "pendiente",
    },
    {
      _id: 9,
      objectiveName: "objetivo4",
      description: "hacer el objetivo o no hacerlo",
      status: "pendiente",
    },
  ];
  return (
    <ScrollView style={{ flexGrow: 0.92 }}>
      <Text style={styles.titleProgress}>Objetivos</Text>

      <FlatList
        data={objectives}
        renderItem={(obj) => {
          const last =
            obj.item._id === objectives[objectives.length - 1]._id
              ? true
              : false;
          return (
            <View style={styles.progressContainer}>
              <CardProgress item={obj.item} last={last} />
            </View>
          );
        }}
      />
    </ScrollView>
  );
}
