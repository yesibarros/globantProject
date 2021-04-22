import React from 'react'
import {View, Button, StyleSheet, Platform, TouchableOpacity, Text} from 'react-native'

//REDUX
import { useDispatch, useSelector } from "react-redux";
import {googleAuth} from '../../../state/loggedUser/thunks'

//AUTH
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';

import axios from 'axios'

//STYLES
import { LinearGradient } from 'expo-linear-gradient';


WebBrowser.maybeCompleteAuthSession();

const GoogleButton = () => {

    const dispatch = useDispatch();

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '189623779663-02l0d8im0h01podp6omi07gjufkeekjj.apps.googleusercontent.com',
        scopes: ["profile", "email"]
      });
      const handleGoogle = async ()=>{
        const redirectUri = AuthSession.makeRedirectUri({ useProxy: true })
        console.log("REDIRECT URI", redirectUri)
        promptAsync({ useProxy: true, redirectUri })
      }
      React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
     
          const token = authentication.accessToken
          dispatch(googleAuth(token)).then(data=>{
            if(data.meta.requestStatus == "rejected"){
              return setWrongUserAlert(true)
              }
          })
          
          /* 
          axios
         .get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${token}`)
         .then((respuesta) => {console.log("RESPUESTA:::::::",respuesta.data, "------------------")}) 
         */
    
          }
      }, [response]);


    return (
        <TouchableOpacity onPress={handleGoogle} style={{width: "100%"}}>
            <LinearGradient colors={["#ffc78f", '#ff9c38' ]} style={styles.singIn}>
            <Text  style={[
              styles.textSign,
              {color: "#fff" },
            ]} >
              Ingresar con Google
            </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default GoogleButton


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387",
      },
      header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
      },
      footer: {
        flexGrow: 0.1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderRightColor: 30,
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
      text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
      },
      text_footer: {
        color: "#05375a",
        fontSize: 18,
        marginTop: 35
      },
      action: {
        flexDirection: "row",
        marginTop: 10,
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
      },
      button: {
        alignItems:'center', 
        marginTop: '10%'
      },
      singIn: {
        // paddingHorizontal:50,
        // paddingVertical:20,
        marginTop:5,
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        
      },
    
      textSign: {
        // paddingHorizontal:159,
        // paddingVertical:18,
        fontSize: 18,
        fontWeight: "bold",
        alignContent:'center'
        
      },
    
});

