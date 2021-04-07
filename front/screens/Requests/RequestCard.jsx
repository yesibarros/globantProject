import React from 'react'
import {View, Alert, TouchableOpacity} from 'react-native'
import { Card, Title, Paragraph, Avatar, IconButton, Colors} from 'react-native-paper';
import {primaryGreen} from "../../utils/Colors"
import styles from './requestCardStyle'
import {useDispatch} from 'react-redux';
import {setUser} from '../../state/loggedUser/actions';
import {cancelRequest, acceptRequest} from '../../state/requests/Thunks';

const RequestCard = ({request, received}) => {
    const dispatch = useDispatch()

    const handleAccept = () => {
      dispatch(acceptRequest(request._id)).then((data) => {
        console.log(data)
        // dispatch(setUser())
      })
    }

    return (
      <Card
        style={styles.card}
      >
        <Card.Content>
          <View style={styles.container}>
            <TouchableOpacity
              activeOpacity={1} 
              style={styles.infoContainer}
              onPress={() => Alert.alert(`${request.from}`, `${request.message}`)}
            >
              <View style={styles.titleContainer}>
                <Avatar.Image
                  size={50}
                  source={{
                    uri: (received ? request.from.img : request.to.img)
                  }}
                />
                <View style={styles.title}>
                  <Paragraph style={styles.fromRole}>
                    {request.fromRole}
                  </Paragraph>
                  <Title style={styles.name}>
                    {received ? `${request.from.firstName} ${request.from.lastName}` : `${request.to.firstName} ${request.to.lastName}` }
                  </Title>
                </View>
              </View>
              <Paragraph style={styles.message} numberOfLines={1}>
                {request.message}
              </Paragraph>
            </TouchableOpacity>
            {received? (
              <View style={styles.buttonContainer}>
                <IconButton
                  icon="check-outline"
                  color={primaryGreen}
                  size={30}
                  onPress={() => handleAccept()}
                />
                <IconButton
                  icon="close-outline"
                  color={Colors.red500}
                  size={30}
                  onPress={() => console.log("Pressed")}
                />
              </View>) : 
              (<View style={styles.cancelContainer}>
                <IconButton
                  icon="delete-outline"
                  color={Colors.red500}
                  size={30}
                  onPress={() => console.log("Pressed")}
                />
              </View>)
            }
            
          </View>
        </Card.Content>
      </Card>
    );
}

export default RequestCard

