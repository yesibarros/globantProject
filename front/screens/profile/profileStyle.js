import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  body: {
    borderTopLeftRadius: 60,
    flex: 3,
    paddingBottom: "40%"
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





  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  headerImage: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop:20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
});

export default styles;
