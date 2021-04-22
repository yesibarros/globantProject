import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
const styles = StyleSheet.create({
    card:{
        // paddingRight: 15,
        marginVertical: hp('30%'),
        marginHorizontal: wp('4%')
    },
    title:{
        lineHeight: hp('3.5%')
    },
    left:{
        backgroundColor: "rgba(168,168,168,0.2)"
    }
  });
  
  export default styles;