import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  progressContainer: {
    flex: 0.92,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    paddingLeft: "2.5%",
  },
  titleProgress: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
    paddingLeft: 10,
    color: "black",
  },
  viewContainer: {
    backgroundColor: "#fff",
    flex: 1,
    marginHorizontal: 10,
    marginTop: '15%',
    maxHeight: '70%',
    justifyContent: "center",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 20,
    borderRadius: 50,
    borderWidth: 1.5,
    borderColor: 'green',
  },
  input: {
    width: '90%',
    padding: 10,
    margin: 12,
    borderWidth: 0.5,
  },
  Button: {
    backgroundColor: "#009387",
    width: "40%",
    height: "20%",
    justifyContent: "center",
  }
});

export default styles;
