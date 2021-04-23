//REACT
import React from "react";

//REACT NATIVE
import { StyleSheet, View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//REACT NATIVE PAPER
import { Avatar, Card, Button, Chip, Title } from "react-native-paper";

const CardCustom = ({ matchPerson, selected, cancelButton, okButton }) => {
  const { colors } = useTheme();
  const borderWidth = selected ? wp("0.8%") : wp("0.5%");
  const borderColor = selected ? "#009387" : "";

  return (
    <View
      style={[
        styles.card,
        { borderColor: borderColor, borderWidth: borderWidth },
        { backgroundColor: colors.background },
      ]}
    >
      <Card.Title
        style={{ height: hp("11%") }}
        right={() => (
          <Avatar.Image
            style={styles.avatar}
            size={hp("10%")}
            source={{ uri: matchPerson.img }}
          />
        )}
        titleStyle={styles.cardTitle}
        subtitleStyle={styles.cardSubtitle}
        title={matchPerson.firstName + " " + matchPerson.lastName}
        subtitle={
          matchPerson.role &&
          matchPerson.role.toString().toUpperCase() +
            " | " +
            "Working since: " +
            matchPerson.workingSince +
            " | " +
            (matchPerson.location && matchPerson.location.locationName)
        }
      />

      <Card.Content style={styles.chipContainer}>
        <Title style={styles.areaTechTitles}>Areas</Title>
        <View style={styles.techMapContainer}>
          {matchPerson.areas.map((area, j) => {
            if (j < 8) {
              return (
                <View style={styles.chipView} key={j}>
                  <Chip
                    mode="contained"
                    margin={hp("0.1%")}
                    style={{ height: hp("3%"), alignItems: "center" }}
                    textStyle={styles.chipText}
                  >
                    {area.areaName}
                  </Chip>
                </View>
              );
            }
          })}
        </View>

        <Title style={styles.areaTechTitles}>Technologies</Title>
        <View style={styles.techMapContainer}>
          {matchPerson.technologies.map((tech, i) => {
            if (i < 8) {
              return (
                <View style={styles.chipView} key={i}>
                  <Chip
                    mode="contained"
                    margin={hp("0.1%")}
                    style={{ height: hp("3%"), alignItems: "center" }}
                    textStyle={styles.chipText}
                  >
                    {tech.technologyName}
                  </Chip>
                </View>
              );
            }
          })}
        </View>
      </Card.Content>

      <Card.Actions style={styles.buttonActions}>
        {selected ? (
          <View
            style={{
              flexDirection: "row",
              height: hp("5%"),
            }}
          >
            <Button
              margin={hp("0.2%")}
              style={{ height: hp("4.5%") }}
              onPress={() => cancelButton(selected)}
              mode="contained"
              color="#ffc78f"
              icon="account-convert"
            >
              <Text style={{ fontSize: hp("1.8%") }}>Volver atras </Text>
            </Button>
            <Button
              margin={hp("0.2%")}
              style={{ height: hp("4.5%") }}
              onPress={() => okButton(selected, matchPerson)}
              icon="account-check"
              mode="contained"
              color="#ffc78f"
            >
              <Text style={{ fontSize: hp("1.8%") }}>
                {selected ? "Seleccionar" : "Mejor este!"}
              </Text>
            </Button>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              height: hp("5%"),
            }}
          >
            <Avatar.Icon
              size={hp("4.5%")}
              icon="arrow-left-bold-outline"
              color="grey"
              style={{ backgroundColor: "transparent" }}
            />
            <Button
              margin={hp("0.2%")}
              style={{ height: hp("4.5%") }}
              onPress={() => okButton(selected, matchPerson)}
              icon="account-check"
              mode="contained"
              color="#ffc78f"
            >
              <Text style={{ fontSize: hp("1.8%") }}>
                {selected ? "Seleccionar" : "Mejor este!"}
              </Text>
            </Button>
            <Avatar.Icon
              size={hp("4.5%")}
              icon="arrow-right-bold-outline"
              color="grey"
              style={{ backgroundColor: "transparent" }}
            />
          </View>
        )}
      </Card.Actions>
    </View>
  );
};

export default CardCustom;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: "white",
    width: wp("95%"),
    height: hp("43.5%"),
    margin: hp("0.5%"),
    justifyContent: "space-between",
    marginHorizontal: 9.7,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: hp("4%"),
  },
  techMapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  areaTechTitles: {
    fontSize: hp("2.7%"),
    shadowOpacity: 0.4,
    shadowOffset: { width: 1, height: 1 },
  },
  chipText: {
    fontSize: hp("1.4%"),
  },
  cardSubtitle: {
    fontStyle: "italic",
    fontSize: hp("2%"),
  },
  chipContainer: {
    height: hp("26%"),
    justifyContent: "space-around",
  },
  chipView: {
    margin: hp("0.1%"),
  },
  avatar: {
    marginTop: hp("0.w%"),
    marginRight: hp("0.3%"),
  },
  buttonActions: {
    height: hp("5.5%"),
    justifyContent: "space-around",
  },
});
