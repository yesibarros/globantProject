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
//SCREENS

import PillButton from "../../shared/components/PillButton";
const { width } = Dimensions.get("window");
//REDUX
import { useDispatch, useSelector } from "react-redux";
const Configuration = () => {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loggedUser.user);
  return (
    <View style={styles.container}>
      <View style={styles.areasContainer}>
        <Text style={styles.text}>Your Technologies:</Text>
        <View style={styles.mapContainer}>
        {loginUser.technologies.length &&
          loginUser.technologies.map((item) => {
            return(
            <PillButton title={item.technologyName} key={item._id}/>
            )
          })}
        </View>
           <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            navigation.navigate("Configuration");
          }}
        >
          <Text style={styles.userBtnTxt}>See More...</Text>
        </TouchableOpacity>

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
    marginLeft:10,
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
    marginTop: 15,
    width: "65%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "lightgrey",
  },
  mapContainer:{
    // backgroundColor:"blue",
    flexDirection:"row",
    flexWrap:"wrap"

  },
  userBtn:{
    alignItems:"flex-end",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt:{
    color:'#009387'
  }
});
