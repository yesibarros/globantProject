// REACT
import React from "react";

// REACT NATIVE
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StyleSheet, Platform, TouchableOpacity, Text } from "react-native";

// REACT REDUX
import { useDispatch } from "react-redux";
import { googleAuth } from "../../../state/loggedUser/thunks";

//AUTH
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";

//STYLES
import { LinearGradient } from "expo-linear-gradient";

WebBrowser.maybeCompleteAuthSession();

const GoogleButton = () => {
  const dispatch = useDispatch();

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "189623779663-02l0d8im0h01podp6omi07gjufkeekjj.apps.googleusercontent.com",
    scopes: ["profile", "email"],
  });
  const handleGoogle = async () => {
    const redirectUri = AuthSession.makeRedirectUri({ useProxy: true });
    promptAsync({ useProxy: true, redirectUri });
  };
  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;

      const token = authentication.accessToken;
      dispatch(googleAuth(token)).then((data) => {
        if (data.meta.requestStatus == "rejected") {
          return setWrongUserAlert(true);
        }
      });
    }
  }, [response]);

  return (
    <TouchableOpacity onPress={handleGoogle} style={styles.singIn}>
      <LinearGradient colors={["lightblue", "lightgray"]} style={styles.singIn}>
        <Text style={[styles.textSign, { color: "#fff" }]}>
          Ingresar con Google
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default GoogleButton;

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
    marginTop: 35,
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
    alignItems: "center",
    marginTop: "10%",
  },
  singIn: {
    marginTop: 5,
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  textSign: {
    fontSize: hp("2.7%"),
    fontWeight: "bold",
    alignContent: "center",
    shadowOpacity: 0.2,
    elevation: 1,
    letterSpacing: 1,
  },
  singIn: {
    marginBottom: hp("2%"),
    height: hp("7%"),
    width: wp("80%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
