//REACT
import * as React from "react";

//REACT-NATIVE
import { View, Text, TextInput, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

//REACT-NATIVE-PAPER
import { Button } from "react-native-paper";

//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  getCountries,
  modifyCountry,
} from "../../../../state/admin/paises/thunks";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//STYLE
import styles from "../modificacionStyles";

//SHARED
import PillButton from "../../../../shared/components/PillButton";

const ModificacionPais = ({ nombre, setViewModModal, setIsLoading }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.admin.paises);
  const [selectedCountries, setSelectedCountries] = React.useState("");
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    dispatch(getCountries()).then(() => setIsLoading(false));
  }, []);

  const handleSelect = (id) => {
    setSelectedCountries(id);
  };

  const handlePut = () => {
    if (!selectedCountries) {
      return alert("Debes seleccionar un area");
    } else if (!name) {
      return alert("Debes ingresar un nombre");
    } else {
      dispatch(modifyCountry({ _id: selectedCountries, name: name })).then(
        (data) => {
          return Alert.alert(
            "Acción completa",
            "Pais modificado exitosamente",
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
        Modificación de {nombre}
      </Text>
      <View style={styles.mapContainer}>
        <ScrollView>
          {countries &&
            countries.length > 0 &&
            countries.map((country) => {
              const selected = selectedCountries == country._id ? true : false;
              return (
                <PillButton
                  title={country.countryName}
                  key={country._id}
                  id={country._id}
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
export default ModificacionPais;
