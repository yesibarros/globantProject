//REACT NATIVE
import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  viewContainer: {
    flex: 1,
    marginLeft: "10%",
    marginRight: "10%",
    marginVertical: height / 6,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 30,
  },
  nextView: {
    alignSelf: "center",
    fontSize: 30,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "#000",
  },
  btnNextAndOmit: {
    flexDirection: "column",
    width: "100%",
  },
  btn: {
    height: 50,
    marginLeft: "10%",
    marginRight: "10%",
    backgroundColor: "#e89600",
    marginTop: 5,
    borderRadius: 50,
    justifyContent: "center",
    color: "#fff",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
