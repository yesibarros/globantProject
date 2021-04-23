//REACT
import React, { useState } from "react";

//REACT-NATIVE
import { View, Alert, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//REACT-NATIVE-PAPER
import {
  Card,
  Title,
  Paragraph,
  Avatar,
  IconButton,
  Colors,
  ActivityIndicator,
} from "react-native-paper";

//UTILS
import { primaryGreen } from "../../utils/Colors";

//STYLE
import styles from "./requestCardStyle";

//REACT-REDUX
import { useDispatch } from "react-redux";
import { setUser } from "../../state/loggedUser/actions";
import { cancelRequest, acceptRequest } from "../../state/requests/Thunks";

const RequestCard = ({ request, received, navigation }) => {
  const [buttonSendLoading, setButtonSendLoading] = useState(false);
  const [buttonCancelLoading, setButtonCancelLoading] = useState(false);
  const opositeRole = request.fromRole == "mentee" ? "mentor" : "mentee";
  const dispatch = useDispatch();

  const handleAccept = () => {
    setButtonSendLoading(true);

    dispatch(acceptRequest(request._id)).then((data) => {
      setButtonSendLoading(false);

      if (data.meta.requestStatus === "rejected") {
        return Alert.alert(
          `Ya tienes un  ${request.fromRole}`,
          "Lo sentimos, no podes tener mas de 1",
          [
            {
              text: "Ok",
              onPress: () => navigation.navigate("Requests"),
            },
          ]
        );
      } else {
        Alert.alert(
          "¡Felicidades!",
          `¡Ahora ${request.from.firstName} ${request.from.lastName} es tu nuevo ${request.fromRole}`,
          [
            {
              text: "Ok",
              onPress: () =>
                request.fromRole == "Mentor"
                  ? navigation.navigate("Mentor")
                  : navigation.navigate("Mis mentees"),
            },
          ]
        );
        dispatch(setUser(data.payload.user));
      }
    });
  };

  const handleCancel = () => {
    setButtonCancelLoading(true);

    dispatch(cancelRequest(request._id)).then((data) => {
      setButtonCancelLoading(false);

      Alert.alert(`Solicitud ${received ? "rechazada" : "eliminada"}`, " ", [
        {
          text: "Ok",
          onPress: () => navigation.navigate("Requests"),
        },
      ]);
      dispatch(setUser(data.payload.user));
    });
  };

  return (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.infoContainer}
            onPress={() =>
              Alert.alert(
                `${request.from.firstName} ${request.from.lastName}`,
                `${request.message}`
              )
            }
          >
            <View style={styles.titleContainer}>
              <Avatar.Image
                size={50}
                source={{
                  uri: received ? request.from.img : request?.to?.img,
                }}
              />
              <View style={styles.title}>
                <Paragraph style={styles.fromRole}>
                  {received ? request.fromRole : opositeRole}
                </Paragraph>
                <Title style={styles.name}>
                  {received
                    ? `${request.from.firstName} ${request.from.lastName}`
                    : `${request?.to?.firstName} ${request?.to?.lastName}`}
                </Title>
              </View>
            </View>
            <Paragraph style={styles.message} numberOfLines={1}>
              {request.message}
            </Paragraph>
          </TouchableOpacity>
          {received ? (
            <View style={styles.buttonContainer}>
              {buttonSendLoading ? (
                <ActivityIndicator
                  size={hp("5%")}
                  style={{ marginLeft: 15 }}
                  color={primaryGreen}
                />
              ) : (
                <IconButton
                  icon="check-outline"
                  color={primaryGreen}
                  size={hp("5%")}
                  onPress={() => handleAccept()}
                />
              )}

              {buttonCancelLoading ? (
                <ActivityIndicator
                  size={hp("5%")}
                  style={{ marginRight: 15 }}
                  color={Colors.red500}
                />
              ) : (
                <IconButton
                  icon="close-outline"
                  color={Colors.red500}
                  size={hp("5%")}
                  onPress={() => handleCancel()}
                />
              )}
            </View>
          ) : buttonCancelLoading ? (
            <ActivityIndicator
              size={hp("5%")}
              style={{ marginLeft: wp("16") }}
              color={Colors.red500}
            />
          ) : (
            <IconButton
              icon="delete-outline"
              color={Colors.red500}
              size={hp("5%")}
              style={{ marginLeft: wp("16") }}
              onPress={() => handleCancel()}
            />
          )}
        </View>
      </Card.Content>
    </Card>
  );
};

export default RequestCard;
