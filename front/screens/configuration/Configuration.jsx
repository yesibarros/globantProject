//REACT
import * as React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button
} from "react-native";

//SCREENS
import PillButton from "../../shared/components/PillButton";
import TechModal from "./TechModal"

// const { width } = Dimensions.get("window");


//REDUX
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/loggedUser/thunks";

//EXPO 
import { Ionicons } from '@expo/vector-icons';

const Configuration = () => {
  const [showMore, setShowMore] = React.useState(false)
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loggedUser.user);
  const technologiesArray = showMore ? loginUser.technologies : loginUser.technologies.slice(0,3)
  const [editTech, setEditTech] = React.useState(false)
  

  return (
    <View style={styles.container}>
      <View style={styles.areasContainer}>
        
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Your Technologies:</Text>
          <TouchableOpacity onPress={() => setEditTech(true)}> 
            <Ionicons name="create-outline" size={25}></Ionicons>
          </TouchableOpacity>
        </View>
        
        <View style={styles.mapContainer}>
          {loginUser.technologies.length && technologiesArray.map((item) => {
            return <PillButton title={item.technologyName} key={item._id}/> 
            })
          }
        </View>

        <TechModal visible={editTech} setEditTech={setEditTech}/>

        <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            setShowMore((prevState) => !prevState)
          }}
        >
          <Text style={styles.userBtnTxt}>See {showMore ? "Less" : "More"}...</Text>
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
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }

});
