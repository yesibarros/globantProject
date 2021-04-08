import React, {useState} from 'react'
import {View, Alert, TouchableOpacity} from 'react-native'
import { Card, Title, Paragraph, Avatar, IconButton, Colors, ActivityIndicator} from 'react-native-paper';
import {primaryGreen} from "../../utils/Colors"
import styles from './requestCardStyle'
import {useDispatch} from 'react-redux';
import {setUser} from '../../state/loggedUser/actions';
import {cancelRequest, acceptRequest} from '../../state/requests/Thunks';

const RequestCard = ({request, received, navigation}) => {
    const [buttonSendLoading, setButtonSendLoading] = useState(false)
    const [buttonCancelLoading, setButtonCancelLoading] = useState(false)

    const dispatch = useDispatch()

    const handleAccept = () => {
      setButtonSendLoading(true)
    
      dispatch(acceptRequest(request._id)).then((data) => {
        setButtonSendLoading(false)

        if(data.meta.requestStatus === 'rejected'){
          return Alert.alert("Ya tienes un mentor", "Lo sentimos, no podes tener mas de 1 mentor", [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('Requests')
            }
          ]) 
        }else{
          Alert.alert("¡Felicidades!", "Ya tenes un nuevo mentor", [
            {
              text: 'Ok',
              onPress: () => navigation.navigate('Requests')
            }
          ])
          dispatch(setUser(data.payload.user))
        }
      })
    }

    const handleCancel = () => {
      setButtonCancelLoading(true)

      dispatch(cancelRequest(request._id)).then((data) => {
        setButtonCancelLoading(false)

        Alert.alert(`Solicitud ${received ? 'rechazada' : 'eliminada'}`, " ", [
          {
            text: 'Ok',
            onPress: () => navigation.navigate('Requests')
          }
        ])
        dispatch(setUser(data.payload.user))
      
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
                
                {buttonSendLoading 
                ? 
                  <ActivityIndicator
                    size={30}
                    style={{marginLeft: 15}}
                    color={primaryGreen}
                  />
                :
                  <IconButton
                    icon='check-outline'
                    color={primaryGreen}
                    size={30}
                    onPress={() => handleAccept()}
                  />
                }

                {buttonCancelLoading 
                ? 
                  <ActivityIndicator
                    size={30}
                    style={{marginRight: 15}}
                    color={Colors.red500}
                  />
                :
                <IconButton
                  icon="close-outline"
                  color={Colors.red500}
                  size={30}
                  onPress={() => handleCancel()}
                />
                }
              </View>) : 

              (buttonCancelLoading 
                ? 
                  <ActivityIndicator
                    size={30}
                    style={{marginRight: 15}}
                    color={Colors.red500}
                  />
                :
                <IconButton
                  icon="delete-outline"
                  color={Colors.red500}
                  size={30}
                  onPress={() => handleCancel()}
                />
              )
            }
            
          </View>
        </Card.Content>
      </Card>
    );
}

export default RequestCard

