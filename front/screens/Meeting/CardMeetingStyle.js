import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    width: wp("90%"),
    paddingLeft: wp("10%"),
    borderLeftWidth: 3,
    paddingBottom: hp("2.5%"),
    borderColor: "lightgrey",
  },
  avatar: {
    position: "absolute",
    left: wp("-7%"),
    zIndex: 1,
    backgroundColor: "#ffc78f",
    shadowColor: "grey",
    elevation: 5,
  },
  card: {
    shadowColor: "grey",
    elevation: 10,
  },
  viewContainer: {
    backgroundColor: "#fff",
    height: hp("50%"),
    width: wp("90%"),
    borderRadius: hp("3%"),
    borderWidth: wp("0.5%"),
    borderColor: Colors.primaryGreen,
  },
  empty: {
    height: hp("13%"),
    borderColor: "#DBDBDB",
    borderWidth: hp("0.3%"),
    borderStyle: "dashed",
    marginHorizontal: wp("4%"),
    elevation: 0,
    width: wp("80%"),
    alignItems: "center",
  },
});

export default styles;
