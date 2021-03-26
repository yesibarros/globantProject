import { StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387",
      },
      header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
      },
      footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderRightColor: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
      },
      text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
      },
      text_footer: {
        color: "#05375a",
        fontSize: 18,
        marginTop: 10
      },
      action: {
        flexDirection: "row",
        marginTop: 10,
      },
      textInput: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
      },
      button: {
        alignItems:'center', 
        marginTop:50
      },
      singIn: {
        // paddingHorizontal:50,
        // paddingVertical:20,
        marginTop:5,
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
    
      textSign: {
        // paddingHorizontal:159,
        // paddingVertical:18,
        fontSize: 18,
        fontWeight: "bold",
        alignContent:'center'
      },
});

export default styles