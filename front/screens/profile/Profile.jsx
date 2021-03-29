<<<<<<< HEAD
//REACT
import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
=======
import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import Header from "../../shared/Header";
>>>>>>> 504550d2f6497637613bdd9ac12017333bc6d329
import { Avatar } from "react-native-elements";

//SCREENS
import Header from "../header/Header";

//STYLE
import styles from "./profileStyle";

//REDUX
import { useDispatch, useSelector } from "react-redux";
<<<<<<< HEAD
const { width } = Dimensions.get("window");
const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loggedUser.user);
=======
import { login } from "../../state/loggedUser/thunks";
import { logout } from "../../state/loggedUser/actions";
import AwesomeAlert from 'react-native-awesome-alerts';

export default function Profile({ navigation }) {
  
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loggedUser.user);
  const [welcomeMessage, setWelcomeMessage]= useState(false)
  useEffect(()=>{
    return setWelcomeMessage(true)
  }, [loginUser._id])
  const handleSessionLogout = () => {
    dispatch(logout());
    navigation.navigate("SignIn");
  };
>>>>>>> 504550d2f6497637613bdd9ac12017333bc6d329

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={{ top: -70, left: width / 3 }}>
          <Avatar
            size="xlarge"
            source={{
              uri: loginUser.img,
              width: "100%",
              heigth: "100%",
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
        </View>
        <View
          style={{  marginHorizontal: 20, alignItems: "center" , bottom:60}}
        >
          <Text style={{ fontWeight: "bold" }}>Yesica Barros</Text>
          <Text style={{ marginTop: 8 }}>yesibarros95@gmail.com</Text>
          <Text style={{ marginTop: 20, alignContent: "center" }}>
            I am a Full Stack Developer
          </Text>
<<<<<<< HEAD
=======

          <View style={styles.infoContainer}>
            
            <Text style={styles.infoTitle}>Sede:</Text>
            {loginUser.location && <Text style={styles.infoContent}>
              {loginUser.location.locationName}
            </Text>}
            
            {/* <Text style={styles.infoTitle}>Puesto:</Text>
            <Text style={styles.infoContent}>{user.puesto}</Text> */}
            <Text style={styles.infoTitle}>Rol:</Text>
            <Text style={styles.infoContent}>{loginUser.role}</Text>
            <Text style={styles.infoTitle}>Habilidades</Text>
         
           
           
           {loginUser.technologies.length  >0 &&
            <FlatList
              keyExtractor={tech=> tech.technologyName}
              data={loginUser.technologies}
              renderItem={({ item }) => {
                
      
                  return (
                  <Text style={styles.infoContent}>{item.technologyName}</Text>
                  )
              
                
              }}
            />
          }
          <AwesomeAlert 
      show={welcomeMessage}
      showProgress={false}
      title="Bienvenido!"
      message={`Qué bueno verte otra vez ${loginUser.firstName}!`}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showConfirmButton={true}
      confirmText="Ok"
      confirmButtonColor="green"
      onConfirmPressed={() => {
        setWelcomeMessage(false);
      }}
    />
          </View>
          <View style={styles.button}>
            <Button
              onPress={handleSessionLogout}
              title={"Cerrar sesión"}
            ></Button>
          </View>
>>>>>>> 504550d2f6497637613bdd9ac12017333bc6d329
        </View>
      <View style={styles.userBtnWrapper}>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            navigation.navigate("Configuration");
          }}
        >
          <Text style={styles.userBtnTxt}>Configuration</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => navigation.navigate("PersInfo")}
        >
          <Text style={styles.userBtnTxt}>Personal Info</Text>
        </TouchableOpacity>
      </View>
    </View>

      </View>
  );
};

export default Profile;
