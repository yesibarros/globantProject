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
import {Divider } from "react-native-paper"
import { useTheme } from "@react-navigation/native";

//SCREENS
import Header from "../header/Header";

//STYLE
import styles from "./singleUserStyle";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import Configuration from "../configuration/Configuration";
const { width } = Dimensions.get("window");

const SingleUser = ({ navigation }) => {
  const dispatch = useDispatch();
  const singleUser= useSelector(state=> state.singleUser.user)
  //console.log("NAVIGATION", navigation)
  const { colors } = useTheme();

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header navigation={navigation} />

        <View style={[styles.body, { backgroundColor: colors.background }]}>
          <View style={{ top: -70, left: width / 3 }}>
            {singleUser.img ? (
              <Avatar
                size="xlarge"
                
                source={{
                  uri: singleUser.img,
                }}
                avatarStyle={{ zIndex: 1, width: "100%", height: "100%" }}
                rounded
                title={singleUser.firstName + singleUser.lastName}
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
             
                rounded
                title={
                    singleUser._id &&
                  `${singleUser.firstName[0]}${singleUser.lastName[0]}`
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
            >{`${singleUser.firstName} ${singleUser.lastName}`}</Text>
            <Text style={{ marginTop: 8, color: colors.text }}>
              {singleUser.email}
            </Text>
            <Text
              style={{
                marginTop: 20,
                alignContent: "center",
                color: colors.text,
              }}
            >
              {singleUser.description}
             
            </Text>

 
           
            
            <Text> Location: {singleUser.location && singleUser.location.locationName}</Text>
          
            </View>
          

          <Configuration showLogged={false}/>
        </View>
      </View>
    </ScrollView>
  );
};

export default SingleUser;
