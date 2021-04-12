//REACT
import * as React from "react";
import {
  ActivityIndicator,
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
} from "react-native";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import PillButton from "../../shared/components/PillButton";
import { updateProfile } from "../../state/loggedUser/thunks";
import { useTheme } from "@react-navigation/native";

import localHost from "../../localHostIp";
const TechModal = ({ visible, setEditTech }) => {
  const { colors } = useTheme();
  const [technologiesArray, setTechnologiesArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const user = useSelector((state) => state.loggedUser.user);
  const [selectedTechs, setSelectedTechs] = React.useState(user.technologies);
  const dispatch = useDispatch();
  React.useEffect(() => {
    axios.get(`http:/${localHost}/api/techs`).then((res) => {
      setTechnologiesArray(res.data);
      setIsLoading(false);
    });
  }, []);

  const handleCloseModal = () => {
    if (!selectedTechs.length) {
      return Alert.alert("¡Cuidado!", "Debes seleccionar alguna tecnología", [
        {
          text: "OK",
          onPress: () =>
            console.log("OK Pressed de Tech seleccionar una tecno"),
        },
      ]);
    }
    setEditTech(false);
  };

  const handleSelect = (id) => {
    const tech = selectedTechs.filter((t) => t._id == id);
    if (tech.length) {
      setSelectedTechs((prevState) => prevState.filter((t) => t._id !== id));
    } else {
      setSelectedTechs((prevState) => [...prevState, { _id: id }]);
    }
  };

  const handleSave = () => {
    const arrayToSave = selectedTechs.map((t) => t._id);
    let obj = {
      id: user._id,
      technologies: arrayToSave,
    };
    dispatch(updateProfile(obj)).then(() => {
      setEditTech(false);
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
          <Text style={[styles.title, { color: colors.text }]}>
            Tecnologías:
          </Text>
          <View style={styles.mapContainer}>
            {technologiesArray.length > 0 &&
              technologiesArray.map((item) => {
                //const selected = selectedTechs.includes(item)
                const selected = selectedTechs.filter(
                  (tech) => tech._id == item._id
                ).length
                  ? true
                  : false;
                return (
                  <PillButton
                    title={item.technologyName}
                    key={item._id}
                    id={item._id}
                    selected={selected}
                    onSelect={handleSelect}
                  />
                );
              })}
          </View>
          <View style={styles.buttonContainer}>
            <View style={{ width: "40%" }}>
              <Button onPress={handleCloseModal} title="Cerrar" />
            </View>
            <View style={{ width: "40%" }}>
              <Button
                onPress={handleSave}
                title="Guardar"
                disabled={selectedTechs.length ? false : true}
              />
            </View>
          </View>
        </View>
      )}
    </Modal>
  );
};

export default TechModal;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 2,
    marginBottom: 10,
    marginHorizontal: 30,
    marginVertical: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 50,
    // shadowOffset:{  width: 10,  height: 10,  },
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
    padding: 2,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginVertical: 30,
    marginBottom: 20,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
  },
});
