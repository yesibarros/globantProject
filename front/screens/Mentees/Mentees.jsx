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
import styles from "./menteesStyle";
import { FAB } from 'react-native-paper';
import { useTheme } from "@react-navigation/native";
import { primaryGreen } from "../../utils/Colors"


//REDUX
import { useSelector } from "react-redux";

//COMPONENTS
import UserList from "../../shared/components/UserList/UserList"

const { width } = Dimensions.get("window");

const Mentees = ({navigation}) => {
 
  const loginUser = useSelector((state) => state.loggedUser.user);

  const { colors } = useTheme();

  const menteesToShow = ()=>{
    let mentees = [...loginUser.mentees] || []
    const length = mentees.length
    if(length !== 4) {
      for(let i = 0; i < 5-length; i++){
        mentees.push(null)
      }
    }
    return mentees
  }

  return (
    <>
    <ScrollView>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <Text style={styles.title}>Mis mentees</Text>
        <View style={[styles.body, { backgroundColor: colors.background }]}>
          <View style={styles.usersContainer}>
            <UserList users={menteesToShow()} navigation={navigation} />
            
          </View>
         {loginUser.mentees.length == 4 && <View style={styles.noteContainer}>
            <Text style={styles.note}>Solamente puedes tener hasta 5 mentees,</Text>
            <Text style={styles.note}>elimina los que ya tienes para agregar nuevos.</Text>
          </View>}
        </View>       
      </View>
    </ScrollView>
    {loginUser.mentees.length < 5 && <FAB
        style={styles.fab}

        icon="account-plus"
        onPress={() => console.log("Pressed")}
      />}
     
     </>
  );
};

export default Mentees