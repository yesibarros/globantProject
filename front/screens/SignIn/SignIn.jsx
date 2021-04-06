import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Button
} from "react-native";
//REDUX
import { useDispatch, useSelector } from "react-redux";
import {login} from '../../state/loggedUser/thunks'
import {logout} from '../../state/loggedUser/actions'
import AwesomeAlert from 'react-native-awesome-alerts';

//REACT-NATIVE
import * as Animatable from 'react-native-animatable';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';

//STYLE
import styles from "./signInStyle"

//AUTH
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';

WebBrowser.maybeCompleteAuthSession();


const SignIn = ({navigation}) => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '258776343712-lqpid5ilh84carq4no613sd17ea5mmjg.apps.googleusercontent.com',
    iosClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    behavior: "web",
  });

 

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      }
  }, [response]);

  const dispatch = useDispatch();
  const loginUser= useSelector((state) => state.loggedUser.user);
  const [wrongDataAlert, setWrongDataAlert]= useState(false)
  const [wrongUserAlert, setWrongUserAlert]= useState(false)

  const [data, setData] = useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
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
  const handleLogin =()=>{
    if(data.check_textInputChange == false || !data.password){
     
      return setWrongDataAlert(true)}
    
    dispatch(login(data))
    .then((data)=> {
      if(data.meta.requestStatus == "rejected"){
        return setWrongUserAlert(true)
        }
        else{
          //navigation.navigate('TabBar')
            }
        }
       
      )
  };
  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = (val) => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle='light-content'/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Bienvenido!</Text>
      </View>
      <Animatable.View
      animation="fadeInUpBig"
      style={styles.footer}
      >
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
        </View>
        {/* Las distintas alertas */}
        {/*Datos invalidos */}
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
    {/*Email o contraseña incorrectos*/}
    <AwesomeAlert 
      show={wrongUserAlert}
      showProgress={false}
      title="Error"
      message="Email o contraseña incorrectos"
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={true}
      showConfirmButton={true}
      confirmText="Ok"
      confirmButtonColor="#DD6B55"
      onConfirmPressed={() => {
        setWrongUserAlert(false);
      }}
    />
        <Text style={(styles.text_footer)}>Contraseña</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Tu contraseña"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <LinearGradient colors={["#ffc78f", '#ff9c38' ]} style={styles.singIn}>
            <TouchableOpacity
              onPress={handleLogin}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
               Iniciar sesión
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient colors={["#ffc78f", '#ff9c38' ]} style={styles.singIn}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}>
            <Text  style={[
              styles.textSign,
              {color: "#fff" },
            ]} >
              Registrarse
            </Text>
          </TouchableOpacity>
          </LinearGradient>
        </View>
        </Animatable.View>
        <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
        }}
    />
    </View>
  );
};

export default SignIn;
