//REACT
import React from "react";

// REACT REDUX
import { useDispatch, useSelector } from "react-redux";

// REACT NATIVE
import { ScrollView, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Avatar } from "react-native-elements";
import { IconButton } from "react-native-paper";
import { useTheme } from "@react-navigation/native";

// EXPO
import * as MailComposer from "expo-mail-composer";

//SCREENS
import Header from "../header/Header";
import TabBar from "../../routes/Tab/TabBar";
import Configuration from "../configuration/Configuration";

//STYLE
import styles from "./singleUserStyle";

const SingleUser = ({ navigation }) => {
  const singleUser = useSelector((state) => state.singleUser.user);
  const { colors } = useTheme();

  const handleShare = () => {
    MailComposer.composeAsync({
      subject: `Mentor Me: perfil de ${singleUser.firstName} ${singleUser.lastName}`,
      isHtml: true,
      body: `<h1>${singleUser.firstName} ${singleUser.lastName}</h1><h2>${
        singleUser.description
      }</h2><h2>${singleUser.role.join(
        " "
      )}</h2><h3>Areas</h3><p>${singleUser.areas
        .map((a) => a.areaName)
        .join(", ")}</p><h3>Tecnologías</h3><p>${singleUser.technologies
        .map((t) => t.technologyName)
        .join(", ")}</p>`,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Header navigation={navigation} />
        <View style={styles.shareContainer}>
          <IconButton
            icon="share-variant"
            color="white"
            size={hp("5%")}
            style={{
              position: "absolute",
              zIndex: 3,
              width: wp("94%"),
              top: hp("-9%"),
              alignItems: "flex-end",
            }}
            onPress={handleShare}
          />
        </View>

        <View style={[styles.body, { backgroundColor: colors.background }]}>
          <View style={styles.photo}>
            {singleUser.img ? (
              <Avatar
                size={hp("20%")}
                source={{
                  uri: singleUser.img,
                }}
                avatarStyle={{ zIndex: 1, width: "100%", height: "100%" }}
                rounded
                title={singleUser.firstName[0] + singleUser.lastName[0]}
                titleStyle={{
                  color: "white",
                  width: wp("100%"),
                  paddingTop: "15%",
                }}
                activeOpacity={0.7}
              />
            ) : (
              <Avatar
                size={hp("20%")}
                rounded
                title={
                  singleUser._id &&
                  `${singleUser.firstName[0]}${singleUser.lastName[0]}`
                }
                titleStyle={{
                  color: "white",
                  width: wp("100%"),
                }}
                activeOpacity={0.7}
              />
            )}
          </View>

          <View
            style={{
              alignItems: "center",
              bottom: hp("7%"),
              justifyContent: "space-between",
              height: hp("15%"),
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: colors.text,
                fontSize: hp("3%"),
              }}
            >{`${singleUser.firstName} ${singleUser.lastName}`}</Text>
            <Text style={{ color: colors.text, fontSize: hp("1.7%") }}>
              {singleUser.email}
            </Text>
            <Text
              style={{
                fontSize: hp("2%"),
                alignContent: "center",
                color: colors.text,
              }}
            >
              {singleUser.description}
            </Text>

            <Text>
              {" "}
              Location:{" "}
              {singleUser.location && singleUser.location.locationName}
            </Text>
          </View>

          <Configuration showLogged={false} />
        </View>
      </ScrollView>
      <TabBar navigation={navigation} />
    </View>
  );
};

export default SingleUser;
