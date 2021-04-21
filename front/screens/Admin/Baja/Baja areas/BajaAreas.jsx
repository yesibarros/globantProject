import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView,
  Alert
} from "react-native";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../bajaStyles"
import {getAreas, deleteArea} from "../../../../state/admin/areas/thunks"
import PillButton from "../../../../shared/components/PillButton";


const BajaAreas = ({viewDelModal, nombre, setViewDelModal, setIsLoading}) =>{
    const { colors } = useTheme();
    const dispatch = useDispatch()
    const areas= useSelector(state=> state.admin.areas)
    const [selectedAreas, setSelectedAreas] = React.useState([])

    React.useEffect(()=>{
        dispatch(getAreas()).then(()=> setIsLoading(false))
    }, [])
    
    const handleSelect = (id) => {
        const area = selectedAreas.filter((t) => t._id == id);
        if (area.length) {
            setSelectedAreas((prevState) => prevState.filter((t) => t._id !== id));
        } else {
            setSelectedAreas((prevState) => [...prevState, { _id: id }]);
        }
      };

      const handleDelete= ()=>{
        selectedAreas.forEach(area => {
            dispatch(deleteArea({_id: area._id}))
          })
    
          Alert.alert("Acción completa", "Area/s borrada/s exitosamente", [
            { text: "OK", onPress: () => setViewDelModal(false) },
          ])
        
        }

    return (
        
        <View style={styles.viewContainer}>
             
             
           
             <Text style={styles.title}>Baja de {nombre}</Text>
             <View
             style={styles.mapContainer}
           >
             <ScrollView>
             {areas && areas.length > 0 && areas.map(area=>{
                  const selected = selectedAreas.filter(
                    (singleArea) => singleArea._id == area._id
                  ).length
                    ? true
                    : false;
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
export default BajaAreas