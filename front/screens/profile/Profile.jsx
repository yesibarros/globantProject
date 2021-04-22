//REACT
import React, { useState, useEffect } from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
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
import Animated from "react-native-reanimated";

//SCREENS
import Header from "../header/Header";
import Configuration from "../configuration/Configuration";
import EditProfile from "../EditProfile/EditProfile";

//COMPONENTS
import ProfileAvatar from "./ProfileAvatar";

//STYLE
import styles from "./profileStyle";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setAnimation } from "../../state/Animation/actions";
import { updateProfile } from "../../state/loggedUser/thunks";


//Expo - notificaciones
import * as Notifications from "expo-notifications";

//Custom hooks
import useNotificationsInit from "../../utils/customHooks/notificationsInit";
import useForegroundNotifications from "../../utils/customHooks/foregroundNotifications";
import useBackgroundNotifications from "../../utils/customHooks/backgroundNotifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldSetBadge: true,
      shouldShowAlert: false,
      shouldPlaySound: false,
    };
  },
});

const Profile = ({ navigation }) => {
  bs = React.createRef();
  fall = new Animated.Value(1);

  // const takePhotoFromCamera = () => {
  //  console.log("TAKEFOTO")
  // }

  const choosePhotoFromLibrary = async () => {
    const result = await loadImageFromGallery([1, 1]);
    if (result.status) {
      dispatch(updateProfile({ img: result.image, id: loginUser._id }));
    }
    console.log("RESULTADO", result);
  };

  // const renderInner = () => (
  //     <View style={styles.panel}>
  //       <View style={{alignItems: 'center'}}>
  //         <Text style={styles.panelTitle}>Upload Photo</Text>
  //         <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
  //       </View>
  //       <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
  //         <Text style={styles.panelButtonTitle}>Take Photo</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
  //         <Text style={styles.panelButtonTitle}>Choose From Library</Text>
  //       </TouchableOpacity>
  //       <TouchableOpacity
  //         style={styles.panelButton}
  //         onPress={() => bs.current.snapTo(1)}>
  //         <Text style={styles.panelButtonTitle}>Cancel</Text>
  //       </TouchableOpacity>
  //     </View>
  //   );

  // const renderHeader = () => (
  //   <View style={styles.headerImage}>
  //     <View style={styles.panelHeader}>
  //       <View style={styles.panelHandle} />
  //     </View>
  //   </View>
  // );

  //TERMINA PRUEBA IMAGEN
  const dispatch = useDispatch();
  const [showConfiguration, setShowConfiguration] = useState(true);
  const loginUser = useSelector((state) => state.loggedUser.user);

  const { colors } = useTheme();

  //**** NOTIFICACIONES ******/
  // Hacer log in con expo: correr en la consola expo login
  //Se puede probar con https://expo.io/notifications
  const notificationsInit = useNotificationsInit();
  const foregroundNotifications = useForegroundNotifications();
  const backgroundNotifications = useBackgroundNotifications();
  useEffect(() => {
    notificationsInit();
  }, []);

  useEffect(() => {
    //Cuando la app está abierta
    const foreGroundSuscription = foregroundNotifications(
      Notifications,
      navigation
    );
    //Cuando la app está cerrada
    const backGroundSuscription = backgroundNotifications(
      Notifications,
      navigation
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

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header navigation={navigation} />

        <View style={[styles.body, { backgroundColor: colors.background }]}>
          <View style={styles.photo}>
            {loginUser.img ? (
            <TouchableOpacity onPress={choosePhotoFromLibrary}>
                <Avatar
                  size={hp("20%")}
                  rounded
                  source={{
                    uri: loginUser.img,
                  }}
                  title={loginUser?.firstName[0] + loginUser?.lastName[0]}
                  titleStyle={{
                    color: "white",
                    width: wp("100%"),
                    paddingTop: "15%",
                  }}
                  activeOpacity={0.7}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={choosePhotoFromLibrary}>
                <Avatar
                  size={hp("20%")}
                  rounded
                  avatarStyle={{ zIndex: -1, backgroundColor: "lightgray" }}
                  title={
                    loginUser._id &&
                    `${loginUser.firstName[0]}${loginUser.lastName[0]}`
                  }
                  titleStyle={{
                    color: "white",
                    width: wp("100%"),
                  }}
                  activeOpacity={0.7}
                />
                </TouchableOpacity>
          
            )}
          </View>

          <View
            style={{
              alignItems: "center",
              bottom: hp("7%"),
              justifyContent: "space-between",
              height: hp("12%"),
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: colors.text,
                fontSize: hp("3%"),
              }}
            >{`${loginUser.firstName} ${loginUser.lastName}`}</Text>
            <Text style={{ color: colors.text, fontSize: hp("1.7%") }}>
              {loginUser.email}
            </Text>
            <Text
              style={{
                fontSize: hp("2%"),
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

          {showConfiguration ? (
            <Configuration showLogged={true} />
          ) : (
            <EditProfile />
          )}
        </View>
      </View>
      {/* <View style={styles.container}> */}
      {/* <BottomSheet
        ref={bs}
        snapPoints={[500, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      /> */}
      {/* <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}> */}
      {/* <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: hp('100%'),
                width: wp('100%'),
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
          
            </View>
          </TouchableOpacity>
        
        </View> */}
      {/* </Animated.View> */}
      {/* </View> */}
    </ScrollView>
  );
};

export default Profile;
