import React from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import Header from "../header/Header";
import { useTheme } from '@react-navigation/native';
import {getMatchs} from "../../state/posibleMatch/thunks"
import {useSelector, useDispatch} from "react-redux"

export default function Matchs() {
  const { colors } = useTheme();
  const dispatch= useDispatch()
  const loggedUser= useSelector(state=> state.loggedUser.user)
  const matches= useSelector(state=> state.matchs)

  const handleMatch= ()=>{
    let obj={
      areas: loggedUser.areas,
      technologies: loggedUser.technologies
    }
    console.log("AREAS", obj.areas)
    console.log("TECNOLOGIAS", obj.technologies)
    dispatch(getMatchs(obj)).then(data=> console.log("LO ENCONTRADO", matches))
}
    return (
     <View style={styles.container}>
         <Header/>
         <View style={[styles.body,{backgroundColor:colors.background}]}>
             <Text style={[styles.headerText, {color:colors.text}]}>HOLA</Text>
             <Button  title="Ver matches" onPress={handleMatch}/>
         </View>
         {matches.length > 0 ? matches.map(match=>{
           <Text style={[styles.headerText, {color:colors.text}]}>HOLA</Text>
         }): <Text style={[styles.headerText, {color:colors.text}]}>No matches</Text>}
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