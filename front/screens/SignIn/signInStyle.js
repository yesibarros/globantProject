import { StyleSheet, Platform } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    height: hp("40%"),
    justifyContent: "flex-end",
    paddingHorizontal: hp("5%"),
    paddingBottom: hp("5%"),
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: hp("5.5%"),
  },
  footer: {
    // flexGrow: 0.1,
    height: hp("70%"),
    backgroundColor: "#fff",
    borderTopLeftRadius: hp("8%"),
    // borderRightColor: 30,
    paddingHorizontal: wp("7%"),
    paddingVertical: hp("4%"),
  },
  text_footer: {
    color: "#05375a",
    fontSize: hp("2.5%"),
    marginTop: hp("5%"),
  },
  action: {
    height: hp("5%"),
    flexDirection: "row",
    marginTop: hp("2%"),
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInput: {
    // backgroundColor: "yellow",
    width: wp("72%"),
    height: hp("5%"),
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: wp("2%"),
    color: "#05375a",
    fontSize: hp("2%"),
  },
  button: {
    alignItems: "center",
    marginTop: "10%",
  },
  singIn: {
    marginBottom: hp("3%"),
    height: hp("7%"),
    width: wp("80%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },

  textSign: {
    fontSize: hp("2.7%"),
    letterSpacing: 1,
    fontWeight: "bold",
    alignContent: "center",
  },
});

export default styles;
