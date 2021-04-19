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
// VER PRUEBA IMAGE


import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import ImagePicker from 'react-native-image-crop-picker';
//SCREENS
import Header from "../header/Header";
import Configuration from "../configuration/Configuration";
import EditProfile from "../EditProfile/EditProfile";

//STYLE
import styles from "./profileStyle";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { setAnimation } from "../../state/Animation/actions";
import { updateProfile } from "../../state/loggedUser/thunks";
import { setUser } from "../../state/loggedUser/actions";
import { setRequests } from "../../state/requests/Actions"
import { setMenuBadge } from "../../state/menuBadge/menuBadge"
import { setObjectives } from "../../state/objetivos/actions"
const { width } = Dimensions.get("window");

//Expo - notificaciones
import * as Notifications from "expo-notifications";

//Custom hooks
import useNotificationsInit from "../../utils/customHooks/notificationsInit"


Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldSetBadge: true,
      shouldShowAlert: false,
      shouldPlaySound: false
    };
  },
});

const Profile = ({ navigation }) => {

  //PRUEB IMAGEN

  bs = React.createRef();
  fall = new Animated.Value(1);

  const takePhotoFromCamera = () => {
   console.log("TAKEFOTO")
  }

 

  const choosePhotoFromLibrary = async () => {
    const result = await loadImageFromGallery([1, 1]);
    if(result.status){
      dispatch(updateProfile({img:result.image, id:loginUser._id}))
    }
    console.log("RESULTADO", result);
  };

const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerImage}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );











  //TERMINA PRUEBA IMAGEN
  const dispatch = useDispatch();
  const [showConfiguration, setShowConfiguration] = useState(true);
  const loginUser = useSelector((state) => state.loggedUser.user);

  const { colors } = useTheme();

  //**** NOTIFICACIONES ******/
  // Hacer log in con expo: correr en la consola expo login
  //Se puede probar con https://expo.io/notifications
  const notificationsInit = useNotificationsInit()
  useEffect(() => {
    notificationsInit()
  }, []);

  useEffect(() => {
    //Cuando la app está abierta
    const foreGroundSuscription = Notifications.addNotificationReceivedListener(
      (notification) => {
        const {type, user, pendingRequests, objectives, mentee} = notification.request.content.data
        if(["newRequest", "acceptedRequest", "cancelRequest", "cancelMatch"].includes(type)){
          if(user._id == loginUser._id){
            dispatch(setUser(user))
            dispatch(setRequests(pendingRequests))
            if(type == "newRequest") dispatch(setMenuBadge(true))
          }
        }
        else{
          console.log("menteeee",mentee)
          navigation.navigate("Progress", {idCurrent: mentee})
        }
      }
    );
    //Cuando la app está cerrada
    const backGroundSuscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const {type, user, pendingRequests, objectives} = response.notification.request.content.data
        if(["newRequest", "acceptedRequest", "cancelRequest", "cancelMatch"].includes(type)){
          if(user._id == loginUser._id){
            dispatch(setUser(user))
            dispatch(setRequests(pendingRequests))
            if(type == "newRequest") {
              dispatch(setMenuBadge(true))
              navigation.navigate("Requests")
            }
          }
        }
        else{
          navigation.navigate("Progress", {idCurrent: mentee})
        }
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
  


  return (
    
    <ScrollView>
      <View style={styles.container}>
        <Header navigation={navigation} />

        <View style={[styles.body, { backgroundColor: colors.background }]}>
          <View style={{ top: -70, left: width / 3 }}>
            {loginUser.img ? (
              <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <Avatar
                size="xlarge"
               
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
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
              <Avatar
                size="xlarge"
               
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
              </TouchableOpacity>
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

          {showConfiguration ? <Configuration showLogged={true}/> : <EditProfile />}
        </View>
      </View>
      <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[500, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
    }}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
           
            </View>
          </TouchableOpacity>
         
        </View>
      </Animated.View>
    </View>
    </ScrollView>
     
   
  );
};

export default Profile;
