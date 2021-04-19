import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  ActivityIndicator
} from "react-native";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../adminStyle"
import BajaAreas from "./Baja areas/BajaAreas"
import BajaLocacion from "./Baja locacion/BajaLocacion";
import BajaPais from "./Baja pais/BajaPais";
import BajaTech from "./Baja tech/BajaTech";



const BorrarModal = ({viewDelModal, nombre, setViewDelModal}) =>{
    const [isLoading, setIsLoading] = React.useState(false)
    const { colors } = useTheme();
    const dispatch = useDispatch()
    
  console.log(nombre)
   

    return(
        <Modal visible={viewDelModal} transparent={true} animationType="slide">
            {isLoading ? (
        <View
          style={[styles.viewContainer, { backgroundColor: colors.background }]}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : 
             nombre == "area" ? <BajaAreas nombre={nombre} setIsLoading={setIsLoading} setViewDelModal={setViewDelModal}/> 
             : 
             nombre == "locación" ? <BajaLocacion nombre={nombre} setIsLoading={setIsLoading} setViewDelModal={setViewDelModal}/> 
             :
             nombre == "país" ? <BajaPais nombre={nombre} setIsLoading={setIsLoading} setViewDelModal={setViewDelModal}/> 
             :
             nombre == "tecnologia" ? <BajaTech nombre={nombre} setIsLoading={setIsLoading} setViewDelModal={setViewDelModal}/> : null
      
      }
        </Modal>








    )
}

export default BorrarModal;