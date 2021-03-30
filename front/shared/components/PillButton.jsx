//REACT
import React from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    FlatList,
  } from "react-native";

//STYLE
import styles from "./pillButtonStyles"


const PillButton = ({title}) => {
    return (
        <TouchableOpacity
        
        style={styles.circular}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.textSign}>{title}</Text>
      </TouchableOpacity>
    );
};

export default PillButton;