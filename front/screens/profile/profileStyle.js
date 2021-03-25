import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button:{
      position: "absolute",
      bottom: 100,
      width: 150
    },
    
    infoTitle:{
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 5
    },
    infoContent: {
        fontSize: 17,
        paddingLeft: 50
    },
    userText:{
        fontSize: 40
    },
    userContainer:{
  
      position: "absolute",
      top: 170
    },
    infoContainer:{
      width: "80%",
      height: "50%",
      position: "absolute",
      bottom: 100
    },

  header:{
      width: "100%",
      height: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",

  },
  headerText:{
      fontWeight: "bold",
      fontSize: 40,
      color: "black",
      letterSpacing: 1,
      position: "absolute",
      top: 80
  }

});

export default styles