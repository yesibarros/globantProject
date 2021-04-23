// REACT
import React, { useState } from "react";

// REACT NATIVE
import { Card, Avatar } from "react-native-paper";

// SCREENS
import styles from "./userCardStyle";
import Menu from "../Menu/Menu";

const UserCard = ({ user, received, navigation }) => {
  const initials =
    user && user.firstName && user.firstName[0] + user.lastName[0];

  if (!user) return <Card style={styles.empty}></Card>;

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
          <Menu {...props} userId={user._id} navigation={navigation} />
        )}
      />
    </Card>
  );
};

export default UserCard;
