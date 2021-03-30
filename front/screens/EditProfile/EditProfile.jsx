import React, {useState} from "react";
import Header from "../header/Header";
import { KeyboardAvoidingView, ScrollView, View, Text, TouchableOpacity, TextInput} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Avatar } from "react-native-elements";
import styles from "./EditProfileStyles";
import {useSelector, useDispatch} from 'react-redux';
import {updateProfile} from "../../state/loggedUser/thunks"
import SelectPicker from 'react-native-form-select-picker';
import * as Animatable from 'react-native-animatable';

const EditProfile = ({navigation}) => {

    const dispatch= useDispatch()
    const loginUser = useSelector((state) => state.loggedUser.user);
    const [editMode, setEditMode]= useState(false)
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

    return (
  
        <View style={styles.container}>
            
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20}/>
                    <Text style={styles.textEdit}>
                        First name: 
                    </Text>
                    {editMode ?<TextInput
                        placeholder={loginUser.firstName}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleFirstNameChange(val)}
                    />: <Text style={styles.textEdit}>{loginUser.firstName}</Text> }
                </View>

                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20}/>
                    <Text style={styles.textEdit}>
                        Last name: 
                    </Text>
                    {editMode ? <TextInput
                        placeholder={loginUser.lastName}
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => handleLastNameChange(val)}
                    />: <Text style={styles.textEdit}>{loginUser.lastName}</Text>}
                </View>
                
                <View style={styles.action}>
                    <FontAwesome name="user-o" color="#05375a" size={20}/>
                    <Text style={styles.textEdit}>
                        Country: 
                    </Text>
                    {editMode ? <SelectPicker
                        onValueChange={(value) => {
                            setSelected(value);
                        }}
                            selected={selected}
                            style={styles.inputLocation}
                        >
                        
                        {locations.length > 0 &&
                            locations.map((val) => {
                                return(
                                    <SelectPicker.Item label={`${val.locationName} (${val.country.countryName})`} 
                                    value={val._id} key={val._id}/>
                                )
                            }
                                
                        )}

                    </SelectPicker>
                    :
                    <Text style={styles.textEdit}>{loginUser.location.locationName}</Text>}

                </View>


                {editMode ? <TouchableOpacity
                    style={styles.userBtn}
                    onPress={handleEdit}
                >
                    <Text style={styles.text}
                        
                    >
                        Guardar
                    </Text>
                </TouchableOpacity>: <TouchableOpacity
                    style={styles.userBtn}
                    onPress={()=>setEditMode(true)}
                >
                    <Text style={styles.text}
                        
                    >
                        Editar
                    </Text>
                </TouchableOpacity>}
            </View>
           
       
    );
};

export default EditProfile;