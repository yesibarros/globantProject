import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowRadius: 50,
        elevation: 8,
        margin: 10,
        marginBottom: 15,
        marginTop: 8,
    },
    container:{
        flexDirection: "row"
    },
    infoContainer: {
        width: "70%",
        
    },
    titleContainer: {
        flexDirection: "row", 
    },
    title: {
        marginLeft: 10,
      
    },
    fromRole:{
        textTransform: "uppercase",
        lineHeight: 13
    },
    name:{
        marginTop: -5
    },
    message: {
        marginTop: 10
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "30%",
        alignItems: "center",
    },
    cancelContainer: {
        justifyContent: "center",
        width: "30%",
        alignItems: "center"
    }

  });
  
  export default styles;