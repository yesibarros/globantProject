import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  viewContainer: {
    height: hp("60%"),
    marginHorizontal: wp("5%"),
    marginVertical: hp("10%"),
    justifyContent: "center",
    paddingVertical: hp("5%"),
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "black",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 55,
  },
  wrapper: {
    height: hp("20%"),
    marginVertical: hp("25%"),
    width: wp("90%"),
    alignItems: "center",
 
    marginTop: hp("10%")
  },
  title: {
    fontSize: hp("4%"),
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginVertical: wp("5%"),
    marginBottom: hp("2%"),
    textAlign: "center"
  },
  buttonContainer: {
    width:wp("90%"), 
    flexDirection: "row", 
    marginTop:hp("5%"), 
    justifyContent:"space-evenly"
  },
  Button: {
      backgroundColor: "#009387",
      width: wp("35%"),
      justifyContent: "center",
      height: hp("7%")
    },
  textButton:{
    fontSize: hp("2%"), 
    color: "white", 
    textAlign: "center"
  },
  input: {
        width: wp("80%"),
        padding: 10,
        margin: 12,
        borderWidth: 0.5,
      },
  });
  export default styles