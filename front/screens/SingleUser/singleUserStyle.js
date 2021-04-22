import { StyleSheet } from "react-native";
import { primaryGreen } from "../../utils/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  body: {
    borderTopLeftRadius: 60,
    height: hp("80%"),
  },
  button: {
    position: "absolute",
    bottom: 100,
    width: 150,
  },
  photo: {
    top: hp("-9%"),
    width: wp("100%"),
    alignItems: "center",
  },
});

export default styles;
