import React from "react";
import { StyleSheet, View, Text} from "react-native";
import Header from "../../shared/Header"
import { Avatar } from 'react-native-elements';
import { Button } from "react-native";
import styles from "./profileStyle"

console.log(styles)


export default function Profile() {
    
  const user={
      firstName: "Yesi",
      lastName: "Barros",
      location: "Globant Londres",
      role: "Mentor",
      puesto: "Crack",
      techs: ["BackEnd", "FrontEnd", "UI Design", "Liderazgo"]
  }

    return (
     <View style={styles.header}>
         <Header/>
         <Text style={styles.headerText}>MI PERFIL</Text>
         <View style={styles.userContainer}>
         {/* <Avatar
                avatarStyle={{opacity:1}}
                rounded
                size="large"
                title="YB"
                
                 
        /> */}
         <Text style={styles.userText}>{user.firstName} {user.lastName}</Text>
         </View>
         <View style={styles.infoContainer}>
         
         
         <Text style={styles.infoTitle}>Sede:</Text> 
         <Text style={styles.infoContent}>{user.location}</Text>
         <Text style={styles.infoTitle}>Puesto:</Text> 
         <Text style={styles.infoContent}>{user.puesto}</Text>
         <Text style={styles.infoTitle}>Rol:</Text> 
         <Text style={styles.infoContent}>{user.role}</Text>
         <Text style={styles.infoTitle}>Habilidades</Text>
         {user.techs.length && user.techs.map(tech=>{
             return <Text style={styles.infoContent}>-{tech}</Text>
         })}


         </View>
         <View style={styles.button}>
         <Button title={"Cerrar sesión"}></Button>
         </View>
        
         
     </View>
    );
  }
  
  