//REACT
import * as React from "react";
import { ActivityIndicator,Modal, View, Text, Button, StyleSheet, Alert } from "react-native"
import axios from "axios"
import {useSelector, useDispatch} from "react-redux"
import PillButton from "../../shared/components/PillButton";
import {updateProfile} from "../../state/loggedUser/thunks"

const localHost = require("../../localHostIp");

const AreaModal = ({visible, setEditArea}) => {

    const [areasArray, setAreasArray]= React.useState([])
    const [isLoading, setIsLoading]= React.useState(true)
    const user = useSelector(state => state.loggedUser.user)
    const [selectedAreas, setSelectedAreas] = React.useState(user.areas)
    const dispatch= useDispatch()
    React.useEffect(() => {
        axios.get((`http://${localHost}/api/areas`))
        .then((res)=>{
            setAreasArray(res.data)
            setIsLoading(false)
        })  
    }, []);

    const handleCloseModal = ()=>{
        if(!selectedAreas.length){
            return Alert.alert("¡Cuidado!","Debes seleccionar algun perfil",
            [{ text: "OK", onPress: () => console.log("OK Pressed") }]
            )
        }
        setEditArea(false)
    }

    const handleSelect = (id)=>{
        const area = selectedAreas.filter(a => a._id == id)
        if(area.length){
            setSelectedAreas(prevState => prevState.filter(a => a._id !== id))
        }else{
            setSelectedAreas(prevState => [...prevState, {_id: id}])
        }
    }

    const handleSave = ()=>{
        const arrayToSave = selectedAreas.map(a => a._id)
        let obj = {
            "id": user._id,
            "areas": arrayToSave
          }
          dispatch(updateProfile(obj)).then(()=>{
              setEditArea(false)
            })

    }
   
    return (
        <Modal visible={visible} animationType="slide" transparent={true} >
            
            {isLoading?
            (
                <View style={styles.viewContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )       
        
       :(
            <View style={styles.viewContainer}>


                <Text style={styles.title}>Perfiles:</Text>
                <View style={styles.mapContainer}>
                {areasArray.length > 0 && areasArray.map((item) => {
                    //const selected = selectedTechs.includes(item)
                    const selected = selectedAreas.filter(area => area._id == item._id).length? true : false
                    return <PillButton title={item.areaName} key={item._id} id={item._id} selected={selected} onSelect={handleSelect}/> 
                })
                }
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={handleCloseModal} title="Cerrar" />
                    <Button onPress={handleSave} title="Guardar" disabled={selectedAreas.length? false : true}/>
                </View>
                
            </View>
        )}
        </Modal>
    )

}

export default AreaModal;

const styles = StyleSheet.create({

    viewContainer: {

        flex: 2,
        marginBottom:10,
        marginHorizontal: 30,
        marginVertical: 50,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius:50,
        // shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius:50,
        elevation:5
    },
    mapContainer:{
        // backgroundColor:"blue",
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        
      }, 
      title: {
        fontSize: 25,
        fontWeight: "bold",
        textDecorationLine: "underline",
        marginVertical: 30,
        marginBottom: 20
      },
      buttonContainer: {
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: 30,
      }
})