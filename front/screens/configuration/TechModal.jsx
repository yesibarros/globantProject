//REACT
import * as React from "react";
import { ActivityIndicator,Modal, View, Text, Button, StyleSheet } from "react-native"
import axios from "axios"


const TechModal = ({visible, setEditTech}) => {
    const [technologiesArray, setTechnologiesArray]= React.useState([])
    const [isLoading, setIsLoading]= React.useState(true)
    React.useEffect(() => {
        axios.get(("http://192.168.0.100:5000/api/techs"))
        .then((res)=>{
            setTechnologiesArray(res.data)
            setIsLoading(false)
        })  
    }, []);

   
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


                <Text>Modallllllllllllllllll</Text>
                <Button onPress={() => setEditTech(false)} title="cerrar"/>
                
            </View>
        )}
        </Modal>
    )

}

export default TechModal;

const styles = StyleSheet.create({

    viewContainer: {

        flex: 3,
        marginBottom:10,
        marginHorizontal: 30,
        marginVertical: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius:50,
        // shadowOffset:{  width: 10,  height: 10,  },
        shadowColor: 'black',
        shadowOpacity: 1.0,
        shadowRadius:50,
        elevation:5
    }
})