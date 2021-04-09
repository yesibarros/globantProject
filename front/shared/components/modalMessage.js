import React, {useState} from 'react';
import { useTheme } from "@react-navigation/native";

import {Modal, View, Text, Pressable, StyleSheet, TextInput, Dimensions} from 'react-native';
import {primaryGreen} from "../../utils/Colors"
const {height} = Dimensions.get('window')
import {useSelector} from 'react-redux';

const ModalMessage = ({visible, setModalVisible, handleSendRequest}) => {
    const loggedUser = useSelector(state => state.loggedUser.user) //DESDE REDUX TOMO EL USER PARA USAR EL ROL EN EL MENSAJE
    const [messageDefault, setMessageDefault] = useState(`¡Hola! Me gustaría ser tu ${loggedUser.role}`)

    const [inputMessage, setInputMessage] = useState(messageDefault)
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
                <View style={[styles.modalView, {backgroundColor: (colors.background === '#ffffff' ? '#858585' : primaryGreen)}]}>
                    <Text style={[styles.modalText, {color: (colors.text === "#ffffff" ? "#000" : "#ffffff")}]}>Puedes escribirle un mensaje</Text>
                    
                    <TextInput
                        style={[styles.input, {color: "#858585", fontSize: 15, backgroundColor: "rgba(255, 255, 255, 0.7)"}]}
                        multiline
                        value={inputMessage}
                        onChangeText={text => setInputMessage(text)}
                    />
                    <View style={styles.buttonsContainer}>
                        <Pressable
                        style={[styles.button, styles.buttonClose, {backgroundColor: (colors.background != '#ffffff' ? '#ffc78f' : primaryGreen)}]}
                        onPress={() => {
                            setInputMessage(messageDefault)
                            return setModalVisible(!visible)
                        }}
                        >
                        <Text style={[styles.textStyle, {color: (colors.text === "#ffffff" ? "#000": "#fff")}]}>Cancelar</Text>
                        </Pressable>

                        <Pressable
                        style={[styles.button, styles.buttonClose, {backgroundColor: (colors.background != '#ffffff' ? '#ffc78f' : primaryGreen)}]}
                        onPress={() => {
                            setModalVisible(!visible)
                            if(inputMessage === " "){
                                handleSendRequest(messageDefault) //ENVIA EL MENSAJE POR DEFAULT
                            }else{
                                handleSendRequest(inputMessage) //ENVIA EL MENSAJE CON LO INGRESADO AL INPUT
                            }
                        }}
                        >
                        <Text style={[styles.textStyle, {color: (colors.text === "#ffffff" ? "#000": "#fff")}]}>Enviar solicitud</Text>
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
        marginTop: 22,
    },
    modalView: {
        height: height/2,
        width: '90%',
        margin: 20,
        // backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        justifyContent: 'center',
        alignItems: "center",
        shadowColor: '#000000',
        shadowOffset: {
            width: 10,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 15
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

