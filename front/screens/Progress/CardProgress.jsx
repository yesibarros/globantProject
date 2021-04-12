import React, { useState } from "react";
import { View, Alert, TouchableOpacity, Text } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Avatar,
  IconButton,
  Colors,
  ActivityIndicator,
} from "react-native-paper";
import { primaryGreen } from "../../utils/Colors";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/loggedUser/actions";
import { cancelRequest, acceptRequest } from "../../state/requests/Thunks";
import styles from "./cardProgressStyle";

const CardProgress = ({ item, last }) => {
  const dispatch = useDispatch();
  const border = last ? "transparent" : "lightgrey";
  // objectiveName
  // description
  // order
  // status: (list con estado, )
  return (
    <View style={[styles.container, { borderColor: border }]}>
      <Avatar.Icon
        size={55}
        color="#009387"
        icon="check-bold"
        style={styles.avatar}
      ></Avatar.Icon>
      <Card style={styles.card}>
        <Card.Title
          title={item.objectiveName}
          subtitle={item.description}
          right={(props) => (
            <IconButton
              {...props}
              size={35}
              color="#009387"
              icon="eye-plus"
              onPress={() => {}}
            />
          )}
        />
        <Card.Content></Card.Content>
      </Card>
    </View>
  );
};

export default CardProgress;
