import { StyleSheet, Dimensions } from "react-native";
const {height}= Dimensions.get("window")
const screenWidth = Dimensions.get("window").width / 1.05;
const screenHeigth = Dimensions.get("window").height / 2.3;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  body: {
    marginTop: '2.5%',
    flex: 1,
    alignItems: "center",
    
  },
  action: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: 'center',
    
  },
  textInput: {
    paddingLeft: 10,
    fontSize: 20
  },
  textEdit: {
    paddingLeft: 5,
    fontSize: 20
  },
  inputLocation:{
    borderWidth: 2,
    borderRadius: 50,
    borderColor:'#000',
    alignItems:"center",
    height: '95%',
    marginLeft: 20,
    width: '58%',
    
  },
  userBtn: {
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 50,
    borderColor:'transparent',
    padding: 5,
    width: '100%',
    backgroundColor: 'orange'
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderRightColor: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  editComponent:{
    backgroundColor: "white",
    position:"absolute",
    top: 80,
   zIndex:1,
    height: "100%",
    width: "100%"
  }







  , 
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
    marginBottom: 5,
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
  },
  chipView: {
    margin: 2,
  },
  avatar: {
    backgroundColor: "white",
    marginRight: 15,
    marginTop: 10,
  },
  buttonActions: {
    justifyContent: "flex-end",
    marginRight: 15,
    marginTop: 10,
  },
  viewContainer: {
    maxHeight:'50%',
    flex: 2,
    marginBottom:10,
    marginHorizontal: 30,
    marginVertical: 200,
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius:50,
    shadowColor: 'black',
    shadowOpacity: 1.0,
    shadowRadius:50,
    elevation:5
},
cardContainer:{
 width:350,
 marginTop:30,

},
titleDates:{
  marginTop:40,
  fontSize:30,
  fontWeight: "bold",  
},
buttonSize:{

  
  width:350,
  height:60,
  marginTop:30,
  borderRadius:50,
  
}
});

export default styles;