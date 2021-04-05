import React, {useState, useEffect} from "react";

import { ScrollView, View, Text, TouchableOpacity, TextInput, Alert, Button} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import styles from "./EditProfileStyles";
import {useSelector, useDispatch} from 'react-redux';
import {updateProfile} from "../../state/loggedUser/thunks"
import SelectPicker from 'react-native-form-select-picker';
import { useTheme } from '@react-navigation/native';



const EditProfile = ({navigation}) => {
    const { colors } = useTheme();
    const dispatch= useDispatch()
    const loginUser = useSelector((state) => state.loggedUser.user);
    const initEditMode = loginUser.location ? false : true
    const [editMode, setEditMode]= useState(initEditMode)
    const [selected, setSelected] = useState();
    const [firstName, setFirstName]=useState(loginUser.firstName)
    const [lastName, setLastName]=useState(loginUser.lastName)
    const locations = useSelector(state => state.locations)
    const handleEdit= ()=>{
        let obj = {
            "id": loginUser._id,
            "firstName": firstName,
            "lastName": lastName, 
            "location": selected,
          }
          dispatch(updateProfile(obj)).then(()=>{setEditMode(false)})
    }
    const handleFirstNameChange = (val) => {
        setFirstName(val);
      };
      const handleLastNameChange = (val) => {
        setLastName(val);
      };

      useEffect(()=>{
          if(loginUser.technologies.length >0 && !loginUser.location){
              Alert.alert("¡Genial!", "Ahora solo falta que indiques tu sede",
              [{ text: "OK", onPress: () => console.log("OK Pressed") }])
          }
      },[])


    

    return (
  
        <ScrollView style={[!editMode ? styles.container : styles.editComponent, {backgroundColor:colors.background}]}>
            
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20}/>
                    <Text style={[styles.textEdit,{color:colors.text}]}>
                        Nombre: 
                    </Text>
                    {editMode ?<TextInput

                        placeholder={loginUser.firstName}
                        placeholderTextColor={colors.text}
                        style={[styles.textInput,{color:colors.text}]}
                        autoCapitalize="none"
                        onChangeText={(val) => handleFirstNameChange(val)}
                    />: <Text style={[styles.textEdit,{color:colors.text}]}>{loginUser.firstName}</Text> }
                </View>

                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20}/>
                    <Text style={[styles.textEdit, {color:colors.text}]}>
                        Apellido: 
                    </Text>
                    {editMode ? <TextInput
                        placeholder={loginUser.lastName}
                        placeholderTextColor={colors.text}
                        style={[styles.textInput, {color:colors.text}]}
                        autoCapitalize="none"
                        onChangeText={(val) => handleLastNameChange(val)}
                    />: <Text style={[styles.textEdit, {color:colors.text}]}>{loginUser.lastName}</Text>}
                </View>
                
                <View style={styles.action}>
                    <FontAwesome name="user-o" color={colors.text} size={20}/>
                    <Text style={[styles.textEdit, {color:colors.text}]}>
                        Sede: 
                    </Text>
                    {editMode ? <SelectPicker
                       
                        placeholderStyle={{color: colors.text}}
                        containerStyle={{backgroundColor:colors.background}}
                        onValueChange={(value) => {
                            setSelected(value);
                        }}
                            selected={selected}
                            style={[styles.inputLocation,{backgroundColor:colors.background}]}
                            placeholder="Elegí tu sede"
                            placeholderTextColor={colors.text}
                        >
                        
                        {locations.length > 0 &&
                            locations.map((val) => {
                                return(
                                    <SelectPicker.Item 
                                    label={`${val.locationName} (${val.country.countryName})`} 
                                    value={val._id} key={val._id}/>
                                )
                            }
                                
                        )}

                    </SelectPicker>
                    :
                    loginUser.location ?  <Text style={[styles.textEdit, {color:colors.text}]}>{loginUser.location.locationName}</Text>: null
                   }

                </View>


                {editMode ? <TouchableOpacity
                    style={styles.userBtn}
                    onPress={handleEdit}
                >
                    <Text style={[styles.text, {color:colors.text}]}
                        
                    >
                        Guardar
                    </Text>
                </TouchableOpacity>: <TouchableOpacity
                    style={[styles.userBtn,{color:colors.text}]}
                    onPress={()=>setEditMode(true)}
                >
                    <Text style={styles.text}
                        
                    >
                        Editar
                    </Text>
                </TouchableOpacity>}
                
            </ScrollView>
           
       
    );
};

export default EditProfile;