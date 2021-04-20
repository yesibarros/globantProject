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
        
        <KeyboardAvoidingView behavior="position" style={styles.viewContainer}>
             
             
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
            
           

           <Text style={styles.title}>Nuevo nombre:</Text>
           <View style={styles.mapContainer}>
                
            <TextInput
              value={name}
              onChangeText={text => setName(text)}
                style={styles.input}
                multiline
              />
            </View>
   
           <View
             style={styles.buttonContainer, {flexDirection: "row", marginTop:20,justifyContent:"space-evenly", marginBottom: 350}}
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
                 onPress={() =>  handlePut()}
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
           </ScrollView>
           </View>
       </KeyboardAvoidingView>
            
       
    )
}
export default ModificacionPais