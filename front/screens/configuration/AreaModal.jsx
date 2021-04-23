//REACT
import * as React from "react";

//REACT-NATIVE
import {
  ActivityIndicator,
  Modal,
  View,
  Text,
  StyleSheet,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//AXIOS
import axios from "axios";

//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../state/loggedUser/thunks";

//SHARED
import PillButton from "../../shared/components/PillButton";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//REACT-NATIVE-PAPER
import { Button } from "react-native-paper";

//LOCALHOST
import localHost from "../../localHostIp";

const AreaModal = ({ visible, setEditArea }) => {
  const { colors } = useTheme();
  const [saveLoad, setSaveLoad] = React.useState(false);
  const [areasArray, setAreasArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const user = useSelector((state) => state.loggedUser.user);
  const [selectedAreas, setSelectedAreas] = React.useState(user.areas);
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get(`http://${localHost}/api/areas`).then((res) => {
      setAreasArray(res.data);
      setIsLoading(false);
    });
  }, []);

  const handleCloseModal = () => {
    if (!selectedAreas.length) {
      return Alert.alert("¡Cuidado!", "Debes seleccionar algun perfil", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ]);
    }
    setEditArea(false);
  };

  const handleSelect = (id) => {
    const area = selectedAreas.filter((a) => a._id == id);
    if (area.length) {
      setSelectedAreas((prevState) => prevState.filter((a) => a._id !== id));
    } else {
      setSelectedAreas((prevState) => [...prevState, { _id: id }]);
    }
  };

  const handleSave = () => {
    setSaveLoad(true);
    const arrayToSave = selectedAreas.map((a) => a._id);
    let obj = {
      id: user._id,
      areas: arrayToSave,
    };
    dispatch(updateProfile(obj)).then(() => {
      setEditArea(false);
      setSaveLoad(false);
    });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      {isLoading ? (
        <View
          style={[styles.viewContainer, { backgroundColor: colors.background }]}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View
          style={[styles.viewContainer, { backgroundColor: colors.background }]}
        >
          <Text style={[styles.title, { color: colors.text }]}>Perfiles</Text>
          <View style={styles.mapContainer}>
            {areasArray.length > 0 &&
              areasArray.map((item) => {
                //const selected = selectedTechs.includes(item)
                const selected = selectedAreas.filter(
                  (area) => area._id == item._id
                ).length
                  ? true
                  : false;
                return (
                  <PillButton
                    title={item.areaName}
                    key={item._id}
                    id={item._id}
                    selected={selected}
                    onSelect={handleSelect}
                  />
                );
              })}
          </View>
          <View style={styles.buttonContainer}>
            <Button style={styles.button} onPress={handleCloseModal}>
              <Text style={styles.textButton}>Cerrar</Text>
            </Button>
            <View style={{ width: wp("40%") }}>
              {saveLoad ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <Button
                  style={styles.button}
                  onPress={() => {
                    handleSave();
                    handleCloseModal();
                  }}
                >
                  <Text style={styles.textButton}>GUARDAR</Text>
                </Button>
              )}
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

export default AreaModal;

const styles = StyleSheet.create({
  viewContainer: {
    height: hp("87%"),
    marginHorizontal: wp("5%"),
    marginVertical: hp("7%"),
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "black",
    shadowOpacity: 1.0,
    shadowRadius: 50,
    elevation: 5,
  },
  mapContainer: {
    // backgroundColor:"blue",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: wp("1%"),
  },
  title: {
    fontSize: hp("4%"),
    fontWeight: "bold",

    letterSpacing: 1,
    marginVertical: hp("3%"),
    marginBottom: hp("2%"),
  },
  buttonContainer: {
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: hp("4%"),
  },
  button: {
    paddingVertical: hp("0%"),
    width: wp("40%"),
    backgroundColor: "#e89600",
  },
  textButton: {
    color: "white",
    fontSize: hp("2%"),
  },
});
