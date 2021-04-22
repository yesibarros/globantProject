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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

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
import TabBar from "../../routes/Tab/TabBar";
const { width } = Dimensions.get("window");


const SingleUser = ({ navigation }) => {
  const dispatch = useDispatch();
  const singleUser= useSelector(state=> state.singleUser.user)
  const loginUser= useSelector(state=> state.loggedUser.user)
  //console.log("NAVIGATION", navigation)
  const { colors } = useTheme();
 

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header navigation={navigation} />

        <View style={[styles.body, { backgroundColor: colors.background }]}>
          <View style={styles.photo}>
            {singleUser.img ? (
              <Avatar
                size={hp("20%")}
                
                source={{
                  uri: singleUser.img,
                }}
                avatarStyle={{ zIndex: 1, width: "100%", height: "100%" }}
                rounded
                title={singleUser.firstName + singleUser.lastName}
                titleStyle={{
                  color: "white",
                  width: wp("100%"),
                  paddingTop: "15%"
                }}
                activeOpacity={0.7}
              />
            ) : (
              <Avatar 
              size={hp("20%")}
             
                rounded
                title={
                    singleUser._id &&
                  `${singleUser.firstName[0]}${singleUser.lastName[0]}`
                }
                titleStyle={{
                  color: "white",
                  width: wp("100%"), 
                }}
                // onPress={() => console.log("Works!")}
                activeOpacity={0.7}
              />
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
            >{`${singleUser.firstName} ${singleUser.lastName}`}</Text>
            <Text style={{ color: colors.text, fontSize: hp("1.7%") }}>
              {singleUser.email}
            </Text>
            <Text
              style={{
                fontSize: hp("2%"),
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
      <TabBar navigation={navigation}/>
    </ScrollView>
  );
};

export default SingleUser;
