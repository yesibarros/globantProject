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
import AreaModal from "./AreaModal"

// const { width } = Dimensions.get("window");


//REDUX
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/loggedUser/thunks";

//EXPO 
import { Ionicons } from '@expo/vector-icons';

const Configuration = () => {
  
  
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loggedUser.user);
  //AREAS
  const [showMoreAreas, setShowMoreAreas] = React.useState(false)
  const areasArray = showMoreAreas ? loginUser.areas : loginUser.areas.slice(0,3)
  const initEditArea = areasArray.length ? false : true
  const [editArea, setEditArea] = React.useState(initEditArea)  
  
  //TECHS
  const [showMore, setShowMore] = React.useState(false)
  const technologiesArray = showMore ? loginUser.technologies : loginUser.technologies.slice(0,3)
  const initEditTech = technologiesArray.length ? false : true
  const [editTech, setEditTech] = React.useState(initEditTech)
  
  

  return (
    <View style={styles.container}>
      <View style={styles.areasContainer}>
        
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Tu Perfil:</Text>
          <TouchableOpacity onPress={() => setEditArea(true)}> 
            <Ionicons name="create-outline" size={25}></Ionicons>
          </TouchableOpacity>
        </View>
        
        <View style={styles.mapContainer}>
          {loginUser.areas.length > 0 && areasArray.map((item) => {
            return <PillButton title={item.areaName} key={item._id} disabled={true}/> 
            })
          }
        </View>

        <AreaModal visible={editArea} setEditArea={setEditArea}/>
        
        {loginUser.areas.length > 3 && <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            setShowMoreAreas((prevState) => !prevState)
          }}
        >
          <Text style={styles.userBtnTxt}>See {showMoreAreas ? "Less" : "More"}...</Text>
        </TouchableOpacity>}

       
      </View>

      <View style={styles.areasContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Tus Tecnologías:</Text>
          <TouchableOpacity onPress={() => setEditTech(true)}> 
            <Ionicons name="create-outline" size={25}></Ionicons>
          </TouchableOpacity>
        </View>
        
        <View style={styles.mapContainer}>
<<<<<<< HEAD
          {loginUser.technologies.length >0 && technologiesArray.map((item) => {
            return <PillButton title={item.technologyName} key={item._id}/> 
=======
          {loginUser.technologies.length > 0 && technologiesArray.map((item) => {
            return <PillButton title={item.technologyName} key={item._id} disabled={true}/> 
>>>>>>> 4f002fba8b00e434df9d3b290078eae83ef14d83
            })
          }
        </View>

        <TechModal visible={editTech} setEditTech={setEditTech}/>
        

        {loginUser.technologies.length > 3 && <TouchableOpacity
          style={styles.userBtn}
          onPress={() => {
            setShowMore((prevState) => !prevState)
          }}
        >
          <Text style={styles.userBtnTxt}>See {showMore ? "Less" : "More"}...</Text>
        </TouchableOpacity>}

       
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
    marginBottom: 50
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
