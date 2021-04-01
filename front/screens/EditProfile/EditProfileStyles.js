import { StyleSheet, Dimensions } from "react-native";
const {height}= Dimensions.get("window")
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
});

export default styles;