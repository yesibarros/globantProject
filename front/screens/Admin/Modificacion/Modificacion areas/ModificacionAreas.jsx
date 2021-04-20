import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  
} from "react-native";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../modificacionStyles"
import {getAreas, deleteArea, modifyArea} from "../../../../state/admin/areas/thunks"
import PillButton from "../../../../shared/components/PillButton";


const ModificacionAreas = ({nombre, setViewModModal, setIsLoading}) =>{
    const { colors } = useTheme();
    const dispatch = useDispatch()
    const areas= useSelector(state=> state.admin.areas)
    const [selectedAreas, setSelectedAreas] = React.useState("")
    const [name, setName] = React.useState("")

    React.useEffect(()=>{
        dispatch(getAreas()).then(()=> setIsLoading(false))
    }, [])
    
    const handleSelect = (id) => {
        setSelectedAreas(id)
      };

    const handlePut= ()=>{
     if(!selectedAreas){
        return alert("Debes seleccionar un area")
     }   
     else if(!name){
         return alert("Debes ingresar un nombre")
     }else{
         dispatch(modifyArea({_id:selectedAreas, name: name})).then((data)=>{
             console.log("HOLAAAAAAAAAAAAA")
             setViewModModal(false)
             return Alert.alert("Acción completa", "Area modificada exitosamente", [
                { text: "OK", onPress: () => console.log("OK Pressed") },
              ])
         })
     }
      }

    return (
        
        <View style={styles.viewContainer}>
             
             
             <Text style={styles.title}>Modificación de {nombre}</Text>
             <View
             style={styles.mapContainer}
           >
             <ScrollView>
             {areas && areas.length > 0 && areas.map(area=>{
                  const selected = selectedAreas == area._id ? true : false
                  return (
                   
                    <PillButton
                      title={area.areaName}
                      key={area._id}
                      id={area._id}
                      selected={selected}
                      onSelect={handleSelect}
                    />
                   
               
             )})}
            </ScrollView>
            
           </View>
            
           <Text style={styles.title}>Nuevo nombre:</Text>
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
                setViewModModal(false);
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
                 onPress={() =>  handlePut()}
               >
                 <Text
                   style={styles.textButton}
                 >
                   GUARDAR
                 </Text>
               </Button>
           </View>
       </View>
            
       
    )
}
export default ModificacionAreas