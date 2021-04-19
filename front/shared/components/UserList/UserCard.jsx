import React, { useState } from "react";
import { View, Alert, TouchableOpacity } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  Avatar,
  IconButton,
  Colors,
  ActivityIndicator,
} from "react-native-paper";
import { primaryGreen } from "../../../utils/Colors";
import styles from "./userCardStyle";
import { useDispatch } from "react-redux";
import { setUser } from "../../../state/loggedUser/actions";
import { cancelRequest, acceptRequest } from "../../../state/requests/Thunks";
import Menu from "../Menu/Menu";


const UserCard = ({ user, received, navigation }) => {

const initials = user && user.firstName[0]+user.lastName[0]
  
if(!user) return <Card style={styles.empty}></Card>

return (
    <Card style={styles.card}>
      <Card.Title
        title={`${user.firstName} ${user.lastName}`}
        subtitle={`${user.description ? user.description : ""}`}
        left={(props) =>
          user.img ? (
            <Avatar.Image {...props} source={{ uri: user.img }} />
          ) : (
            <Avatar.Text
              {...props}
              style={{ backgroundColor: "gray" }}
              color="white"
              label={initials}
            />
          )
        }
        right={(props) => (
        <Menu {...props} userId={user._id} navigation={navigation}/>
      
        )}
      />
    </Card>
  );
};

export default UserCard;