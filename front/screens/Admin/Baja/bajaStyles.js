import { StyleSheet } from "react-native";

//RESPONSIVE STYLE
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  viewContainer: {
    height: hp("90%"),
    marginHorizontal: wp("5%"),
    marginVertical: hp("5%"),
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "black",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 5,
  },
  mapContainer: {
    height: hp("60%"),
    width: wp("70%"),
    justifyContent: "space-between",
    paddingRight: hp("1%"),
  },
  title: {
    fontSize: hp("4%"),
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginVertical: wp("5%"),
    marginBottom: hp("2%"),
  },
  buttonContainer: {
    width: wp("80%"),
    flexDirection: "row",
    marginTop: hp("5%"),
    justifyContent: "space-evenly",
  },
  Button: {
    backgroundColor: "#009387",
    width: wp("35%"),
    justifyContent: "center",
    height: hp("7%"),
  },
  textButton: {
    fontSize: hp("2%"),
    color: "white",
    textAlign: "center",
  },
});
export default styles;
