import { StyleSheet } from "react-native";
import Colors from '../../utils/Colors';
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
  viewContainer: {
    backgroundColor: '#fff',
    // maxHeight: "60%",
    flex: 1,
    // marginBottom: '2%',
    marginHorizontal: 10,
    marginVertical: '50%',
    justifyContent: "flex-start",
    alignItems:"center",
    // shadowColor: "black",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 5,
    // backgroundColor: colors.background,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: Colors.primaryGreen,
    // shadowColor: Colors.primaryGreen,
  },
  empty:{
    borderColor: "#DBDBDB",
    borderWidth: 1,
    borderStyle: "dashed",
    elevation: 0,
    margin: 10,
    marginBottom: 15,
    marginTop: 30,
    maxHeight:50,
    width: "95%",
    alignItems:"center"
},
});

export default styles;
