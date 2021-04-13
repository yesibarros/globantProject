import React, { useState } from "react";
import { View, Alert, TouchableOpacity, Text, Modal } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Avatar,
  IconButton,
  Colors,
  ActivityIndicator,
} from "react-native-paper";
import { primaryGreen } from "../../utils/Colors";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/loggedUser/actions";
import { cancelRequest, acceptRequest } from "../../state/requests/Thunks";
import styles from "./cardProgressStyle";

const CardProgress = ({ item, last }) => {
  const [viewModal, setViewModal] = useState(false)
  const dispatch = useDispatch();
  const border = last ? "transparent" : "lightgrey";
  // objectiveName
  // description
  // order
  // status: (list con estado, )
  return (
    <View style={[styles.container, { borderColor: border }]}>
      <Avatar.Icon
        size={55}
        color="#009387"
        icon="check-bold"
        style={styles.avatar}
      ></Avatar.Icon>
      <Card style={styles.card}>
        <Card.Title
          title={item.objectiveName}
          subtitle={item.description}
          right={(props) => (
            <IconButton
              {...props}
              size={35}
              color="#009387"
              icon="eye-plus"
              onPress={() => {
                setViewModal(true)
              }}
            />
          )}
        />

      </Card>
      
        <Modal visible={viewModal} transparent={true} animationType="slide">
              <View style={styles.viewContainer}>
                <Text style={{ flex:0.1,  fontSize:30, fontWeight:"bold", marginTop:20, alignContent:"center"}}>OBJETIVO EN PARTICULAR</Text>
                
                <Card style={styles.empty}>

                <Text style={{fontSize:20}}>{item.description}</Text>
                </Card>
                {/* recuadro con comentarios del mentor */}
                <Text>Feedback</Text>
                <Text>Estado</Text>
                {/* crear un select que tenga 3 opciones */}
                <Text>Fecha</Text>
                {/* implementar calender */}
                <TouchableOpacity/>
              </View>
        </Modal>
       
    </View>
  );
};

export default CardProgress;
