import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
    container: {
      borderTopLeftRadius: 60,

    },
    titleContainer: {
      width: wp('100%'),   
      justifyContent: "center",
      alignItems: "center",
      marginVertical: hp('6%')
  
      
    },
    title: {
      fontSize: hp('4%'),
      shadowOpacity:0.2,
      elevation:3,
      fontWeight: "bold"
      
    },
    buttonsContainer:{
      flexDirection: "row",
      justifyContent: "space-evenly"
    },
    buttons: {
      fontSize: hp('2.5%')
    },
    underline: {
      borderBottomColor: primaryGreen,
      borderBottomWidth: 3
    },
    cardsContainer:{
      height:hp('52.9%'),
    },
    n: {
      justifyContent: "center",
      alignItems: "center",
      width: wp('100%'),
      height: hp('40%'),

    },
    nText: {
      fontSize: hp('3%'),
      fontWeight: 'bold',
      color: '#c9c9c9',
      
    }

  });
  
  export default styles;
  