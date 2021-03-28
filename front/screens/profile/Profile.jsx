import React, { useEffect } from "react";
import { StyleSheet, View, Text, ScrollView, FlatList } from "react-native";
import Header from "../../shared/Header";
import { Avatar } from "react-native-elements";
import { Button } from "react-native";
import styles from "./profileStyle";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/loggedUser/thunks";
import { logout } from "../../state/loggedUser/actions";

export default function Profile({ navigation }) {
  const dispatch = useDispatch();
  const loginUser = useSelector((state) => state.loggedUser.user);

  const handleSessionLogout = () => {
    dispatch(logout());
    navigation.navigate("SignIn");
  };

  return (
    <View>
      {loginUser._id && (
        <View style={styles.header}>
          <Header />
          <View style={styles.centerView}>
            <Avatar
              size="xlarge"
              source={{
                uri: loginUser.img,
                width: "100%",
                heigth: "100%",
              }}
              rounded
              title={loginUser.firstName + loginUser.lastName}
              titleStyle={{
                color: "white",
                backgroundColor: "gray",
                flex: 1,
                width: "100%",
                paddingTop: "15%",
              }}
              onPress={() => console.log("Works!")}
              activeOpacity={0.7}
            />
          </View>
          <Text style={styles.userText}>
            {loginUser.firstName} {loginUser.lastName}
          </Text>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Sede:</Text>
            <Text style={styles.infoContent}>
              {loginUser.location.locationName}
            </Text>
            {/* <Text style={styles.infoTitle}>Puesto:</Text>
            <Text style={styles.infoContent}>{user.puesto}</Text> */}
            <Text style={styles.infoTitle}>Rol:</Text>
            <Text style={styles.infoContent}>{loginUser.role}</Text>
            <Text style={styles.infoTitle}>Habilidades</Text>
         
           
           
           {loginUser.technologies.length  >0 &&
            <FlatList
              keyExtractor={tech=> tech.technologyName}
              data={loginUser.technologies}
              renderItem={({ item }) => {
                
      
                  return (
                  <Text style={styles.infoContent}>{item.technologyName}</Text>
                  )
              
                
              }}
            />
          }
          
            
          <View style={styles.button}>
            <Button
              onPress={handleSessionLogout}
              title={"Cerrar sesión"}
            ></Button>
          </View>
        </View>
        </View>
      )}
    </View>
  );
}
