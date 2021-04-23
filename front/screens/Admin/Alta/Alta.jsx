//REACT
import * as React from "react";

//REACT-NATIVE
import { Modal, View } from "react-native";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//STYLE
import styles from "../adminStyle";

//SCREENS
import AltaArea from "./Alta areas/AltaAreas";
import AltaTechs from "./Alta tech/AltaTech";
import AltaPais from "./Alta pais/AltaPais";
import AltaLocacion from "./Alta locacion/AltaLocacion";

const AltaModal = ({ viewModal, nombre, setViewModal }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const { colors } = useTheme();

  return (
    <Modal visible={viewModal} transparent={true} animationType="slide">
      {isLoading ? (
        <View
          style={[styles.viewContainer, { backgroundColor: colors.background }]}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : nombre == "area" ? (
        <AltaArea nombre={nombre} setViewModal={setViewModal} />
      ) : nombre == "locación" ? (
        <AltaLocacion nombre={nombre} setViewModal={setViewModal} />
      ) : nombre == "país" ? (
        <AltaPais nombre={nombre} setViewModal={setViewModal} />
      ) : nombre == "tecnologia" ? (
        <AltaTechs nombre={nombre} setViewModal={setViewModal} />
      ) : null}
    </Modal>
  );
};

export default AltaModal;
