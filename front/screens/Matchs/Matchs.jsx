import React, { useEffect } from "react";
import { StyleSheet, View, Text, Button} from "react-native";
import Header from "../header/Header";
import { useTheme } from '@react-navigation/native';
import {getMatchs} from "../../state/posibleMatch/thunks"
import {useSelector, useDispatch} from "react-redux"
import { setMatch } from "../../state/posibleMatch/actions";

export default function Matchs() {
  const { colors } = useTheme();
  const dispatch= useDispatch()
  const loggedUser= useSelector(state=> state.loggedUser.user)
  let usuariosMatcheados=[]
  const matches= useSelector(state=> state.matchs)
  const handleMatch= ()=>{
   let areasUsuario= loggedUser.areas.map(area=>{
      return area._id
    })

    let tecnologiasUsuario= loggedUser.technologies.map(tech=>{
      return tech._id
    })

    let obj={
      
        // "role":["mentor"],
        // "location": "605fba8c3ccf24250dd12618",
        // "areas": ["605fba8d3ccf24250dd12652","605fba8d3ccf24250dd12650"],
        // "technologies": ["605fba8c3ccf24250dd1264a","605fba8c3ccf24250dd12647","605fba8c3ccf24250dd12646"]
        "role":loggedUser.role,
        "location": loggedUser.location._id,
      "areas": areasUsuario,
      "technologies": tecnologiasUsuario,
     
    
    }
    
    
    dispatch(getMatchs(obj)).then((data)=> {
      
      usuariosMatcheados = data.payload
      dispatch(setMatch(usuariosMatcheados))
      console.log("MATCHES ANTES", matches)
      
    } )
}


    return (
     <View style={styles.container}>
         <Header/>
         <View style={[styles.body,{backgroundColor:colors.background}]}>
             <Text style={[styles.headerText, {color:colors.text}]}>HOLA</Text>
             <Button  title="Ver matches" onPress={handleMatch}/>
             {matches.length > 0 && matches.map(match=>{
               return  <Text>{`${match.firstName} ${match.lastName}`}</Text>
             })}
            
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