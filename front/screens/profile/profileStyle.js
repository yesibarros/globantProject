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
        fontSize: 40,
        position: "absolute", 
        top: 235
    },
    userContainer:{
  
      position: "absolute",
      top: 170
    },
    infoContainer:{
      width: "80%",
      height: "50%",
      position: "absolute",
      bottom: 80
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
      fontSize: 10,
      color: "black",
      letterSpacing: 1,
      position: "absolute",
      top: 80
  },
  centerView:{
    //flex: 1,
    alignItems: "center",
    position: "absolute",
    top: 80
  },
  userContainer:{
    flex: 1
  }

});

export default styles