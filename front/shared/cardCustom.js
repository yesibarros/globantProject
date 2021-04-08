import React, {useState} from "react";
import { StyleSheet, View, Dimensions, Alert } from "react-native";
import { Avatar, Card, Button, Chip, Title } from "react-native-paper";
import {useDispatch, useSelector} from 'react-redux';
import {sendRequest} from '../state/requests/Thunks';
import ModalMessage from './components/modalMessage';


const CardCustom = ({ matchPerson, selected, cancelButton, navigation}) => {
  const borderWidth = selected ? 2 : 0;
  const borderColor = selected ? "black" : "";
  const [showModal, setShowModal] = useState(false)
  const loggedUser = useSelector(state => state.loggedUser.user)
  const dispatch = useDispatch()

  const handleSendRequest = (message) => {
    if(loggedUser.role.includes('mentee')){
      const mentor = {
        _id: matchPerson._id,
        message: message
      }
      
      dispatch(sendRequest({mentor})).then((data) => {
        if(data.meta.requestStatus === 'rejected'){
          return Alert.alert("Ya tienes una solicitud en curso", "Espera a que sea aceptada o negada para enviar la siguiente", [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('Requests')
            }
          ]) 
        }
        Alert.alert("Solicitud enviada", ' ', [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Requests')
          }
        ])
      })


    }else{
        const mentees = [{
          _id: matchPerson._id,
          message: message
        }]

      dispatch(sendRequest({mentees}))
    }
  }

  return (
    <View
      style={[
        styles.card,
        { borderWidth: borderWidth, borderColor: borderColor },
      ]}
    >
      <View style={styles.cardContent}></View>

      <Card.Title
        right={() => (
          <Avatar.Text
            rounded
            label={matchPerson.firstName[0] + matchPerson.lastName[0]}
            style={styles.avatar}
          />
        )}
        title={matchPerson.firstName + " " + matchPerson.lastName}
        titleStyle={styles.cardTitle}
        subtitle={
          matchPerson.role && matchPerson.role.toString().toUpperCase() +
          " | " +
          "Working since: " +
          matchPerson.workingSince +
          " | " +
          matchPerson.location.locationName
        }
        subtitleStyle={styles.cardSubtitle}
      />

      <Card.Content style={styles.chipContainer}>
        <Title>Areas</Title>
        <View style={styles.techMapContainer}>
          {matchPerson.areas.map((area, j) => {
            return (
              <View style={styles.chipView} key={j}>
                <Chip mode="outlined" height={25} textStyle={styles.chipText}>
                  {area.areaName}
                </Chip>
              </View>
            );
          })}
        </View>
      </Card.Content>

      <Card.Content style={styles.chipContainer}>
        <Title>Technologies</Title>
        <View style={styles.techMapContainer}>
          {matchPerson.technologies.map((tech, i) => {
            return (
              <View style={styles.chipView} key={i}>
                <Chip mode="outlined" height={25} textStyle={styles.chipText}>
                  {tech.technologyName}
                </Chip>
              </View>
            );
          })}
        </View>
      </Card.Content>

      <Card.Actions style={styles.buttonActions}>
        {!selected ? null : (
          <Button onPress={() => cancelButton()} mode="contained" color="white">
            Cancel
          </Button>
        )}
        <Button 
        onPress={() => setShowModal(true)}
        icon="account-check">
          {!selected ? "This one!" : "For sure!"}
        </Button>
      </Card.Actions>

      <ModalMessage visible={showModal} setModalVisible={setShowModal} handleSendRequest={handleSendRequest}/>

    </View>
  );
};

export default CardCustom;

const screenWidth = Dimensions.get("window").width / 1.05;
const screenHeigth = Dimensions.get("window").height / 2.3;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "lightgrey",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 20,
    width: screenWidth,
    height: screenHeigth,
    marginHorizontal: 10,
  },
  cardContent: {
    marginVertical: 2,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5,
  },
  techMapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chipText: {
    marginVertical: 1,
  },
  chipContainer: {
    marginTop: 8,
  },
  cardSubtitle: {
    fontStyle: "italic",
  },
  chipView: {
    margin: 2,
  },
  avatar: {
    backgroundColor: "white",
    marginRight: 15,
    marginTop: 10,
  },
  buttonActions: {
    justifyContent: "flex-end",
    marginRight: 15,
    marginTop: 10,
  },
});
