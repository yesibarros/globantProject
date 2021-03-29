//REACT
import React, {useState, useEffect} from 'react';
import { View, Text, FlatList} from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';

//STYLE
import styles from "./persInfoStyle";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../state/loggedUser/thunks";
import { logout } from "../../state/loggedUser/actions";

const PersInfo = () => {
    const dispatch = useDispatch();
    const loginUser = useSelector((state) => state.loggedUser.user);
    const [welcomeMessage, setWelcomeMessage]= useState(false)
    useEffect(()=>{
      return setWelcomeMessage(true)
    }, [loginUser._id])

    const handleSessionLogout = () => {
      dispatch(logout());
      navigation.navigate("SignIn");
    };
    return (
        <View>
           <View style={styles.infoContainer}>
            
            <Text style={styles.infoTitle}>Sede:</Text>
            {loginUser.location && <Text style={styles.infoContent}>
              {loginUser.location.locationName}
            </Text>}
            
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
          <AwesomeAlert 
      show={welcomeMessage}
      showProgress={false}
      title="Bienvenido!"
      message={`Qué bueno verte otra vez ${loginUser.firstName}!`}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showConfirmButton={true}
      confirmText="Ok"
      confirmButtonColor="green"
      onConfirmPressed={() => {
        setWelcomeMessage(false);
      }}
    />
          </View>
        </View>
    );
};

export default PersInfo;