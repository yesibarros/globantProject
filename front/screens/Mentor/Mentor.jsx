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


//SCREENS
import Header from "../header/Header";

//STYLE
import styles from "./mentorStyle";

import { useTheme } from "@react-navigation/native";
import { primaryGreen } from "../../utils/Colors"
import { Button } from 'react-native-paper';

//REDUX
import { useSelector } from "react-redux";

//COMPONENTS
import UserCard from "../../shared/components/UserList/UserCard"

const { width } = Dimensions.get("window");

const Mentor = ({navigation}) => {
 
  const loginUser = useSelector((state) => state.loggedUser.user);

  const { colors } = useTheme();

  const mentor = loginUser.mentor || null

  return (
    <>
      <ScrollView>
        {console.log("MENTORRRRR", loginUser.mentor)}
        <View style={styles.container}>
          <Header navigation={navigation} />
          <Text style={styles.title}>Mi mentor</Text>
          <View style={[styles.body, { backgroundColor: colors.background }]}>
            <View style={styles.usersContainer}>
              <UserCard user={mentor} />
              {!mentor && <Button
              icon="account-plus"
              mode="contained"
              color={primaryGreen}
              onPress={() => console.log("Pressed")}
              style={{marginTop: 20, marginHorizontal: "3%"}}
            >
              Buscar mentor
            </Button>}
            </View>
            
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Mentor