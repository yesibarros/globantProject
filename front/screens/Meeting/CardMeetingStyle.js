import { StyleSheet } from "react-native";
import Colors from "../../utils/Colors";
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
    shadowColor: "grey",
    elevation: 5,
  },
  card: {
    shadowColor: "grey",
    elevation: 10,
  },
  viewContainer: {
    backgroundColor: "#fff",
    flex: 0.5,
    marginHorizontal: 10,
    marginVertical: 20,
    justifyContent: "space-between",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 5,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: Colors.primaryGreen,
  },
  empty: {
    flex: 0.3,
    borderColor: "#DBDBDB",
    borderWidth: 3,
    borderStyle: "dashed",
    marginHorizontal: 10,
    elevation: 0,
    width: "95%",
    alignItems: "center",
  },
});

export default styles;
