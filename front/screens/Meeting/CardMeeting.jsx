import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Modal,
  KeyboardAvoidingView,
} from "react-native";
import {
  Card,
  Button,
  Avatar,
  IconButton,
} from "react-native-paper";
import { primaryGreen } from "../../utils/Colors";
import { useSelector, useDispatch } from "react-redux";
import styles from "./CardMeetingStyle";
import { ScrollView } from "react-native-gesture-handler";
import { deleteMeets, getMyMeets } from "../../state/Meetings/thunks"

const CardMeeting = ({ item, last }) => {
  const dispatch = useDispatch()
  const loggedUser = useSelector((state) => state.loggedUser.user);
  const [viewModal, setViewModal] = useState(false);
  const border = last ? "transparent" : "lightgrey";

   
  const name = loggedUser.firstName == item.guest.firstName ? item.host.firstName : item.guest.firstName

  const handleCancel = ()=>{
    setViewModal(false)
    dispatch(deleteMeets(item._id)).then(()=>dispatch(getMyMeets()))
  }
  
  return (
    <View style={[styles.container, { borderColor: border }]}>
      <Avatar.Icon
        size={55}
        color="#009387"
        icon='calendar'
        style={styles.avatar}
      ></Avatar.Icon>
      <Card style={styles.card}>
        <Card.Title
          title={`Reunión con ${name}`}
          subtitle={item.description}
          right={(props) => (
            <IconButton
              {...props}
              size={35}
              color="#009387"
              icon="eye-plus"
              onPress={() => {
                setViewModal(true);
              }}
            />
          )}
        />
      </Card>

      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flex: 1,
        }}
        enabled={Platform.OS === "android"}
        keyboardVerticalOffset={80}
      >
        <Modal visible={viewModal} transparent={true} animationType="slide">
          <View style={styles.viewContainer}>
            <View
              style={{
                flex: 0.3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  fontWeight: "bold",
                  alignContent: "center",
                  textTransform: "uppercase",
                  marginLeft: 10
                }}
              >
                Destinatario: {item.guest.firstName}
              </Text>
            </View>

            <Card style={styles.empty}>
              <ScrollView>
                <Text
                  style={{
                    fontSize: 20,
                    padding: 10,
                  }}
                >
                  {item.description}
                </Text>
              </ScrollView>
            </Card>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "space-around",
                }}
              >
                <Text style={{ fontSize: 20, paddingLeft: 20 }}>
                  Fecha de reunión: {item.date.toString()}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.7,
                  justifyContent: "space-around",
                }}
              >
                <Text style={{ fontSize: 20, paddingLeft: 20 }}>
                  Link de reunión: {item.link}
                </Text>
              </View>
            <TouchableOpacity />

            <View
              style={{
                flex: 0.4,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Button
                style={{
                  backgroundColor: "#009387",
                  width: "40%",
                  height: "40%",
                  justifyContent: "center",
                }}
                onPress={handleCancel}
              >
                <Text
                  style={{ fontSize: 22, color: "white", textAlign: "center" }}
                >
                  Cancelar reunión
                </Text>
              </Button>
              <Button
                style={{
                  backgroundColor: "#009387",
                  width: "40%",
                  height: "40%",
                  justifyContent: "center",
                }}
                onPress={() => {
                  setViewModal(false);
                }}
              >
                <Text
                  style={{ fontSize: 22, color: "white", textAlign: "center" }}
                >
                  Ok
                </Text>
              </Button>

            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
    </View>
  );
};

export default CardMeeting;
