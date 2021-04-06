import React from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Avatar, Card, Button, Chip, Title } from "react-native-paper";

const CardCustom = ({ matchPerson, selected, cancelButton }) => {
  const borderWidth = selected ? 2 : 0;
  const borderColor = selected ? "black" : "";
  return (
    <View
      style={[
        styles.card,
        { borderWidth: borderWidth, borderColor: borderColor },
      ]}
    >
      <View style={styles.cardContent}></View>

      <Card.Title
        right={() => (
          <Avatar.Text
            rounded
            label={matchPerson.firstName[0] + matchPerson.lastName[0]}
            style={styles.avatar}
          />
        )}
        title={matchPerson.firstName + " " + matchPerson.lastName}
        titleStyle={styles.cardTitle}
        subtitle={
          matchPerson.role.toString().toUpperCase() +
          " | " +
          "Working since: " +
          matchPerson.workingSince +
          " | " +
          matchPerson.location.locationName
        }
        subtitleStyle={styles.cardSubtitle}
      />

      <Card.Content style={styles.chipContainer}>
        <Title>Areas</Title>
        <View style={styles.techMapContainer}>
          {matchPerson.areas.map((area, j) => {
            return (
              <View style={styles.chipView} key={j}>
                <Chip mode="outlined" height={25} textStyle={styles.chipText}>
                  {area.areaName}
                </Chip>
              </View>
            );
          })}
        </View>
      </Card.Content>

      <Card.Content style={styles.chipContainer}>
        <Title>Technologies</Title>
        <View style={styles.techMapContainer}>
          {matchPerson.technologies.map((tech, i) => {
            return (
              <View style={styles.chipView} key={i}>
                <Chip mode="outlined" height={25} textStyle={styles.chipText}>
                  {tech.technologyName}
                </Chip>
              </View>
            );
          })}
        </View>
      </Card.Content>

      <Card.Actions style={styles.buttonActions}>
        {!selected ? null : (
          <Button onPress={() => cancelButton()} mode="contained" color="white">
            Cancel
          </Button>
        )}
        <Button onPress={() => console.log("Pressed")} icon="account-check">
          {!selected ? "This one!" : "For sure!"}
        </Button>
      </Card.Actions>
    </View>
  );
};

export default CardCustom;

const screenWidth = Dimensions.get("window").width / 1.05;
const screenHeigth = Dimensions.get("window").height / 2.3;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "lightgrey",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 20,
    width: screenWidth,
    height: screenHeigth,
    marginHorizontal: 10,
  },
  cardContent: {
    marginVertical: 2,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 5,
  },
  techMapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chipText: {
    marginVertical: 1,
  },
  chipContainer: {
    marginTop: 8,
  },
  cardSubtitle: {
    fontStyle: "italic",
  },
  chipView: {
    margin: 2,
  },
  avatar: {
    backgroundColor: "white",
    marginRight: 15,
    marginTop: 10,
  },
  buttonActions: {
    justifyContent: "flex-end",
    marginRight: 15,
    marginTop: 10,
  },
});
