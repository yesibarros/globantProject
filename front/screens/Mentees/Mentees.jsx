import React from "react";
import { StyleSheet, View, Text} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import Header from "../../shared/Header";
import styles from "./menteesStyle"







export default function Mentees() {
  
    return (
     <View style={styles.header}>
         <Header/>
         <View>
             <Text style={styles.headerText}>MENTEES</Text>
         </View>
         
     </View>
    );
  }