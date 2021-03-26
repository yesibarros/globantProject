import React,{useEffect} from "react";
import { StyleSheet, View, Text, ScrollView} from "react-native";
import Header from "../../shared/Header"
import { Avatar } from 'react-native-elements';
import { Button } from "react-native";
import styles from "./profileStyle"
//REDUX
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../state/loggedUser/thunks'
console.log(styles)


export default function Profile() {
  const dispatch = useDispatch();
  const loginUser= useSelector((state) => state.loggedUser.user);
  
  useEffect(() => {
    dispatch(login());
  }, []);

console.log( "LOGINUSEEEER",loginUser)
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
        
        <Header />
        

        
          <View style={styles.centerView}>
      
            <Avatar
              size="xlarge"
              source={{
                uri:
                  'https://www.dzoom.org.es/wp-content/uploads/2020/02/portada-foto-perfil-redes-sociales-consejos-810x540.jpg',
                width: "100%", 
                heigth: "100%"
              }}
              rounded
              title={user.firstName[0]+user.lastName[0]}
              titleStyle={{color: "white", backgroundColor: "gray", flex: 1, width: "100%", paddingTop:"15%"}}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </View>
          <Text style={styles.userText}>
            {user.firstName} {user.lastName}
          </Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Sede:</Text>
          <Text style={styles.infoContent}>{user.location}</Text>
          <Text style={styles.infoTitle}>Puesto:</Text>
          <Text style={styles.infoContent}>{user.puesto}</Text>
          <Text style={styles.infoTitle}>Rol:</Text>
          <Text style={styles.infoContent}>{user.role}</Text>
          <Text style={styles.infoTitle}>Habilidades</Text>
          {user.techs.length &&
            user.techs.map((tech) => {
              return (
                <Text style={styles.infoContent} key={tech}>
                  -{tech}
                </Text>
              );
            })}
        </View>
        <View style={styles.button}>
          <Button title={"Cerrar sesión"}></Button>
        </View>
       
      </View>
    );
  }
  
  