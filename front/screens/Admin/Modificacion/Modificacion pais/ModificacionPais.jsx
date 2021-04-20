import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView
} from "react-native";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../modificacionStyles"
import {getCountries, deleteCountry, modifyCountry} from "../../../../state/admin/paises/thunks"
import PillButton from "../../../../shared/components/PillButton";
import { ScrollView } from "react-native-gesture-handler";


const ModificacionPais = ({viewDelModal, nombre, setViewModModal, setIsLoading}) =>{
    const { colors } = useTheme();
    const dispatch = useDispatch()
    const countries= useSelector(state=> state.admin.paises)
    const [selectedCountries, setSelectedCountries] = React.useState("")
    const [name, setName] = React.useState("")

    React.useEffect(()=>{
        dispatch(getCountries()).then(()=> setIsLoading(false))
    }, [])
  
    
    const handleSelect = (id) => {
        setSelectedCountries(id)
      };

    const handlePut= ()=>{
     if(!selectedCountries){
        return alert("Debes seleccionar un area")
     }   
     else if(!name){
         return alert("Debes ingresar un nombre")
     }else{
         dispatch(modifyCountry({_id:selectedCountries, name: name})).then((data)=>{
   
             setViewModModal(false)
             return Alert.alert("Acción completa", "Pais modificado exitosamente", [
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
             {countries && countries.length > 0 && countries.map(country=>{
                  const selected = selectedCountries == country._id ? true : false
                  return (
                     
                    <PillButton
                      title={country.countryName}
                      key={country._id}
                      id={country._id}
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
export default ModificacionPais