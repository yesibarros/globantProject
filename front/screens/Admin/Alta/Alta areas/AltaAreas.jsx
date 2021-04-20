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
import {createArea} from "../../../../state/admin/areas/thunks"

const AltaArea = ({nombre, setViewModal}) =>{
    const [name, setName]= React.useState("")
    const dispatch= useDispatch()
    const handleCreation= ()=>{
        dispatch(createArea(name)).then(()=>{
            setViewModal(false)
            return Alert.alert("Acción completa", "Area creada exitosamente", [
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
                style={styles.input}
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

export default AltaArea;