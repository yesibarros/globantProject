import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  progressContainer: {
    justifyContent: "center",
    width: wp("97%"),
    alignItems: "center",
    paddingLeft: "2.5%",
    marginLeft: wp("3%"),
  },
  titleProgress: {
    width: wp("60%"),
    height: hp("12%"),
    fontSize: hp("4%"),
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    textAlignVertical: "center",
  },
  viewContainer: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 10,
    marginTop: "15%",
    maxHeight: "70%",
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
    width: "40%",
    height: "20%",
    justifyContent: "center",
  },
  n: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("100%"),
    height: hp("50%"),
  },
  nText: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    color: "#c9c9c9",
  },
});

export default styles;
