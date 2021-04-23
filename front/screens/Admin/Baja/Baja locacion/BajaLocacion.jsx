import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  Alert,
  ScrollView
} from "react-native";
import {Button} from "react-native-paper"
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../bajaStyles"
import {getLocations, deleteLocation} from "../../../../state/admin/locaciones/thunks"
import PillButton from "../../../../shared/components/PillButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";



const BajaLocacion = ({viewDelModal, nombre, setViewDelModal, setIsLoading}) =>{
    const { colors } = useTheme();
    const dispatch = useDispatch()
    const locations= useSelector(state=> state.admin.locaciones)
    const [selectedLocations, setSelectedLocations] = React.useState([])

    React.useEffect(()=>{
        dispatch(getLocations()).then(()=> setIsLoading(false))
    }, [])
    
    const handleSelect = (id) => {
        const location = selectedLocations.filter((t) => t._id == id);
        if (location.length) {
          setSelectedLocations((prevState) => prevState.filter((t) => t._id !== id));
        } else {
          setSelectedLocations((prevState) => [...prevState, { _id: id }]);
        }
      };
    const handleDelete= ()=>{
      selectedLocations.forEach(location => {
            dispatch(deleteLocation({_id: location._id}))
          });

          return Alert.alert("Acción completa", "Locacion/es borrada/s exitosamente", [
            { text: "OK", onPress: () =>  setViewDelModal(false) },
          ])
        }

    return (
        
        <View style={[styles.viewContainer, {backgroundColor: colors.background}]}>
             
             
             <Text style={[styles.title, {color: colors.text}]}>Baja de {nombre}</Text>
             <View
             style={styles.mapContainer}
           >
             <ScrollView>
             {locations && locations.length > 0  &&  locations.map(locacion=>{
                  const selected = selectedLocations.filter(
                    (singleLocation) => singleLocation._id == locacion._id
                  ).length
                    ? true
                    : false;
                  return (
                    
                    <PillButton
                      title={locacion.locationName}
                      key={locacion._id}
                      id={locacion._id}
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
export default BajaLocacion