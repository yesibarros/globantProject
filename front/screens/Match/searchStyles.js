import { StyleSheet} from "react-native";
import { primaryGreen } from "../../utils/Colors";
const colors = {
  red: "#EC2379",
  blue: "#0070FF",
  gray: "#777777",
  white: "#ffffff",
  black: "#000000",
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      bottomContainerButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        flex: 0.32,
      },
      card: {
        backgroundColor: "white",
        flex: 0.75,
        borderRadius: 25,
        shadowColor: "#000",
        // shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 1.0,
        shadowRadius: 3.84,
        elevation: 30,
      },
      cardTitleView: {
        flex: 0.41,
        alignItems: "center",
        justifyContent: "space-around",
      },
      cardTitleText: {
        fontSize: 35,
        color: primaryGreen,
      },
      cardSubtitleText: {
        color: colors.text,
        fontStyle: "italic",
        fontSize: 17,
      },
      cardSubtitleRole: {
        shadowOpacity: 0.2,
        shadowOffset: { width: 1, height: 1 },
        color: "gray",
        fontSize: 20,
        backgroundColor: "transparent",
      },
      mapsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        flex: 0.6,
        justifyContent: "center",
        alignContent: "center",
      },
      tecnoAndAreaText: {
        fontWeight: "bold",
        fontSize: 20,
        paddingTop: 15,
        paddingBottom: 5,
      },

});

export default styles