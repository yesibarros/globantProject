//REACT
import * as React from "react";

//REACT-NATIVE
import { Modal, View, ActivityIndicator } from "react-native";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//STYLE
import styles from "../adminStyle";

//SCREENS
import BajaAreas from "./Baja areas/BajaAreas";
import BajaLocacion from "./Baja locacion/BajaLocacion";
import BajaPais from "./Baja pais/BajaPais";
import BajaTech from "./Baja tech/BajaTech";

const BorrarModal = ({ viewDelModal, nombre, setViewDelModal }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { colors } = useTheme();

  return (
    <Modal visible={viewDelModal} transparent={true} animationType="slide">
      {isLoading ? (
        <View
          style={[styles.viewContainer, { backgroundColor: colors.background }]}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : nombre == "area" ? (
        <BajaAreas
          nombre={nombre}
          setIsLoading={setIsLoading}
          setViewDelModal={setViewDelModal}
        />
      ) : nombre == "locación" ? (
        <BajaLocacion
          nombre={nombre}
          setIsLoading={setIsLoading}
          setViewDelModal={setViewDelModal}
        />
      ) : nombre == "país" ? (
        <BajaPais
          nombre={nombre}
          setIsLoading={setIsLoading}
          setViewDelModal={setViewDelModal}
        />
      ) : nombre == "tecnologia" ? (
        <BajaTech
          nombre={nombre}
          setIsLoading={setIsLoading}
          setViewDelModal={setViewDelModal}
        />
      ) : null}
    </Modal>
  );
};

export default BorrarModal;
