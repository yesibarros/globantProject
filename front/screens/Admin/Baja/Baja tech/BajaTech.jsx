import * as React from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  ActivityIndicator,
  ScrollView
} from "react-native";
import {Button} from "react-native-paper"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "@react-navigation/native";
import styles from "../../adminStyle"
import {getTechs} from "../../../../state/admin/tecnologias/thunks"
import PillButton from "../../../../shared/components/PillButton";


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

      console.log("Las techs", techs)

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
             {techs && techs.map(tech=>{
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
       </ScrollView>
            
       
    )
}
export default BajaTech