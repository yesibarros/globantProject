import React from "react";
import { StyleSheet, View, Text} from "react-native";
import Header from "../header/Header";
import { useTheme } from '@react-navigation/native';

export default function Progress() {
  const { colors } = useTheme();
    return (
     <View style={styles.container}>
         <Header/>
         <View style={[styles.body,{backgroundColor:colors.background}]}>
             <Text style={[styles.headerText, {color:colors.text}]}>PROXIMAMENTE {"\n"} MI PROGRESO</Text>
         </View>
         
     </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#009387",
    },
    body: {
      backgroundColor: "white",
      borderTopLeftRadius: 60,
      flex: 3,
      paddingBottom: "10%",
      justifyContent: "center"
    },
    headerText:{
        color: "black",
        textAlign: "center",
        fontSize: 25
    }
   
  });
  
 
  
  
 