// REACT
import React, { useState } from "react";

// REACT REDUX
import { useSelector } from "react-redux";

// REACT NATIVE
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  ActivityIndicator,
} from "react-native";
import { StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";
import DateTimePicker from "@react-native-community/datetimepicker";

// UTILS
import { primaryGreen } from "../../../utils/Colors";

// EXPO
import { BlurView } from "expo-blur";

const SendMeeting = ({
  mentor,
  mentee,
  setModalMeeting,
  handleSendMeeting,
  isLoading,
  closeMenu,
}) => {
  const loggedUser = useSelector((state) => state.loggedUser.user);
  const { colors } = useTheme();
  const firstName = mentee?.firstName;
  const lastName = mentee?.lastName;
  const id = mentee?._id;
  const [messageDefault, setMessageDefault] = useState(
    `Hola ${firstName ? firstName : loggedUser.mentor.firstName} ${
      lastName ? lastName : loggedUser.mentor.lastName
    } quiero una reunion`
  );
  const [inputMessage, setInputMessage] = useState(messageDefault);
  const [inputTitle, setInputTitle] = useState("Motivo de reunion");
  const [inputLink, setInputLink] = useState("Link");
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [dateMeeting, setDateMeeting] = useState("");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    setDateMeeting(selectedDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const sendInfoMeeting = () => {
    let meetingInfo = {
      host: loggedUser?._id,
      guest: loggedUser?.mentor?._id ? loggedUser.mentor._id : id,
      title: inputTitle,
      description: inputMessage === " " ? messageDefault : inputMessage,
      date: dateMeeting,
      link: inputLink,
    };

    if (dateMeeting == "" || inputTitle == "" || inputLink == " ") {
      alert(
        "Para establecer una reunión debes especificar fecha y hora de reunion."
      );
    } else {
      alert("Solicitud enviada");
      return handleSendMeeting(meetingInfo);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => setModalMeeting(false)}>
      <BlurView style={styles.container} intensity={100} tint="dark">
        <View style={[styles.surface, { backgroundColor: colors.background }]}>
          <View
            style={[styles.surface, { backgroundColor: colors.background }]}
          >
            <Text style={[styles.textMsj, { color: colors.text }]}>
              Tema a tratar
            </Text>
            <TextInput
              style={[
                {
                  color: "#858585",
                  fontSize: 15,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                },
              ]}
              multiline
              value={inputTitle}
              onChangeText={(text) => setInputTitle(text)}
            />
            <Text style={[styles.textMsj, { color: colors.text }]}>
              Escribe un mensaje
            </Text>
            <TextInput
              style={[
                {
                  color: "#858585",
                  fontSize: 15,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                },
              ]}
              multiline
              value={inputMessage}
              onChangeText={(text) => setInputMessage(text)}
            />
            <Text style={[styles.textMsj, { color: colors.text }]}>
              Link a reunion
            </Text>
            <TextInput
              style={[
                {
                  color: "#858585",
                  fontSize: 15,
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                },
              ]}
              multiline
              value={inputLink}
              onChangeText={(text) => setInputLink(text)}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <Button onPress={showDatepicker} title="Establecer fecha" />
              </View>
              <View style={styles.button}>
                <Button onPress={showTimepicker} title="Establecer hora" />
              </View>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                dateFormat="day month year"
                timeZoneOffsetInMinutes={60}
                timeZoneOffsetInSeconds={3600}
                onChange={onChange}
              />
            )}
          </View>

          <View style={styles.textContainer}>
            <Text style={[styles.text, { color: colors.text }]}>
              ¿Confirmas reunioń con{" "}
              {firstName ? firstName : loggedUser?.mentor?.firstName}{" "}
              {lastName ? lastName : loggedUser.mentor?.lastName}?
            </Text>
          </View>
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="cancelar"
                color="gray"
                onPress={() => setModalMeeting(false)}
              />
            </View>
            <View style={styles.button}>
              {!isLoading ? (
                <Button
                  title="aceptar"
                  color={primaryGreen}
                  onPress={() => {
                    setModalMeeting(false);
                    closeMenu();
                    sendInfoMeeting();
                  }}
                />
              ) : (
                <View style={styles.spinner}>
                  <ActivityIndicator size="small" color="#ffffff" />
                </View>
              )}
            </View>
          </View>
        </View>
      </BlurView>
    </TouchableWithoutFeedback>
  );
};

export default SendMeeting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: "10%",
  },
  surface: {
    width: "100%",
    padding: "5%",
    borderRadius: 10,
  },
  button: {
    marginVertical: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  textMsj: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  textContainer: {
    marginVertical: 10,
  },
  spinner: {
    backgroundColor: "#005e57",
    height: 35,
    borderRadius: 2,
    elevation: 3,
    justifyContent: "center",
  },
});
