import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    viewContainer: {
      flex: 2,
      marginBottom: 10,
      marginHorizontal: 30,
      marginVertical: 50,
      
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: "white",
      borderRadius: 50,
      // shadowOffset:{  width: 10,  height: 10,  },
      shadowColor: "black",
      shadowOpacity: 1.0,
      shadowRadius: 50,
      elevation: 5,
    },
    mapContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
     justifyContent: "center",
     alignItems: "center"
    //   padding: 1,
    },
    title: {
      fontSize: 25,
      fontWeight: "bold",
      textDecorationLine: "underline",
      marginVertical: 30,
      marginBottom: 20,
    },
    buttonContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 30,
      marginBottom: 20
    },
    Button: {
        backgroundColor: "#009387",
        width: "45%",
        height: "20%",
        justifyContent: "center",
        paddingVertical: 10,
        height: 40
      }
  });
  export default styles