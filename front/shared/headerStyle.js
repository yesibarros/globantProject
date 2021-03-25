import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    droidSafeArea: {
        position:"absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
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
        height: 100,
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },

});

export default styles