import React, { useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import { Title } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

import styles from "./progressStyle";
import CardProgress from "./CardProgress";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { getObjectives } from "../../state/objetivos/thunks";

export default function Progress({ idCurrent }) {
  const { colors } = useTheme();

  const dispatch = useDispatch();
  const logginUser = useSelector((state) => state.loggedUser.user);
  const goals = useSelector((state) => state.objetivos);
  const id = idCurrent || logginUser._id;

  useEffect(() => {
    dispatch(getObjectives(id));
  }, [id]);

  console.log("goals", goals);
  return (
    <ScrollView style={{ flexGrow: 0.92 }}>
      <Text style={styles.titleProgress}>Objetivos</Text>
      {/* 
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
      /> */}
    </ScrollView>
  );
}
