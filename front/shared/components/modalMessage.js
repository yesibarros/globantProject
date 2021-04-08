import React, {useState} from 'react';
import { useTheme } from "@react-navigation/native";

import {Modal, View, Text, Pressable, StyleSheet, TextInput, Dimensions} from 'react-native';
import {primaryGreen} from "../../utils/Colors"
const {height} = Dimensions.get('window')

const ModalMessage = ({visible, setModalVisible, handleSendRequest}) => {
    const [inputMessage, setInputMessage] = useState('')
    const { colors } = useTheme();
    return(
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => setModalVisible(!visible)}
            >
                <View style={styles.centeredView}>
                <View style={[styles.modalView, {backgroundColor: colors.background}]}>
                    <Text style={[styles.modalText, {color: colors.text}]}>Mensaje</Text>
                    
                    <TextInput
                        style={[styles.input, {backgroundColor: "rgba(255, 255, 255, 0.7)"}]}
                        multiline
                        onChangeText={text => setInputMessage(text)}
                    />
                    <View style={styles.buttonsContainer}>
                        <Pressable
                        style={[styles.button, styles.buttonClose, {backgroundColor: primaryGreen}]}
                        onPress={() => setModalVisible(!visible)}
                        >
                        <Text style={styles.textStyle}>Cancelar</Text>
                        </Pressable>

                        <Pressable
                        style={[styles.button, styles.buttonClose, {backgroundColor: primaryGreen}]}
                        onPress={() => {
                            setModalVisible(!visible)
                            handleSendRequest(inputMessage)
                        }}
                        >
                        <Text style={styles.textStyle}>Enviar solicitud</Text>
                        </Pressable>
                    </View>
                </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '90%',
        padding: 10,
        margin: 12,
        borderWidth: 0.5,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: height/2,
        width: '90%',
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent: 'center',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
        },
        button: {
        marginTop: 15,
        borderRadius: 15,
        padding: 10,
        elevation: 2,
        paddingVertical: 13,

        },
        buttonOpen: {
        backgroundColor: "#F194FF",
        },
        buttonClose: {
        backgroundColor: "#2196F3",
        },
        textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15
    },
    modalText: {
        marginBottom: 15,
        fontSize: 18,
        textAlign: "center"
    },
    buttonsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    
        width: '90%'
    }
    });


export default ModalMessage

