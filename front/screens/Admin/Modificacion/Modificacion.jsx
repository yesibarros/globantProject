//REACT
import * as React from "react";

//REACT-NATIVE
import { Modal, View } from "react-native";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//STYLE
import styles from "../adminStyle";

//SCREEN
import ModificacionAreas from "./Modificacion areas/ModificacionAreas";
import ModificacionTechs from "./Modificacion tech/ModificacionTechs";
import ModificacionLocacion from "./Modificacion locacion/ModificacionLocaciones";
import ModificacionPais from "./Modificacion pais/ModificacionPais";

const ModificacionModal = ({ viewModModal, nombre, setViewModModal }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { colors } = useTheme();

  return (
    <Modal visible={viewModModal} transparent={true} animationType="slide">
      {isLoading ? (
        <View
          style={[styles.viewContainer, { backgroundColor: colors.background }]}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : nombre == "area" ? (
        <ModificacionAreas
          nombre={nombre}
          setIsLoading={setIsLoading}
          setViewModModal={setViewModModal}
        />
      ) : nombre == "locación" ? (
        <ModificacionLocacion
          nombre={nombre}
          setIsLoading={setIsLoading}
          setViewModModal={setViewModModal}
        />
      ) : nombre == "país" ? (
        <ModificacionPais
          nombre={nombre}
          setIsLoading={setIsLoading}
          setViewModModal={setViewModModal}
        />
      ) : nombre == "tecnologia" ? (
        <ModificacionTechs
          nombre={nombre}
          setIsLoading={setIsLoading}
          setViewModModal={setViewModModal}
        />
      ) : null}
    </Modal>
  );
};

export default ModificacionModal;
