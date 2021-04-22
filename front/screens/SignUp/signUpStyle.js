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
    height: hp("30%"),
    justifyContent: "flex-end",
    paddingHorizontal: hp("5%"),
    paddingBottom: hp("5%"),
  },
  footer: {
    height: hp("90%"),
    backgroundColor: "#fff",
    borderTopLeftRadius: hp("8%"),
    paddingHorizontal: wp("7%"),
    paddingVertical: hp("4%"),
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: hp("5.5%"),
  },
  text_footer: {
    color: "#05375a",
    fontSize: hp("2.5%"),
    marginTop: hp("2%"),
  },
  action: {
    // flexDirection: "row",
    // marginTop: 10,
    height: hp("4%"),
    flexDirection: "row",
    marginTop: hp("1%"),
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textInput: {
    width: wp("72%"),
    height: hp("5%"),
    marginTop: Platform.OS === "ios" ? 0 : 0,
    paddingLeft: wp("2%"),
    color: "#05375a",
    fontSize: hp("2%"),
  },
  button: {
    alignItems: "center",
    marginTop: "6%",
  },
  singIn: {
    marginBottom: hp("2%"),
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
    elevation:1,
    shadowOpacity:0.2,
  },
});

export default styles;
