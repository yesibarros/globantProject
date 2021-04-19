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


const AltaModal = ({viewModal, nombre, setViewModal}) =>{

    return(
        <Modal visible={viewModal} transparent={true} animationType="slide">
        <View style={styles.viewContainer}>
            <View
              style={{
                flex: 0.3,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text>Creacion de {nombre}</Text>
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
                  setViewModal(false);
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
                  onPress={() =>  setViewModal(false)}
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

export default AltaModal;

