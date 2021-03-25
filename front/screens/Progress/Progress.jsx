import React from "react";
import { StyleSheet, View, Text} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import Header from "../../shared/Header";
import styles from "./progressStyle"

export default function Progress() {
  
    return (
     <View style={styles.header}>
         <Header/>
         <View>
             <Text style={styles.headerText}>MY PROGRESS</Text>
         </View>
         
     </View>
    );
  }
  
 