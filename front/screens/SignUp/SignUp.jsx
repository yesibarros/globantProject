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
import styles from "./signUpStyle"

const SignUp = ({navigation}) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirm_password:'',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const handleConfirmPasswordChange = (val) => {
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
  const updateConfirmSecureTextEntry = (val) => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle='light-content'/>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      <Animatable.View
      animation="fadeInUpBig"
      style={styles.footer}
      >
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
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
        <Text style={(styles.text_footer)}>Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={(styles.text_footer)}>Confirm Password</Text>
        <View style={styles.action}>
          <Feather name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Your Password"
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
                onPress={() => navigation.navigate('SignIn')}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  }
                ]}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </LinearGradient>

          <LinearGradient colors={["#ffc78f", '#ff9c38' ]} style={styles.singIn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignIn')}>
              <Text  style={[
                styles.textSign,
                {color: "#fff" },
              ]} >
                Sign In
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        </Animatable.View>
    </View>
  );
};

export default SignUp;
