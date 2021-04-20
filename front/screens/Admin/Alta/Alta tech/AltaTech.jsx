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
import {createTech} from "../../../../state/admin/tecnologias/thunks"

const AltaTechs = ({nombre, setViewModal}) =>{
    const [name, setName]= React.useState("")
    const dispatch= useDispatch()
    const handleCreation= ()=>{
        dispatch(createTech(name)).then(()=>{
            setViewModal(false)
            return Alert.alert("Acción completa", "Tecnología creada exitosamente", [
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ])
        })
    }

    return(

        <View style={styles.viewContainer}>
            <View
              style={styles.wrapper}
            >
              <Text style={styles.title}>Creación de {nombre}</Text>
              
              <TextInput
              value={name}
              onChangeText={text => setName(text)}
                style={styles.input}
                multiline
              />
           

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
                style={styles.textButton}                
                >
                  Cerrar
                </Text>
              </Button>
                
              <Button
                  style={styles.Button}
                  onPress={() =>  handleCreation()}
                >
                  <Text
                    style={styles.textButton}
                  >
                    GUARDAR
                  </Text>
                </Button>
            </View>
        </View>
        </View>








    )
}

export default AltaTechs;