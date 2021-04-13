//REACT
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Alert,

} from "react-native";

import { Avatar } from "react-native-elements";
import { getLocations } from "../../state/Locations/thunks";
import { useTheme } from "@react-navigation/native";
import { loadImageFromGallery } from "../../utils/helpers";
import {updateProfile} from "../../state/loggedUser/thunks"
//SCREENS
import Header from "../header/Header";
import Configuration from "../configuration/Configuration";
import EditProfile from "../EditProfile/EditProfile";

//STYLE
import styles from "./profileStyle";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setAnimation } from "../../state/Animation/actions";
const { width } = Dimensions.get("window");

//Expo - notificaciones
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { setNotificationsToken } from "../../state/notificationsToken/notificationsToken";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldSetBadge: true,
      shouldShowAlert: true,
    };
  },
});

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const [showConfiguration, setShowConfiguration] = useState(true);
  const loginUser = useSelector((state) => state.loggedUser.user);

  const { colors } = useTheme();

  //**** NOTIFICACIONES ******/
  // Hacer log in con expo: correr en la consola expo login
  //Se puede probar con https://expo.io/notifications

  const notificationsToken = useSelector((state) => state.notificationsToken);
  useEffect(() => {
    Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== "granted") {
          alert("No podremos enviarte notificaciones.");
          throw new Error("Permission not granted");
        }
      })
      .then(() => {
        // console.log("getting token")
        return Notifications.getExpoPushTokenAsync();
      })
      .then((response) => {
        const token = response.data;
        dispatch(setNotificationsToken(token)); //CAMBIAR ESTO POR UN UPDATE USER
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }, []);

  useEffect(() => {
    //Cuando la app está abierta
    const foreGroundSuscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        // console.log(notification);
      }
    );
    //Cuando la app está cerrada
    const backGroundSuscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        // console.log(response); //Incluye notification
      }
    );
    return () => {
      foreGroundSuscription.remove();
      backGroundSuscription.remove();
    };
  }, []);

  //****Fin de la parte de notificaciones ******/

  useEffect(() => {
    dispatch(setAnimation());
    dispatch(getLocations());

    if (
      loginUser.technologies &&
      loginUser.technologies.length < 1 &&
      loginUser.areas.length < 1 &&
      !loginUser.location
    ) {
      Alert.alert("Bienvenido!", "Configuremos tu perfil", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }

    if (
      loginUser.technologies &&
      loginUser.technologies.length > 0 &&
      loginUser.areas.length > 0 &&
      !loginUser.location
    ) {
      setShowConfiguration(false);
    }
  }, [loginUser.technologies, loginUser.areas, loginUser._id]);
  const changePhoto = async () => {
    const result = await loadImageFromGallery([1, 1]);
    if(result.status){
      dispatch(updateProfile({img:result.image, id:loginUser._id}))
    }
    console.log("RESULTADO", result);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header navigation={navigation} />

        <View style={[styles.body, { backgroundColor: colors.background }]}>
          <View style={{ top: -70, left: width / 3 }}>
            {loginUser.img ? (
              <Avatar
                size="xlarge"
                onPress={changePhoto}
                source={{
                  uri: loginUser.img,
                }}
                avatarStyle={{ zIndex: 1, width: "100%", height: "100%" }}
                rounded
                title={loginUser.firstName + loginUser.lastName}
                titleStyle={{
                  color: "white",
                  backgroundColor: "gray",
                  flex: 1,
                  width: "100%",
                  paddingTop: "15%",
                }}
                activeOpacity={0.7}
              />
            ) : (
              <Avatar
                size="xlarge"
                onPress={changePhoto}
                rounded
                title={
                  loginUser._id &&
                  `${loginUser.firstName[0]}${loginUser.lastName[0]}`
                }
                titleStyle={{
                  color: "white",
                  backgroundColor: "gray",
                  flex: 1,
                  width: "100%",
                  paddingTop: "15%",
                  zIndex: 1,
                }}
                // onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            )}
          </View>

          <View
            style={{ marginHorizontal: 20, alignItems: "center", bottom: 60 }}
          >
            <Text
              style={{ fontWeight: "bold", color: colors.text }}
            >{`${loginUser.firstName} ${loginUser.lastName}`}</Text>
            <Text style={{ marginTop: 8, color: colors.text }}>
              {loginUser.email}
            </Text>
            <Text
              style={{
                marginTop: 20,
                alignContent: "center",
                color: colors.text,
              }}
            >
              {loginUser.description}
            </Text>
          </View>

          <View style={styles.userBtnWrapper}>
            <TouchableOpacity
              style={
                showConfiguration
                  ? { ...styles.userBtn, ...styles.userBtnSelected }
                  : styles.userBtn
              }
              onPress={() => setShowConfiguration(true)}
            >
              <Text style={[styles.userBtnTxt, { color: colors.text }]}>
                Configuración
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                showConfiguration
                  ? styles.userBtn
                  : { ...styles.userBtn, ...styles.userBtnSelected }
              }
              onPress={() => setShowConfiguration(false)}
            >
              <Text style={[styles.userBtnTxt, { color: colors.text }]}>
                Datos personales
              </Text>
            </TouchableOpacity>
          </View>

          {showConfiguration ? <Configuration /> : <EditProfile />}
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
