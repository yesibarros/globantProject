//REACT
import * as React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
//SCREENS
import PillButton from "../../shared/components/PillButton";
import TechModal from "./TechModal";
import AreaModal from "./AreaModal";

//REDUX
import { useSelector } from "react-redux";

//EXPO
import { Ionicons } from "@expo/vector-icons";

const Configuration = ({ showLogged }) => {
  const { colors } = useTheme();

  const user = showLogged
    ? useSelector((state) => state.loggedUser.user)
    : useSelector((state) => state.singleUser.user);
  //AREAS
  const [showMoreAreas, setShowMoreAreas] = React.useState(false);
  const areasArray = showMoreAreas
    ? user.areas
    : user._id && user.areas.slice(0, 3);
  const initEditArea = areasArray && areasArray.length ? false : true;
  const [editArea, setEditArea] = React.useState(initEditArea);

  //TECHS
  const [showMore, setShowMore] = React.useState(false);
  const technologiesArray =
    user._id && showMore
      ? user.technologies
      : user._id && user.technologies.slice(0, 3);
  const initEditTech =
    technologiesArray && technologiesArray.length ? false : true;
  const [editTech, setEditTech] = React.useState(initEditTech);

  React.useEffect(() => {
    if (user.areas && user.areas.length < 1) {
      setEditArea(true);
      setEditTech(false);
    }
    if (user.areas && user.areas.length >= 1 && user.technologies.length < 1) {
      setEditArea(false);
      setEditTech(true);
    }
  }, [user.areas]);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View
        style={[styles.areasContainer, { backgroundColor: colors.background }]}
      >
        <View
          style={[
            styles.titleContainer,
            { backgroundColor: colors.background },
          ]}
        >
          <Text style={[styles.text, { color: colors.text }]}>Tu Perfil:</Text>
          {showLogged ? (
            <TouchableOpacity onPress={() => setEditArea(true)}>
              <Ionicons
                name="create-outline"
                color={colors.text}
                size={hp("4%")}
              ></Ionicons>
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.mapContainer}>
          {user.areas &&
            user.areas.length > 0 &&
            areasArray.map((item) => {
              return (
                <PillButton
                  title={item.areaName}
                  key={item._id}
                  disabled={true}
                />
              );
            })}
        </View>

        <AreaModal visible={editArea} setEditArea={setEditArea} />

        {user.areas && user.areas.length > 3 && (
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => {
              setShowMoreAreas((prevState) => !prevState);
            }}
          >
            <Text style={styles.userBtnTxt}>
              See {showMoreAreas ? "Less" : "More"}...
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.areasContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.text, { color: colors.text }]}>
            Tus Tecnologías:
          </Text>
          {showLogged ? (
            <TouchableOpacity onPress={() => setEditTech(true)}>
              <Ionicons
                name="create-outline"
                color={colors.text}
                size={hp("4%")}
              ></Ionicons>
            </TouchableOpacity>
          ) : null}
        </View>

        <View style={styles.mapContainer}>
          {user.technologies &&
            user.technologies.length > 0 &&
            technologiesArray.map((item) => {
              return (
                <PillButton
                  title={item.technologyName}
                  key={item._id}
                  disabled={true}
                />
              );
            })}
        </View>

        <TechModal visible={editTech} setEditTech={setEditTech} />

        {user.technologies && user.technologies.length > 3 && (
          <TouchableOpacity
            style={styles.userBtn}
            onPress={() => {
              setShowMore((prevState) => !prevState);
            }}
          >
            <Text style={styles.userBtnTxt}>
              See {showMore ? "Less" : "More"}...
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Configuration;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("100%"),
  },
  text: {
    marginLeft: hp("2%"),
    fontSize: hp("2.3%"),
    fontWeight: "bold",
    color: "#000",
  },
  areasContainer: {
    width: wp("100%"),
    marginBottom: hp("2%"),
  },
  textSign: {
    fontSize: 15,
    fontWeight: "bold",
    alignContent: "center",
    color: "black",
  },
  circular: {
    marginTop: 15,
    width: "65%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "lightgrey",
  },
  mapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  userBtn: {
    alignItems: "flex-end",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userBtnTxt: {
    fontSize: 20,
    color: "#009387",
  },
  titleContainer: {
    width: wp("100%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
