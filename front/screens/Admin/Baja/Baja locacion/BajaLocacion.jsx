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
import styles from "../../adminStyle"
import {getAreas} from "../../../../state/admin/areas/thunks"
import PillButton from "../../../../shared/components/PillButton";


const BajaLocacion = ({viewDelModal, nombre, setViewDelModal, setIsLoading}) =>{
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

    return (
        
        <View style={styles.viewContainer}>
             
             <View
             style={{
               flex: 0.3,
               justifyContent: "center",
               alignItems: "center",
             }}
           >
             <Text>Baja de {nombre}</Text>
             {areas && areas.map(area=>{
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
                 onPress={() =>  setViewDelModal(false)}
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
       </View>
            
       
    )
}
export default BajaLocacion