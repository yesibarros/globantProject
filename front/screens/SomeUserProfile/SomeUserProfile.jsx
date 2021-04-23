//REACT
import React from "react";

// REACT REDUX
import { useSelector } from "react-redux";

//REACT NATIVE
import { ScrollView, View, Text, Dimensions } from "react-native";
import { Avatar } from "react-native-elements";
import { useTheme } from "@react-navigation/native";

//SCREENS
import Header from "../header/Header";

//STYLE
import styles from "./someUserProfile";
const { width } = Dimensions.get("window");

const Mentor = ({ navigation }) => {
  const loginUser = useSelector((state) => state.loggedUser.user);

  const { colors } = useTheme();

  if (loginUser.mentor == undefined) {
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Mentor</Text>
      </View>
    );
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header navigation={navigation} />
        <View style={[styles.body, { backgroundColor: colors.background }]}>
          <View style={{ top: -70, left: width / 3 }}>
            {loginUser.mentor.img ? (
              <Avatar
                size="xlarge"
                source={{
                  uri: loginUser.mentor.img,
                  width: "100%",
                  height: "100%",
                  zIndex: 1,
                }}
                rounded
                title={loginUser.mentor.firstName + loginUser.mentor.lastName}
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
                rounded
                title={
                  loginUser.mentor._id &&
                  `${loginUser.mentor.firstName[0]}${loginUser.mentor.lastName[0]}`
                }
                titleStyle={{
                  color: "white",
                  backgroundColor: "gray",
                  flex: 1,
                  width: "100%",
                  paddingTop: "15%",
                  zIndex: 1,
                }}
                activeOpacity={0.7}
              />
            )}
          </View>

          <View
            style={{ marginHorizontal: 20, alignItems: "center", bottom: 60 }}
          >
            <Text
              style={{ fontWeight: "bold", color: colors.text }}
            >{`${loginUser.mentor.firstName} ${loginUser.mentor.lastName}`}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Mentor;
