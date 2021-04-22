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
import {getTechs, deleteTech} from "../../../../state/admin/tecnologias/thunks"
import PillButton from "../../../../shared/components/PillButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { color } from "react-native-reanimated";

const BajaTech = ({viewDelModal, nombre, setViewDelModal, setIsLoading}) =>{
    const { colors } = useTheme();
    const dispatch = useDispatch()
    const techs= useSelector(state=> state.admin.tecnologias)
    const [selectedTechs, setSelectedTechs] = React.useState([])

    React.useEffect(()=>{
        dispatch(getTechs()).then(()=> setIsLoading(false))
    }, [])
    
    const handleSelect = (id) => {
        const tech = selectedTechs.filter((t) => t._id == id);
        if (tech.length) {
            setSelectedTechs((prevState) => prevState.filter((t) => t._id !== id));
        } else {
            setSelectedTechs((prevState) => [...prevState, { _id: id }]);
        }
      };

    const handleDelete= ()=>{
      selectedTechs.forEach(tech => {
              dispatch(deleteTech({_id: tech._id}))
            });
      
          
           
            return Alert.alert("Acción completa", "Tecnología/s borrada/s exitosamente", [
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
             {techs && techs.length > 0 && techs.map(tech=>{
                  const selected = selectedTechs.filter(
                    (singleTech) => singleTech._id == tech._id
                  ).length
                    ? true
                    : false;
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
export default BajaTech