import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  titleProgress: {
    fontSize: hp("5%"),
    fontWeight: "bold",
    // marginVertical: 10,

    // paddingLeft: 10,
    color: "black",
    // marginBottom: 15,
    // marginTop: 45,
  },
  viewContainer: {
    backgroundColor: "white",
    height: hp("65%"),
    width: wp("90%"),
    alignSelf: "center",
    marginVertical: hp("15%"),
    // marginHorizontal: 10,
    // marginTop: "15%",
    // maxHeight: "70%",
    justifyContent: "center",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 20,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: "green",
  },
  input: {
    width: "90%",
    padding: 10,
    margin: 12,
    borderWidth: 0.5,
  },
  Button: {
    backgroundColor: "#009387",
    width: wp("40%"),
    height: hp("6%"),
    justifyContent: "center",
  },
  n: {
    marginHorizontal: wp("5%"),
    justifyContent: "center",
    alignItems: "center",
    width: wp("90%"),
    height: hp("50%"),
  },
  nText: {
    fontSize: hp("3%"),
    fontWeight: "bold",
    color: "#c9c9c9",
  },
  modalInstruction: {
    fontSize: hp("3%"),
    marginVertical: hp("2"),
  },
});

export default styles;
