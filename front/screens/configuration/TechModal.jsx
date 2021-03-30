import * as React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native"

const TechModal = ({visible, setEditTech}) => {
    

    return (
        
        <Modal visible={visible} animationType="slide" transparent={true}>
            <View style={styles.viewContainer}>


                <Text>Modallllllllllllllllll</Text>
                <Button onPress={() => setEditTech(false)} title="cerrar"/>
                
            </View>
        </Modal>
    )

}

export default TechModal;

const styles = StyleSheet.create({

    viewContainer: {
        flex: 3,
        margin: 30,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    }
})