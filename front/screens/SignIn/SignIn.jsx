// REACT
import React, { useState } from "react";

// REACT NATIVE
import KeyboardSpacer from "react-native-keyboard-spacer";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
} from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

// REACT REDUX
import { useDispatch } from "react-redux";
import { login, googleAuth } from "../../state/loggedUser/thunks";

// EXPO
import { LinearGradient } from "expo-linear-gradient";

//STYLE
import styles from "./signInStyle";

// SCREENS
import GoogleButton from "../../shared/components/GoogleButton/GoogleButton";

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const [wrongDataAlert, setWrongDataAlert] = useState(false);
  const [wrongUserAlert, setWrongUserAlert] = useState(false);

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
  const handleLogin = () => {
    if (data.check_textInputChange == false || !data.password) {
      return setWrongDataAlert(true);
    }

    dispatch(login(data)).then((data) => {
      if (data.meta.requestStatus == "rejected") {
        return setWrongUserAlert(true);
      } else {
      }
    });
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
      <StatusBar backgroundColor="#009387" barStyle="light-content" />

      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.text_header}>Bienvenido!</Text>
        </View>

        <View style={styles.footer}>
          <Animatable.View animation="fadeInUpBig">
            <Text style={styles.text_footer}>Email</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={hp("2.5%")} />
              <TextInput
                placeholder="Tu Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
              />
              {data.check_textInputChange ? (
                <Feather name="check-circle" color="green" size={hp("2.5%")} />
              ) : null}
            </View>
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
            <Text style={styles.text_footer}>Contraseña</Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={hp("2.5%")} />
              <TextInput
                placeholder="Tu contraseña"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={hp("2.5%")} />
                ) : (
                  <Feather name="eye" color="grey" size={hp("2.5%")} />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity onPress={handleLogin}>
                <LinearGradient
                  colors={["#ffc78f", "#ff9c38"]}
                  style={styles.singIn}
                >
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
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <LinearGradient
                  colors={["#ffc78f", "#ff9c38"]}
                  style={styles.singIn}
                >
                  <Text style={[styles.textSign, { color: "#fff" }]}>
                    Registrarse
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <GoogleButton />
            </View>
          </Animatable.View>
        </View>
        <KeyboardSpacer />
      </ScrollView>
    </View>
  );
};

export default SignIn;
