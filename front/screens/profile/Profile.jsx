//REACT
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert
} from "react-native";
import { Avatar } from "react-native-elements";
import { getLocations } from "../../state/Locations/thunks";

//SCREENS
import Header from "../header/Header";
import Configuration from "../configuration/Configuration";
import EditProfile from "../EditProfile/EditProfile";

//STYLE
import styles from "./profileStyle";

//REDUX
import { useDispatch, useSelector } from "react-redux";
const { width } = Dimensions.get("window");

const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const [showConfiguration, setShowConfiguration] = useState(true);
  const loginUser = useSelector((state) => state.loggedUser.user);

  useEffect(() => {
    dispatch(getLocations());

    if (loginUser.technologies.length < 1 && loginUser.areas.length <1 && !loginUser.location) {
      Alert.alert("Bienvenido!", "Configuremos tu perfil",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }])
    }
    
    if (loginUser.technologies.length > 0 && loginUser.areas.length >0 && !loginUser.location) {
      setShowConfiguration(false);
    }
  }, [loginUser.technologies, loginUser.areas]);

  return (
    //<SafeAreaView style={styles.container}>
    <ScrollView>
      <View style={styles.container}>
        <Header />

        <View style={styles.body}>
          <View style={{ top: -70, left: width / 3 }}>
            {loginUser.img ? (
              <Avatar
                size="xlarge"
                source={{
                  uri: loginUser.img,
                  width: "100%",
                  heigth: "100%",
                  zIndex: 1,
                }}
                rounded
                title={loginUser.firstName + loginUser.lastName}
                titleStyle={{
                  color: "white",
                  backgroundColor: "gray",
                  flex: 1,
                  width: "100%",
                  paddingTop: "15%",
                }}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            ) : (
              <Avatar
                size="xlarge"
                rounded
                title={`${loginUser.firstName[0]}${loginUser.lastName[0]}`}
                titleStyle={{
                  color: "white",
                  backgroundColor: "gray",
                  flex: 1,
                  width: "100%",
                  paddingTop: "15%",
                  zIndex: 1,
                }}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
            )}
          </View>

          <View
            style={{ marginHorizontal: 20, alignItems: "center", bottom: 60 }}
          >
            <Text
              style={{ fontWeight: "bold" }}
            >{`${loginUser.firstName} ${loginUser.lastName}`}</Text>
            <Text style={{ marginTop: 8 }}>{loginUser.email}</Text>
            <Text style={{ marginTop: 20, alignContent: "center" }}>
              Soy un Full Stack Developer
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
              <Text style={styles.userBtnTxt}>Configuración</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={
                showConfiguration
                  ? styles.userBtn
                  : { ...styles.userBtn, ...styles.userBtnSelected }
              }
              onPress={() => setShowConfiguration(false)}
            >
              <Text style={styles.userBtnTxt}>Datos personales</Text>
            </TouchableOpacity>
          </View>

          {showConfiguration ? <Configuration /> : <EditProfile />}
        </View>
      </View>
    </ScrollView>
    //</SafeAreaView>
  );
};

export default Profile;
