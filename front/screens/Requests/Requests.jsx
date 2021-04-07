import React, {useState} from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'


//STYLE
import styles from "./requestsStyle";
import { useTheme } from "@react-navigation/native";

//COMPONENTS
import RequestCard from "./RequestCard"


const requests = [
    {   
        _id: "1234",
        from: "Pepe Globant",
        to: "Michael Scott",
        message: "Hola que tal quiero ser tu mentor, creo que haríamos un buen match",
        fromRole: "mentor",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
    },
    {
        _id: "1234454",
        from: "Jim Halpert",
        to: "Michael Scott",
        message: "Hola que tal quiero ser tu mentee",
        fromRole: "mentee",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
    },
    {
        _id: "123455",
        from: "Michael Scott",
        to: "Dwight Schrute",
        message: "Hola que tal quiero ser tu mentor",
        fromRole: "mentor",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
    },
    {
        _id: "12345",
        from: "Kelly Kapoor",
        to: "Kelly Kapoor",
        message: "Hola que tal quiero ser tu mentor",
        fromRole: "mentor",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
    },
    {
        _id: "1234534545",
        from: "Kelly Kapoor",
        to: "Kelly Kapoor",
        message: "Hola que tal quiero ser tu mentor",
        fromRole: "mentor",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
    },
    {
        _id: "1234363416g45",
        from: "Kelly Kapoor",
        to: "Kelly Kapoor",
        message: "Hola que tal quiero ser tu mentor",
        fromRole: "mentor",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
    },
    {
        _id: "1234rye5",
        from: "Kelly Kapoor",
        to: "Kelly Kapoor",
        message: "Hola que tal quiero ser tu mentor",
        fromRole: "mentor",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
    },
    {
        _id: "123537y545",
        from: "Kelly Kapoor",
        to: "Kelly Kapoor",
        message: "Hola que tal quiero ser tu mentor",
        fromRole: "mentor",
        img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/NafSadh_Profile.jpg/768px-NafSadh_Profile.jpg"
    },
]



const Requests = () => {
    const [showReceived, setShowReceived] = useState(true)
    const { colors } = useTheme();

    const filteredRequests = showReceived ? requests.filter(r => r.to == "Michael Scott") : requests.filter(r => r.from == "Michael Scott") //cambiar michael scott por user._id

    return (
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>REQUESTS</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              setShowReceived(true);
            }}
          >
            <Text style={[styles.buttons, showReceived && styles.underline]}>
              RECIBIDAS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowReceived(false);
            }}
          >
            <Text style={[styles.buttons, !showReceived && styles.underline]}>
              PENDIENTES
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          <FlatList
            data={filteredRequests}
            keyExtractor={(request) => request._id}
            renderItem={request => (
                <RequestCard request={request.item} received={showReceived}/>
            )}
          />

          {/* <RequestCard request={requests[0]} received={showReceived}/> */}
        </View>
      </View>
    );
}

export default Requests
