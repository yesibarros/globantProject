import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../modificacionStyles"
import {getTechs, deleteTech, modifyTech} from "../../../../state/admin/tecnologias/thunks"
import PillButton from "../../../../shared/components/PillButton";


const ModificacionTechs = ({nombre, setViewModModal, setIsLoading}) =>{
    const { colors } = useTheme();
    const dispatch = useDispatch()
    const techs= useSelector(state=> state.admin.tecnologias)
    const [selectedTechs, setSelectedTechs] = React.useState("")
    const [name, setName] = React.useState("")

    React.useEffect(()=>{
        dispatch(getTechs()).then(()=> setIsLoading(false))
    }, [])
    
    const handleSelect = (id) => {
        setSelectedTechs(id)
      };

      const handlePut= ()=>{
        if(!selectedTechs){
           return alert("Debes seleccionar una tecnología")
        }   
        else if(!name){
            return alert("Debes ingresar un nombre")
        }else{
            dispatch(modifyTech({_id:selectedTechs, name: name})).then((data)=>{
                setViewModModal(false)
                return Alert.alert("Acción completa", "Tecnología modificada exitosamente", [
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
             {techs && techs.length > 0 && techs.map(tech=>{
                  const selected = selectedTechs == tech._id ? true : false
                  return (
                    <PillButton
                      title={tech.technologyName}
                      key={tech._id}
                      id={tech._id}
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
                style={[styles.input, {color: "#858585", fontSize: 15, backgroundColor: "rgba(255, 255, 255, 0.7)"}]}
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
export default ModificacionTechs