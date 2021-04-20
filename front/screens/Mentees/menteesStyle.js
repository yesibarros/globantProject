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
    paddingBottom: "30%"
  },
  title: {
    shadowOpacity:0.5,
    elevation:1,
    color: "white",
    fontSize: 40,
    position: "absolute",
    marginVertical:"20%",
    marginHorizontal:"20%"
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
    fontSize:30,
    
  },
  n: {
    alignItems: "center",
  },
  
});

export default styles;