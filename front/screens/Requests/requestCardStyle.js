import { StyleSheet } from "react-native";
import {primaryGreen} from "../../utils/Colors"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const styles = StyleSheet.create({
    card: {
        shadowColor: "#000",
        shadowOpacity: 1,
        shadowRadius: 10,
        elevation: 8,
        margin: hp('1.3%'),
        marginTop: hp('7'),
    },
    container:{
        flexDirection: "row"
    },
    infoContainer: {
        width: wp('55%'),
        
    },
    titleContainer: {
        flexDirection: "row", 
    },
    title: {
        marginLeft: hp('2%'),
      
    },
    fromRole:{
        textTransform: "uppercase",
        lineHeight: 13
        
    },
    name:{
        marginTop: hp('0.1%')
    },
    message: {
        marginTop: hp('2%')
    },
    buttonContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        width: wp('30%'),
        alignItems: "center",
    },
    cancelContainer: {
        justifyContent: "center",
        width: wp('35%'),
        alignItems: "center"
    }

  });
  
  export default styles;