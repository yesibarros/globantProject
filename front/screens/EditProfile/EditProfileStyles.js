import { StyleSheet, Dimensions } from "react-native";
const { height } = Dimensions.get("window");
const screenWidth = Dimensions.get("window").width / 1.05;
const screenHeigth = Dimensions.get("window").height / 2.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    marginTop: "2.5%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "5%",
    width: "150%",
  },

  textEdit: {
    paddingLeft: 5,
    fontSize: 20,
  },
  inputLocation: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "#000",
    alignItems: "center",
    height: "95%",
    marginLeft: 20,
    width: "58%",
  },
  userBtn: {
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: "transparent",
    padding: 5,
    width: "100%",
    backgroundColor: "orange",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderRightColor: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  editComponent: {
    backgroundColor: "white",
    position: "absolute",
    top: 80,
    zIndex: 1,
    height: "100%",
    width: "100%",
  },

  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "lightgrey",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 20,
    width: screenWidth,
    height: screenHeigth,
    marginHorizontal: 10,
  },
  cardContent: {
    marginVertical: 2,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 5,
  },
  techMapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chipText: {
    marginVertical: 1,
  },
  chipContainer: {
    marginTop: 8,
  },
  cardSubtitle: {
    fontStyle: "italic",
    marginLeft: 5,
  },
  chipView: {
    margin: 2,
  },
  buttonActions: {
    justifyContent: "flex-end",
    marginRight: 15,
    marginTop: 10,
  },
  viewContainer: {
    backgroundColor: '#fff',
    // maxHeight: "60%",
    flex: 2,
    marginBottom: '2%',
    marginHorizontal: 10,
    marginVertical: '50%',
    justifyContent: "center",
    alignItems: "center",
    // shadowColor: "black",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 5,
  },
  cardContainer: {
    width: 350,
    marginTop: 30,
  },
  titleDates: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonSize: {
    width: 350,
    height: 50,
    marginTop: 20,
    borderRadius: 50,
    marginHorizontal: 27,
    marginBottom: 45,
    backgroundColor: "#009387",
  },
  viewProfile: {
    marginLeft: 7,
    marginRight: 25,
    marginBottom: 3,
  },
  textInput: {
    marginTop: "5%",
    marginHorizontal: 20,
  },
});

export default styles;
