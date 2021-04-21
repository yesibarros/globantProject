import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
    container: {
      height:hp('100%'),
    },
    titleContainer: {
      width: wp('100%'),
      justifyContent: "center",
      alignItems: "center",
      marginVertical: hp('6%')
    },
    title: {
      fontSize: 30,
      fontWeight: "bold"
    },
    noNotificationsContainer:{
      height: hp('77%'),
      justifyContent: "center",
      width: wp('100%'),
      alignItems: "center",
   
    },
    noNotificationsText: {
      color: "rgba(100,100,100,0.8)"
    },
    notificationsContainer: {
      height:hp('77%'),
      marginHorizontal: "5%",
      elevation: 3
    }

  });
  
  export default styles;