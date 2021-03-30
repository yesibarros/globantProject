//REACT
import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";

//SCREENS
import Header from "../header/Header";
import Configuration from "../configuration/Configuration";
//STYLE
import styles from "./profileStyle";

//REDUX
import { useDispatch, useSelector } from "react-redux";
const { width } = Dimensions.get("window");
const Profile = ({ navigation }) => {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loggedUser.user);

  return (
    <ScrollView> 
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
          <Configuration/>
    </View>
      </View>
      </ScrollView>
  );
};

export default Profile;
