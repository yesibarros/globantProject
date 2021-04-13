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
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      status: "pendiente",
      feedback: "mejorable",
    },
    {
      _id: 2,
      objectiveName: "objetivo2",
      description:
        "Quos sunt eligendi rem iste et, nihil delectus dicta commodi, tempora id voluptatem vitae, eaque amet doloribus quibusdam saepe! Reprehenderit, quae sed.",
      status: "completado",
      feedback: "mejorable",
    },
    {
      _id: 3,
      objectiveName: "objetivo3",
      description:
        "Quos sunt eligendi rem iste et, nihil delectus dicta commodi, tempora id voluptatem vitae, eaque amet doloribus quibusdam saepe! Reprehenderit, quae sed.",
      status: "pendiente",
      feedback: "podria mejorar algo pero excelente",
    },
    {
      _id: 4,
      objectiveName: "objetivo4",
      description:
        "Quos sunt eligendi rem iste et, nihil delectus dicta commodi, tempora id voluptatem vitae, eaque amet doloribus quibusdam saepe! Reprehenderit, quae sed.",
      status: "pendiente",
      feedback: "podria mejorar algo pero excelente",
    },
    {
      _id: 5,
      objectiveName: "objetivo4",
      description:
        "Quos sunt eligendi rem iste et, nihil delectus dicta commodi, tempora id voluptatem vitae, eaque amet doloribus quibusdam saepe! Reprehenderit, quae sed.Quos sunt eligendi rem iste et, nihil delectus dicta commodi, tempora id voluptatem vitae, eaque amet doloribus quibusdam saepe! Reprehenderit, quae sed.",
      status: "pendiente",
      feedback: "podria mejorar algo pero excelente",
    },
    {
      _id: 6,
      objectiveName: "objetivo4",
      description:
        "Quos sunt eligendi rem iste et, nihil delectus dicta commodi, tempora id voluptatem vitae, eaque amet doloribus quibusdam saepe! Reprehenderit, quae sed.",
      status: "pendiente",
      feedback: "volve a hacer el bootcamp",
    },
    {
      _id: 7,
      objectiveName: "objetivo4",
      description:
        "Quos sunt eligendi rem iste et, nihil delectus dicta commodi, tempora id voluptatem vitae, eaque amet doloribus quibusdam saepe! Reprehenderit, quae sed.",
      status: "pendiente",
      feedback: "volve a hacer el bootcamp",
    },
    {
      _id: 8,
      objectiveName: "objetivo4",
      description: "hacer el objetivo o no hacerlo",
      status: "pendiente",
      feedback: "te falta el intro",
    },
    {
      _id: 9,
      objectiveName: "objetivo4",
      description: "hacer el objetivo o no hacerlo",
      status: "pendiente",
      feedback: "te falta el intro",
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
