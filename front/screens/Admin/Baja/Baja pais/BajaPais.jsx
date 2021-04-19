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
import styles from "../../adminStyle"
import {getCountries, deleteCountry} from "../../../../state/admin/paises/thunks"
import PillButton from "../../../../shared/components/PillButton";
import { ScrollView } from "react-native-gesture-handler";


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
        
        <ScrollView style={styles.viewContainer}>
             
             <View
             style={{
               flex: 0.3,
               justifyContent: "center",
               alignItems: "center",
             }}
           >
             <Text>Baja de {nombre}</Text>
             {countries && countries.map(country=>{
                  const selected = selectedCountries.filter(
                    (singleCountry) => singleCountry._id == country._id
                  ).length
                    ? true
                    : false;
                  return (
                      <View style={{ width: 120}}>
                    <PillButton
                      title={country.countryName}
                      key={country._id}
                      id={country._id}
                      selected={selected}
                      onSelect={handleSelect}
                    />
                    </View>
               
             )})}
            
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
                   setViewDelModal(false);
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
                 onPress={() =>  handleDelete()}
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
            
       
    )
}
export default BajaPais