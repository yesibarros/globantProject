import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Alert
} from "react-native";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../altaStyles"
import {createLocation} from "../../../../state/admin/locaciones/thunks"

const AltaLocacion = ({nombre, setViewModal}) =>{

    const [name, setName]= React.useState("")
    const dispatch= useDispatch()
    const handleCreation= ()=>{
        dispatch(createLocation(name)).then(()=>{
            setViewModal(false)
            return Alert.alert("Acción completa", "Locación creada exitosamente", [
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ])
        })
    }

    return(

        <View style={styles.viewContainer}>
            
              <Text style={styles.title}>Creación de {nombre}</Text>
              <View
              style={styles.mapContainer}
            >
              <TextInput
              value={name}
              onChangeText={text => setName(text)}
                style={[styles.input, {color: "#858585", fontSize: 15, backgroundColor: "rgba(255, 255, 255, 0.7)"}]}
                multiline
              />
            </View>

            <View
              style={styles.buttonContainer}
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
                  onPress={() =>  handleCreation()}
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
    








    )
}

export default AltaLocacion;