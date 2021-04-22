import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
const screenWidth = Dimensions.get("window").width / 1.05;
const screenHeigth = Dimensions.get("window").height / 2.3;
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    marginTop: hp("2.5%"),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("5%"),
    width: wp("130%"),
  },
  inputLocation: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#000",
    alignItems: "center",
    height: hp("6%"),
    marginLeft: wp("5%"),
    width: wp("75%")
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: hp("4%"),
    marginLeft: wp("2%"),
  },

  cardSubtitle: {
    fontStyle: "italic",
    marginLeft: wp("2%"),
  },

  viewContainer: {
    backgroundColor: "red",
    flex: 2, //Hay que cambiar esto?
    marginBottom: hp("2%"),
    marginHorizontal: wp("2%"),
    marginVertical: hp("15%"),
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 5,
  },
  cardContainer: {
    width: wp("85%"),
  },
  titleDates: {
    marginTop: hp("5%"),
    fontSize: hp("4%"),
    fontWeight: "bold",
  },
  buttonSize: {
    width: wp("85%"),
    height: hp("6%"),
    marginTop: hp("3%"),
    borderRadius: 50,
    marginHorizontal: wp("5%"),
    marginBottom: hp("5%"),
    backgroundColor: "#009387",
  },
  textInput: {
    marginTop: hp("2%"),
    marginHorizontal: hp("2%"),
  },
});

export default styles;
