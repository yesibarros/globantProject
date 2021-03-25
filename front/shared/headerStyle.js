import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    droidSafeArea: {
        position:"absolute",
       justifyContent: "center",
       alignItems: "center",
        top: 25,
        width: "100%",
    },
    headerText:{
        fontWeight: "bold",
        fontSize: 20,
        color: "white",
        letterSpacing: 1,
        top: 12
        
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
     

});

export default styles