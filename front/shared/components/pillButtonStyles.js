// STYLES
import { StyleSheet } from "react-native";

// UTILS
const { primaryGreen } = require("../../utils/Colors");

const styles = StyleSheet.create({
  textSign: {
    fontSize: 15,
    fontWeight: "bold",
    alignContent: "center",
    color: "black",
  },
  circular: {
    marginTop: 15,
    //   width: "65%",
    marginLeft: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "lightgrey",
  },
  selected: {
    backgroundColor: primaryGreen,
  },
  selectedTxt: {
    color: "white",
  },
});

export default styles;
