//REACT
import React, { useState } from "react";

//REACT-NATIVE
import KeyboardSpacer from "react-native-keyboard-spacer";
import { View, TouchableOpacity, Text, Modal } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//REACT-NATIVE-PAPER
import { Card, Button, Avatar, IconButton } from "react-native-paper";

//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import { deleteMeets, getMyMeets } from "../../state/Meetings/thunks";

//STYLE
import styles from "./CardMeetingStyle";

//EXPO
import { BlurView } from "expo-blur";
import * as Linking from "expo-linking";

const CardMeeting = ({ item, last }) => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser.user);
  const [viewModal, setViewModal] = useState(false);
  const border = last ? "transparent" : "lightgrey";

  const name =
    loggedUser?.firstName == item?.guest?.firstName
      ? item?.host?.firstName
      : item?.guest?.firstName;

  const handleCancel = () => {
    setViewModal(false);
    dispatch(deleteMeets(item._id)).then(() => dispatch(getMyMeets()));
  };

  return (
    <View style={[styles.container, { borderColor: border }]}>
      <Avatar.Icon
        size={hp("7%")}
        color="#009387"
        icon="calendar"
        style={styles.avatar}
      ></Avatar.Icon>
      <Card style={styles.card}>
        <Card.Title
          title={`Reunión con ${name}`}
          subtitle={item.description}
          right={(props) => (
            <IconButton
              {...props}
              size={hp("4%")}
              color="#009387"
              icon="eye-plus"
              onPress={() => {
                setViewModal(true);
              }}
            />
          )}
        />
      </Card>

      {/* <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
        }}
        enabled={Platform.OS === "android"}
        keyboardVerticalOffset={80}
      > */}

      <Modal visible={viewModal} transparent={true} animationType="slide">
        <BlurView
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
          intensity={110}
          tint="dark"
        >
          <View style={styles.viewContainer}>
            <View
              style={{
                height: hp("10%"),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: hp("3.7%"),
                  fontWeight: "bold",
                  alignContent: "center",
                  textTransform: "uppercase",
                }}
              >
                Destinatario: {item?.guest?.firstName}
              </Text>
            </View>

            <Card style={styles.empty}>
              <ScrollView style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: hp("3%"),
                    padding: hp("2%"),
                  }}
                >
                  {item.description}
                </Text>
              </ScrollView>
            </Card>
            <View
              style={{
                height: hp("10%"),
                justifyContent: "space-around",
              }}
            >
              <Text style={{ fontSize: hp("2.2%"), paddingLeft: hp("2%") }}>
                Fecha de reunión: {item.date.split("T").join("\nHora: ")}
              </Text>
            </View>
            <View
              style={{
                height: hp("6%"),
                justifyContent: "space-around",
              }}
            >
              <Text
                style={{ fontSize: 20, paddingLeft: 20 }}
                onPress={() => Linking.openURL(`${item.link}`)}
              >
                Link de reunión: {item.link}
              </Text>
            </View>
            <TouchableOpacity />

            <View
              style={{
                height: hp("7%"),
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#009387",
                  width: wp("60%"),
                  height: hp("5%"),
                  justifyContent: "center",
                }}
                onPress={handleCancel}
              >
                <Text
                  style={{
                    fontSize: hp("2%"),
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Cancelar reunión
                </Text>
              </Button>
              <Button
                style={{
                  backgroundColor: "#009387",
                  width: wp("20%"),
                  height: hp("5%"),
                  justifyContent: "center",
                }}
                onPress={() => {
                  setViewModal(false);
                }}
              >
                <Text
                  style={{
                    fontSize: hp("2%"),
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Ok
                </Text>
              </Button>
            </View>
          </View>
        </BlurView>
        <KeyboardSpacer />
      </Modal>
    </View>
  );
};

export default CardMeeting;
