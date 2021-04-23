//REACT
import * as React from "react";

//REACT-NATIVE
import { View, Text, ScrollView, Alert } from "react-native";

//REACT-NATIVE-PAPER
import { Button } from "react-native-paper";

//REACT-REDUX
import { useSelector, useDispatch } from "react-redux";
import {
  getTechs,
  deleteTech,
} from "../../../../state/admin/tecnologias/thunks";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//STYLE
import styles from "../bajaStyles";

//SHARED
import PillButton from "../../../../shared/components/PillButton";

const BajaTech = ({ nombre, setViewDelModal, setIsLoading }) => {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const techs = useSelector((state) => state.admin.tecnologias);
  const [selectedTechs, setSelectedTechs] = React.useState([]);

  React.useEffect(() => {
    dispatch(getTechs()).then(() => setIsLoading(false));
  }, []);

  const handleSelect = (id) => {
    const tech = selectedTechs.filter((t) => t._id == id);
    if (tech.length) {
      setSelectedTechs((prevState) => prevState.filter((t) => t._id !== id));
    } else {
      setSelectedTechs((prevState) => [...prevState, { _id: id }]);
    }
  };

  const handleDelete = () => {
    selectedTechs.forEach((tech) => {
      dispatch(deleteTech({ _id: tech._id }));
    });

    return Alert.alert(
      "Acción completa",
      "Tecnología/s borrada/s exitosamente",
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
          {techs &&
            techs.length > 0 &&
            techs.map((tech) => {
              const selected = selectedTechs.filter(
                (singleTech) => singleTech._id == tech._id
              ).length
                ? true
                : false;
              return (
                <PillButton
                  title={tech.technologyName}
                  key={tech._id}
                  id={tech._id}
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
export default BajaTech;
