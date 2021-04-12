import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    paddingLeft: "10%",
    borderLeftWidth: 3,
    paddingBottom: "5%",
    borderColor: "lightgrey",
  },
  avatar: {
    position: "absolute",
    left: -30,
    zIndex: 1,
    backgroundColor: "#ffc78f",
    // borderColor: "white",
    // borderWidth: 3,
    shadowColor: "grey",
    elevation: 5,
  },
  card: {
    shadowColor: "grey",
    elevation: 10,
  },
});

export default styles;
