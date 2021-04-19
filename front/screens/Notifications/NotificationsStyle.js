import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"

const styles = StyleSheet.create({
    container: {
      flex: 1.0,
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
    noNotificationsContainer:{
      height: "50%",
      justifyContent: "center",
      width: "100%",
      alignItems: "center"
    },
    noNotificationsText: {
      color: "rgba(100,100,100,0.8)"
    },
    notificationsContainer: {
      marginHorizontal: "5%",
      elevation: 3
    }

  });
  
  export default styles;