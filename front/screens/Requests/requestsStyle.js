import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleContainer: {
      width: "100%",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 30
    },
    title: {
      fontSize: 30,
      fontWeight: "bold"
    },
    buttonsContainer:{
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    buttons: {
      fontSize: 18
    },
    underline: {
      borderBottomColor: primaryGreen,
      borderBottomWidth: 3
    },
    cardsContainer:{
      marginVertical: 15,
      paddingBottom: 15
     
    }

  });
  
  export default styles;
  