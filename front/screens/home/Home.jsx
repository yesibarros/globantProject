import React from "react";
import { StyleSheet, View, Text} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import Header from "../../shared/Header";
import styles from "./homeStyles"






export default function Home() {
  
    return (
     <View style={styles.header}>
         <Header/>
         <View>
             <Text style={styles.headerText}>HOME</Text>
         </View>
         
     </View>
    );
  }
