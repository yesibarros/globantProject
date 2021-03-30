import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  body: {
    backgroundColor: "white",
    borderTopLeftRadius: 60,
    flex: 3,
  },
  button: {
    position: "absolute",
    bottom: 100,
    width: 150,
  },

  infoTitle: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 5,
  },
  infoContent: {
    fontSize: 17,
    paddingLeft: 50,
  },
  userText: {
    fontSize: 40,
    position: "absolute",
    top: 235,
  },
  userContainer: {
    position: "absolute",
    top: 170,
  },
  infoContainer: {
    width: "80%",
    height: "50%",
    position: "absolute",
    bottom: 80,
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
    borderColor: "#2e64e5",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    color: "#2e64e5",
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
});

export default styles;
