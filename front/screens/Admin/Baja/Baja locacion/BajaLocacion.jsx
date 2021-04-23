//REACT
import * as React from "react";

//REACT-NATIVE
import { View, Text, Alert, ScrollView } from "react-native";

//REACT-NATIVE-PAPER
import { Button } from "react-native-paper";

//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  getLocations,
  deleteLocation,
} from "../../../../state/admin/locaciones/thunks";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//STYLE
import styles from "../bajaStyles";

//SCREEN
import PillButton from "../../../../shared/components/PillButton";

const BajaLocacion = ({ nombre, setViewDelModal, setIsLoading }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.admin.locaciones);
  const [selectedLocations, setSelectedLocations] = React.useState([]);

  React.useEffect(() => {
    dispatch(getLocations()).then(() => setIsLoading(false));
  }, []);

  const handleSelect = (id) => {
    const location = selectedLocations.filter((t) => t._id == id);
    if (location.length) {
      setSelectedLocations((prevState) =>
        prevState.filter((t) => t._id !== id)
      );
    } else {
      setSelectedLocations((prevState) => [...prevState, { _id: id }]);
    }
  };
  const handleDelete = () => {
    selectedLocations.forEach((location) => {
      dispatch(deleteLocation({ _id: location._id }));
    });

    return Alert.alert(
      "Acción completa",
      "Locacion/es borrada/s exitosamente",
      [{ text: "OK", onPress: () => setViewDelModal(false) }]
    );
  };

  return (
    <View
      style={[styles.viewContainer, { backgroundColor: colors.background }]}
    >
      <Text style={[styles.title, { color: colors.text }]}>
        Baja de {nombre}
      </Text>
      <View style={styles.mapContainer}>
        <ScrollView>
          {locations &&
            locations.length > 0 &&
            locations.map((locacion) => {
              const selected = selectedLocations.filter(
                (singleLocation) => singleLocation._id == locacion._id
              ).length
                ? true
                : false;
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
      <View style={styles.buttonContainer}>
        <Button
          style={styles.Button}
          onPress={() => {
            setViewDelModal(false);
          }}
        >
          <Text style={styles.textButton}>Cerrar</Text>
        </Button>

        <Button style={styles.Button} onPress={() => handleDelete()}>
          <Text style={styles.textButton}>GUARDAR</Text>
        </Button>
      </View>
    </View>
  );
};
export default BajaLocacion;
