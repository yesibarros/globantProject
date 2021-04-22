import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#009387",
  },
  body: {
    borderTopLeftRadius: 60,
  },
  button: {
    position: "absolute",
    bottom: 100,
    width: 150,
  },
  photo: {
    top: hp("-9%"),
    width:wp('100%'),
    alignItems:"center",
  },

  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 10,
    color: "black",
    letterSpacing: 1,
    position: "absolute",
    top: 80,
  },
  centerView: {
    //flex: 1,
    alignItems: "center",
    position: "absolute",
    top: 80,
  },
  userContainer: {
    flex: 1,
  },
  userBtnWrapper: {
    top: -20,
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 10,
  },
  userBtn: {
    borderColor: "transparent",
    borderBottomWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnSelected: {
    borderColor: primaryGreen,
  },
  userBtnTxt: {
    color: primaryGreen,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  aboutUser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  shareContainer:{
    position: "absolute",
    right: 30,
    top: 40
  }
});

export default styles;