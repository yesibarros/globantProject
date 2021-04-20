import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert
} from "react-native";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../bajaStyles"
import {getCountries, deleteCountry} from "../../../../state/admin/paises/thunks"
import PillButton from "../../../../shared/components/PillButton";
import { ScrollView } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const BajaPais = ({viewDelModal, nombre, setViewDelModal, setIsLoading}) =>{
    const { colors } = useTheme();
    const dispatch = useDispatch()
    const countries= useSelector(state=> state.admin.paises)
    const [selectedCountries, setSelectedCountries] = React.useState([])

    React.useEffect(()=>{
        dispatch(getCountries()).then(()=> setIsLoading(false))
    }, [])
  
    
    const handleSelect = (id) => {
        const country = selectedCountries.filter((t) => t._id == id);
        if (country.length) {
            setSelectedCountries((prevState) => prevState.filter((t) => t._id !== id));
        } else {
            setSelectedCountries((prevState) => [...prevState, { _id: id }]);
        }
      };

    const handleDelete= ()=>{
      selectedCountries.forEach(country => {
        dispatch(deleteCountry({_id: country._id}))
      });

    
      setViewDelModal(false)
      return Alert.alert("Acción completa", "Pais/es borrado/s exitosamente", [
        { text: "OK", onPress: () => console.log("OK Pressed") },
      ])
    }

    return (
        
        <View style={styles.viewContainer}>
             
             
             <Text style={styles.title}>Baja de {nombre}</Text>
             <View
             style={styles.mapContainer}
           >
             <ScrollView>
             {countries && countries.length > 0 && countries.map(country=>{
                  const selected = selectedCountries.filter(
                    (singleCountry) => singleCountry._id == country._id
                  ).length
                    ? true
                    : false;
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
   
           <View
             style={styles.buttonContainer}
           >
           
             <Button
               style={styles.Button}
               onPress={() => {
                   setViewDelModal(false);
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
                 onPress={() =>  handleDelete()}
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
export default BajaPais