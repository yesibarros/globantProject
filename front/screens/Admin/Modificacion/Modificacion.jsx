import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput
} from "react-native";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../adminStyle"


const ModificacionModal = ({viewModModal, nombre, setViewModModal}) =>{

    return(
        <Modal visible={viewModModal} transparent={true} animationType="slide">
        <View style={styles.viewContainer}>
            <View
              style={{
                flex: 0.3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Modificacion de {nombre}</Text>
              <TextInput
                style={[styles.input, {color: "#858585", fontSize: 15, backgroundColor: "rgba(255, 255, 255, 0.7)"}]}
                multiline
              />
            </View>

            <View
              style={{
                flex: 0.4,
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
            
              <Button
                style={styles.Button}
                onPress={() => {
                    setViewModModal(false);
                }}
              >
                <Text
                  style={{ fontSize: 22, color: "white", textAlign: "center" }}
                >
                  Cerrar
                </Text>
              </Button>
                
              <Button
                  style={styles.Button}
                  onPress={() =>  setViewModModal(false)}
                >
                  <Text
                    style={{
                      fontSize: 22,
                      color: "white",
                      textAlign: "center",
                    }}
                  >
                    GUARDAR
                  </Text>
                </Button>
            </View>
        </View>
        </Modal>








    )
}

export default ModificacionModal;