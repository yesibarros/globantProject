import React from 'react'
import { View, Text, Button, TouchableWithoutFeedback, ActivityIndicator } from 'react-native'
import { StyleSheet } from "react-native";
import {primaryGreen} from "../../../utils/Colors"
import { BlurView } from 'expo-blur';
import { useTheme } from "@react-navigation/native";


const ConfirmCancelMatch = ({mentor, mentee, setShowModal, cancelMatch, isLoading}) => {

    const { colors } = useTheme();
    const firstName = mentee?.firstName || mentor?.fisrtName
    const lastName = mentee?.lastName || mentor?.lastName
    const rol = mentee? "mentee" : "mentor"
    console.log("MENTOR", firstName)
    return (
        <TouchableWithoutFeedback onPress={()=>setShowModal(false)}>
            <BlurView style={styles.container} intensity={100} tint="dark">
                <View style={[styles.surface, {backgroundColor: colors.background}]}>
                    <View style={styles.textContainer}>
                        <Text style={[styles.text, {color: colors.text}]}>{firstName} {lastName}</Text>
                        <Text style={[styles.text, {color: colors.text}]}>dejará de ser tu {rol}</Text>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <View style={styles.button}>
                            <Button title="cancelar" color="gray" onPress={()=>setShowModal(false)}/>
                        </View>
                        <View style={styles.button}>
                            {!isLoading? (<Button title="aceptar" color={primaryGreen} onPress={()=>cancelMatch(rol)}/>) : (
                                <View style={styles.spinner}><ActivityIndicator size="small" color="#ffffff" /></View>
                            )}
                        </View>
                    </View>
                </View>
            </BlurView>
        </TouchableWithoutFeedback>
    )
}

export default ConfirmCancelMatch

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%", 
        justifyContent: "center",
        alignItems: "center",
        padding: "10%",
    },
    surface: {
        width: "100%",
        padding: "5%",
        borderRadius: 10
    },
    button: {
        marginVertical: 10,
        borderRadius: 10
    },
    text: {
        fontSize: 20,
        textAlign: "center",
    },
    textContainer: {
        marginVertical: 10
    },
    spinner: {
        backgroundColor: "#005e57",
        height: 35,
        borderRadius: 2,
        elevation: 3,
        justifyContent: "center"
    }
});
  
