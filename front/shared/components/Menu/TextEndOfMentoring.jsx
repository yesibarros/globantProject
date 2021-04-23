// REACT
import React, { useState } from "react";

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

// UTILS
import { primaryGreen } from "../../../utils/Colors";

// EXPO
import { BlurView } from "expo-blur";

const TextEndOfMentoring = ({
  setModalTextEnd,
  handleSendEndOfMentoring,
  isLoading,
  closeMenu,
}) => {
  const { colors } = useTheme();
  const [inputMessage, setInputMessage] = useState("Mensaje");

  const sendEndOfMentoring = () => {
    setModalTextEnd(false);
    closeMenu();
    handleSendEndOfMentoring(inputMessage);
  };

  return (
    <TouchableWithoutFeedback onPress={() => setModalMeeting(false)}>
      <BlurView style={styles.container} intensity={100} tint="dark">
        <View style={[styles.surface, { backgroundColor: colors.background }]}>
          <View
            style={[styles.surface, { backgroundColor: colors.background }]}
          >
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
                  title="enviar"
                  color={primaryGreen}
                  onPress={() => {
                    sendEndOfMentoring();
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

export default TextEndOfMentoring;

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
