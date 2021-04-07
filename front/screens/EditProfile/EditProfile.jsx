import React, { useState, useEffect } from "react";

import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
  Dimensions,
  Modal,
  ActivityIndicator
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Avatar, Card, Button, Chip, Title } from "react-native-paper";
import styles from "./EditProfileStyles";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../state/loggedUser/thunks";
import SelectPicker from "react-native-form-select-picker";
import { useTheme } from "@react-navigation/native";
// import { Avatar } from 'react-native-paper';

const EditProfile = ({ navigation, visible }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading]= React.useState(false)
  const loginUser = useSelector((state) => state.loggedUser.user);
  const initEditMode = loginUser.location ? false : true;
  const [editMode, setEditMode] = useState(initEditMode);
  const [selected, setSelected] = useState();
  const [firstName, setFirstName] = useState(loginUser.firstName);
  const [lastName, setLastName] = useState(loginUser.lastName);
  const [text, setText] = React.useState(loginUser.description);
  const locations = useSelector((state) => state.locations);
  const handleEdit = () => {
    let obj = {
      id: loginUser._id,
      firstName: firstName,
      lastName: lastName,
      location: selected,
      description: text,
    };
    dispatch(updateProfile(obj)).then(() => {
      setEditMode(false);
    });
  };
  const handleFirstNameChange = (val) => {
    setFirstName(val);
  };
  const handleLastNameChange = (val) => {
    setLastName(val);
  };
  const handleDescriptionChange = (val) => {
    setText(val);
  };

  useEffect(() => {
    if (loginUser.technologies.length > 0 && !loginUser.location) {
      Alert.alert("¡Genial!", "Ahora solo falta que indiques tu sede", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
  }, []);

  return (
   <Modal visible={visible} animationType="slide" transparent={true} >
            
            {isLoading?
            (
                <View style={[styles.viewContainer, {backgroundColor:colors.background}]}>
                <ActivityIndicator style={{flex:1, alignItems:"Center"}}size="large" color="#0000ff" />
                </View>
            )       
        
       :(
           
            <View style={[styles.viewContainer,  {backgroundColor:colors.background}]}>
                <Title style={styles.titleDates}>Edita tus datos personales:</Title>
                <Card style={styles.cardContainer}>
<Card.Title
        left={() => (
          <Avatar.Icon rounded icon="account" style={styles.avatar} />
        )}
        title={`Nombre: ${loginUser.firstName} ${loginUser.lastName} `}
        subtitleStyle={styles.cardSubtitle}
      />
      <Card.Title
        left={() => (
          <Avatar.Icon rounded icon="map-marker" style={styles.avatar} />
        )}
        title={`Sede: ${loginUser.location && loginUser.location.locationName} `}
        subtitleStyle={styles.cardSubtitle}
      />
      <Card.Title
        left={() => (
          <Avatar.Icon rounded icon="card-text-outline" style={styles.avatar} />
        )}
        title={`Acerca de mi: ${loginUser.descriptcion && loginUser.description} `}
        subtitleStyle={styles.cardSubtitle}
      />
      </Card>

      <Button style={styles.buttonSize} mode="contained"  onPress={() => console.log("Pressed")} >
          <Text style={{ fontSize:20 }}>{editMode?  "Editar!" :  "Guardar!"} </Text>
          
        </Button>
</View>
               
                
           
        )}


       



        </Modal>
      
     

    
 
  );
};

export default EditProfile;
