import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  body: {
    borderTopLeftRadius: 60,
    flex: hp('70%'),
  },
  title: {
    shadowOpacity:0.5,
    elevation:1,
    color: "white",
    fontSize: hp('5%'),
    position: "absolute",
    marginVertical:hp('9%'),
    marginHorizontal:wp('27%')
  },
  usersContainer:{
    marginTop: "15%",
    paddingHorizontal: "5%"
  },
  fab: {
    position: 'absolute',
    margin:20,
    right: 0,
    backgroundColor: primaryGreen
  },
  note: {
    color: "gray",
    textAlign: "center",
    opacity: 0.5
  },
  noteContainer: {
    marginTop: 10
  },
  animation: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 60,
    backgroundColor: primaryGreen,
    height: 30,
    width: 60
  },
  containerSnackBar: {
    flex: 1,
    justifyContent: 'space-between',


  },
  nText: {
    fontWeight: 'bold',
    color: '#c9c9c9',
    fontSize:hp('4%'),
    
  },
  n: {
    width:wp('100%'),
    alignItems: "center",
    justifyContent:"center"
  },
  
});

export default styles;