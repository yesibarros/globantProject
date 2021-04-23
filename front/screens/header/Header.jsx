import React from "react";
import { View } from "react-native";
import styles from "./headerStyle";
// const feather = require('feather-icons')
import { IconButton, Badge } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Header = ({ navigation }) => {
  const { colors } = useTheme();
  const menuBadge = useSelector((state) => state.menuBadge);
  return (
    <View style={styles.header}>
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          marginTop: hp("3%"),
          marginLeft: wp("4%"),
        }}
      >
        {menuBadge && (
          <Badge
            size={hp("1.6%")}
            style={{
              position: "absolute",
              top: hp("2.7%"),
              right: hp("2.5%"),
              zIndex: 1,
            }}
          ></Badge>
        )}
        <IconButton
          icon="menu"
          color={colors.icon}
          size={hp("5.5%")}
          onPress={() => navigation.openDrawer()}
        />
      </View>
    </View>
  );
};

export default Header;
