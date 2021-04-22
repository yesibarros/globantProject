import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#009387",
    borderBottomRightRadius: 60,
    borderRightColor: 30,
    height: hp("20%"),
    width: wp("100%"),
    // paddingHorizontal: 20,
    // paddingVertical: 90,
  },
});

export default styles;
