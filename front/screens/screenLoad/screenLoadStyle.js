//REACT-NATIVE
import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ff9c38",
  },
  background: {
    position: "absolute",
    left: wp("0%"),
    right: wp("0%"),
    top: hp("0%"),
    height: hp("30%"),
  },
});

export default styles;
