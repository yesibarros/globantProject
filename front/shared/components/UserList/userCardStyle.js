import { StyleSheet } from "react-native";
import {primaryGreen} from "../../../utils/Colors"

const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowRadius: 5,
        elevation: 3,
        margin: 10,
        marginBottom: 15,
        marginTop: 8,
        minHeight: 73
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
        marginTop: -5,
        fontSize: 25
    },
    empty:{
        borderColor: "#DBDBDB",
        borderWidth: 1,
        borderStyle: "dashed",
        elevation: 0,
        margin: 10,
        marginBottom: 15,
        marginTop: 8,
        height: 73,
        width: "95%"
    },

  });
  
  export default styles;