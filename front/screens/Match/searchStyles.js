import { StyleSheet } from "react-native";
import { primaryGreen } from "../../utils/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const colors = {
  red: "#EC2379",
  blue: "#0070FF",
  gray: "#777777",
  white: "#ffffff",
  black: "#000000",
};
const styles = StyleSheet.create({
  container: {
    height: hp("75%"),
  },
  bottomContainerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: hp("19%"),
  },
  card: {
    backgroundColor: "white",
    height: hp("76%"),
    marginTop: hp("-4%"),
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 1.0,
    shadowRadius: 3.84,
    elevation: 30,
  },
  cardTitleView: {
    height: hp("30%"),
    alignItems: "center",
    justifyContent: "space-around",
  },
  cardTitleText: {
    fontSize: hp("4%"),
    color: primaryGreen,
  },
  cardSubtitleText: {
    color: colors.text,
    fontStyle: "italic",
    fontSize: hp("2%"),
  },
  cardSubtitleRole: {
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    color: "gray",
    fontSize: hp("2%"),
    backgroundColor: "transparent",
  },
  mapsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // alignContent: "center",
  },
  tecnoAndAreaText: {
    fontWeight: "bold",
    fontSize: hp("2.5%"),
    paddingTop: hp("2%"),
    paddingBottom: hp("2%"),
  },
});

export default styles;
