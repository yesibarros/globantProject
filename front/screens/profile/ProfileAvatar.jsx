import React from 'react'
const { width } = Dimensions.get("window");
import {
    View,
    Dimensions,  
  } from "react-native";
import { Avatar } from "react-native-elements";

const ProfileAvatar = ({loginUser, changePhoto}) => {
    return (
        <View style={{ top: -70, left: width / 3 }}>
        {loginUser.img ? (
          <Avatar
            size="xlarge"
            onPress={changePhoto}
            source={{
              uri: loginUser.img,
            }}
            avatarStyle={{ zIndex: 1, width: "100%", height: "100%" }}
            rounded
            title={loginUser.firstName + loginUser.lastName}
            titleStyle={{
              color: "white",
              backgroundColor: "gray",
              flex: 1,
              width: "100%",
              paddingTop: "15%",
            }}
            activeOpacity={0.7}
          />
        ) : (
          <Avatar
            size="xlarge"
            onPress={changePhoto}
            rounded
            title={
              loginUser._id &&
              `${loginUser.firstName[0]}${loginUser.lastName[0]}`
            }
            titleStyle={{
              color: "white",
              backgroundColor: "gray",
              flex: 1,
              width: "100%",
              paddingTop: "15%",
              zIndex: 1,
            }}
            // onPress={() => console.log("Works!")}
            activeOpacity={0.7}
          />
        )}
      </View>
    )
}

export default ProfileAvatar
