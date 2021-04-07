import React from 'react'
import {View} from 'react-native'
import { Card, Title, Paragraph, Avatar, IconButton, Colors  } from 'react-native-paper';
import {primaryGreen} from "../../utils/Colors"
import styles from './requestCardStyle'

const RequestCard = ({request, received}) => {
    return (
      <Card
        style={styles.card}
      >
        <Card.Content>
          <View style={styles.container}>
            <View style={styles.infoContainer}>
              <View style={styles.titleContainer}>
                <Avatar.Image
                  size={50}
                  source={{
                    uri: request.img,
                  }}
                />
                <View style={styles.title}>
                  <Paragraph style={styles.fromRole}>
                    {request.fromRole}
                  </Paragraph>
                  <Title style={styles.name}>{request.from}</Title>
                </View>
              </View>
              <Paragraph style={styles.message} numberOfLines={1}>
                {request.message}
              </Paragraph>
            </View>
            {received? (
              <View style={styles.buttonContainer}>
                <IconButton
                  icon="check-outline"
                  color={primaryGreen}
                  size={30}
                  onPress={() => console.log("Pressed")}
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

