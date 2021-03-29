//REACT
import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

import Header from "../header/Header";
const { width } = Dimensions.get("window");
//REDUX
import { useDispatch, useSelector } from "react-redux";
const Configuration = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loggedUser.user);
  return (
    <View style={styles.container}>
      <View style={styles.areasContainer}>
        <Text style={styles.text}>Your Skills:</Text>

        {loginUser.areas.length && (
          <FlatList
            horizontal
            keyExtractor={(area) => area.areaName}
            data={loginUser.areas}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={styles.circular}
                  onPress={() => navigation.navigate("SignUp")}
                >
                  <Text style={styles.textSign}>{item.areaName}</Text>
                </TouchableOpacity>
              );
            }}
          />
        )}
      </View>
    </View>
  );
};

export default Configuration;

const styles = StyleSheet.create({
  container: {
    //   backgroundColor: 'blue',
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  areasContainer: {
    width: "90%",
  },
  textSign: {
    
    fontSize: 15,
    fontWeight: "bold",
    alignContent: "center",
    color: "black",
  },
  circular: {
   
    marginTop:15,
    width: "65%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor:"lightgrey",
    
  },
});
