import React, { useState } from "react";
import {
  View,
  Text,

  TouchableOpacity,

  StatusBar,

  TextInput,
} from "react-native";
import * as Animatable from 'react-native-animatable';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';
import AwesomeAlert from 'react-native-awesome-alerts';
import styles from "./signUpStyle"
import { useDispatch } from "react-redux";
import {register} from '../../state/loggedUser/thunks'
import { primaryGreen }  from '../../utils/Colors'

const SignUp = ({navigation}) => {
  const dispatch= useDispatch()
  const [wrongDataAlert, setWrongDataAlert]= useState(false)
  const [existingUser, setExistingUser]= useState(false)
  const [wrongPasswordAlert, setWrongPasswordAlert]= useState(false)
  const [wrongEmailAlert, setWrongEmailAlert]=useState(false)
  const [data, setData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password:'',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const textInputChange = (val) => {
    let expresion = /\w+@\w+\.[a-z]/;
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: val != "" && expresion.test(val) ? true : false,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handleRegister = () =>{
    let pass= data.password
    let confirmPass= data.confirm_password
   if(!data.name || !data.lastName){
   return setWrongDataAlert(true) 
   }else if (data.check_textInputChange == false){
    return setWrongEmailAlert(true)
   }else if(!data.password || pass != confirmPass){ 
    return setWrongPasswordAlert(true)
   }else{
     let obj= {firstName: data.name, lastName: data.lastName, email: data.email, password: data.password }
     dispatch(register(obj)).then(data=>{
       if(data.error && data.error.message == "Request failed with status code 400"){
         return setExistingUser(true)
       }
            
            
     })
     
   }
   
  }
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const handleNameChange = (val) => {
    setData({
      ...data,
      name: val,
    });
  };

  const handleLastNameChange = (val) => {
    setData({
      ...data,
      lastName: val,
    });
  };
  const updateSecureTextEntry = (val) => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  const updateConfirmSecureTextEntry = (val) => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Registrate ahora!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>Nombre</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Tu nombre"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleNameChange(val)}
          />
        </View>
        <Text style={styles.text_footer}>Apellido</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Tu apellido"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleLastNameChange(val)}
          />
          <AwesomeAlert
            show={wrongDataAlert}
            showProgress={false}
            title="Error"
            message="Ingrese datos válidos"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#DD6B55"
            onConfirmPressed={() => {
              setWrongDataAlert(false);
            }}
          />
        </View>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Tu Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            //   <Animatable.View animation="bounceIn">

            <Feather name="check-circle" color="green" size={20} />
          ) : //   </Animatable.View>
          null}
          <AwesomeAlert
            show={wrongEmailAlert}
            showProgress={false}
            title="Error"
            message="Ingrese un mail válido"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#DD6B55"
            onConfirmPressed={() => {
              setWrongEmailAlert(false);
            }}
          />
        </View>
        <Text style={styles.text_footer}>Contraseña</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={styles.text_footer}>Confirmar contraseña</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirma tu contraseña"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
          <AwesomeAlert
            show={wrongPasswordAlert}
            showProgress={false}
            title="Error"
            message="No ha ingresado la contraseña o estas no coinciden"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#DD6B55"
            onConfirmPressed={() => {
              setWrongPasswordAlert(false);
            }}
          />
          <AwesomeAlert
            show={existingUser}
            showProgress={false}
            title="Error"
            message="Ya existe un usuario con ese mail"
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={true}
            showConfirmButton={true}
            confirmText="Ok"
            confirmButtonColor="#DD6B55"
            onConfirmPressed={() => {
              setExistingUser(false);
            }}
          />
          
        </View>

        <View style={styles.button}>
          <LinearGradient colors={["#ffc78f", "#ff9c38"]} style={styles.singIn}>
            <TouchableOpacity onPress={() => handleRegister()}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Registrarse
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient colors={["#ffc78f", "#ff9c38"]} style={styles.singIn}>
            <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
              <Text style={[styles.textSign, { color: "#fff" }]}>
                Ir a iniciar sesión
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SignUp;
