//REACT
import * as React from "react";

//REACT-NATIVE

import { View, Text, TextInput, Alert, ScrollView } from "react-native";

//REACT-NATIVE-PAPER
import { Button } from "react-native-paper";

//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  getLocations,
  modifyLocation,
} from "../../../../state/admin/locaciones/thunks";

//REACT-NATIGATION
import { useTheme } from "@react-navigation/native";

//STYLE
import styles from "../modificacionStyles";

//SHARED
import PillButton from "../../../../shared/components/PillButton";

const ModificacionLocacion = ({ nombre, setViewModModal, setIsLoading }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.admin.locaciones);
  const [selectedLocations, setSelectedLocations] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    dispatch(getLocations()).then(() => setIsLoading(false));
  }, []);

  const handleSelect = (id) => {
    setSelectedLocations(id);
  };

  const handlePut = () => {
    if (!selectedLocations) {
      return alert("Debes seleccionar una locación");
    } else if (!name) {
      return alert("Debes ingresar un nombre");
    } else {
      dispatch(modifyLocation({ _id: selectedLocations, name: name })).then(
        (data) => {
          return Alert.alert(
            "Acción completa",
            "Locación modificada exitosamente",
            [{ text: "OK", onPress: () => setViewModModal(false) }]
          );
        }
      );
    }
  };

  return (
    <View
      style={[styles.viewContainer, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.title, { color: colors.text }]}>
        Modificacion de {nombre}
      </Text>
      <View style={styles.mapContainer}>
        <ScrollView>
          {locations &&
            locations.length > 0 &&
            locations.map((locacion) => {
              const selected = selectedLocations == locacion._id ? true : false;
              return (
                <PillButton
                  title={locacion.locationName}
                  key={locacion._id}
                  id={locacion._id}
                  selected={selected}
                  onSelect={handleSelect}
                />
              );
            })}
        </ScrollView>
      </View>

      <Text style={[styles.title, { color: colors.text }]}>Nuevo nombre:</Text>

      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        style={[
          styles.input,
          { color: "black", backgroundColor: "rgba(255, 255, 255, 0.7)" },
        ]}
        multiline
      />

      <View style={styles.buttonContainer}>
        <Button
          style={styles.Button}
          onPress={() => {
            setViewModModal(false);
          }}
        >
          <Text style={styles.textButton}>Cerrar</Text>
        </Button>

        <Button style={styles.Button} onPress={() => handlePut()}>
          <Text style={styles.textButton}>GUARDAR</Text>
        </Button>
      </View>
    </View>
  );
};
export default ModificacionLocacion;
