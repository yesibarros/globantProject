//REACT-NATIVE
import { StyleSheet } from "react-native";

//UTILS
import { primaryGreen } from "../../utils/Colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  body: {
    borderTopLeftRadius: 60,
    flex: 3,
    paddingBottom: "30%",
  },
  title: {
    color: "white",
    fontSize: 40,
    position: "absolute",
    top: "21%",
    marginLeft: "10%",
  },
  usersContainer: {
    marginTop: "15%",
    paddingHorizontal: "5%",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 60,
    backgroundColor: primaryGreen,
  },
  note: {
    color: "gray",
    textAlign: "center",
    opacity: 0.5,
  },
  noteContainer: {
    marginTop: 10,
  },
  animation: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 60,
    backgroundColor: primaryGreen,
    height: 30,
    width: 60,
  },
});

export default styles;
