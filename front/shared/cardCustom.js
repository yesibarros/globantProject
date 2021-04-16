import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Avatar, Card, Button, Chip, Title } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
const CardCustom = ({ matchPerson, selected, cancelButton, okButton }) => {
  const { colors } = useTheme();
  const borderWidth = selected ? 5 : 1;
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
        style={{ flex: 0.3 }}
        right={() => (
          <Avatar.Image
            style={styles.avatar}
            size={90}
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

      <Card.Content style={{ flex: 1 }}>
        <Title
          style={{ shadowOpacity: 0.4, shadowOffset: { width: 1, height: 1 } }}
        >
          Areas
        </Title>
        <View style={styles.techMapContainer}>
          {matchPerson.areas.map((area, j) => {
            if (j < 8) {
              return (
                <View style={styles.chipView} key={j}>
                  <Chip
                    mode="contained"
                    height={25}
                    textStyle={styles.chipText}
                  >
                    {area.areaName}
                  </Chip>
                </View>
              );
            }
          })}
        </View>
      </Card.Content>

      <Card.Content style={styles.chipContainer}>
        <Title
          style={{ shadowOpacity: 0.4, shadowOffset: { width: 1, height: 1 } }}
        >
          Technologies
        </Title>
        <View style={styles.techMapContainer}>
          {matchPerson.technologies.map((tech, i) => {
            if (i < 8) {
              return (
                <View style={styles.chipView} key={i}>
                  <Chip
                    mode="contained"
                    height={25}
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
          <View style={{flexDirection:"row"}}>
          <Button
            onPress={() => cancelButton(selected)}
            mode="contained"
            color="#ffc78f"
            icon="account-convert"
          >
            Volver atras
          </Button>
           <Button
           onPress={() => okButton(selected, matchPerson)}
           icon="account-check"
           mode="contained"
           color="#ffc78f"
         >
           {selected ? "Seleccionar" : "Mejor este!"}
         </Button>
         </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // backgroundColor: "red",
              flex: 1,
            }}
          >
            <Avatar.Icon
              size={30}
              icon="arrow-left-bold-outline"
              color="grey"
              style={{ backgroundColor: "transparent" }}
            />
            <Button
              onPress={() => okButton(selected, matchPerson)}
              icon="account-check"
              mode="contained"
              color="#ffc78f"
            >
              {selected ? "Seleccionar" : "Mejor este!"}
            </Button>
            <Avatar.Icon
              size={30}
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

const screenWidth = Dimensions.get("window").width / 1.05;
const screenHeigth = Dimensions.get("window").height / 2.4;

const styles = StyleSheet.create({
  card: {
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "white",
    width: screenWidth,
    height: screenHeigth,
    justifyContent: "space-around",
    marginHorizontal: 9.7,
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: 28,
  },
  techMapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chipText: {
    marginVertical: 1,
  },
  cardSubtitle: {
    fontStyle: "italic",
    fontSize: 12,
  },
  chipContainer: {
    flex: 1,
  },
  chipView: {
    margin: 1,
  },
  avatar: {
    margin: 5,
  },
  buttonActions: {
    flex: 0.4,
    justifyContent: "space-evenly",
  },
});
