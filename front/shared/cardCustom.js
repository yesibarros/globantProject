import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import { Avatar, Card, Button, Chip, Title } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
const CardCustom = ({ matchPerson, selected, cancelButton, okButton }) => {
  const { colors } = useTheme();
  const borderWidth = selected ? 5 : 0;
  const borderColor = selected ? "#009387" : "";
 

  return (
    <View
      style={[
        styles.card,
        { borderWidth: borderWidth, borderColor: borderColor },
      ,{backgroundColor:colors.background}]}
    >
 

      <Card.Title
        right={() => (
          <Avatar.Image style={styles.avatar} size={100} source={{ uri: matchPerson.img }} />
        
        )}
        title={matchPerson.firstName + " " + matchPerson.lastName}
        titleStyle={styles.cardTitle}
        subtitle={
          matchPerson.role && matchPerson.role.toString().toUpperCase() +
          " | " +
          "Working since: " +
          matchPerson.workingSince +
          " | " +
          matchPerson.location.locationName
        }
        subtitleStyle={styles.cardSubtitle}
      />
    
      <Card.Content >
        <Title style={{shadowOpacity:0.4, shadowOffset:{width:1, height:1}}}>Areas</Title>
        <View style={styles.techMapContainer}>
          {matchPerson.areas.map((area, j) => {
            return (
              <View style={styles.chipView} key={j}>
                <Chip mode="contained" height={25} textStyle={styles.chipText}>
                  {area.areaName}
                </Chip>
              </View>
            );
          })}
        </View>
      </Card.Content>

      <Card.Content style={[styles.chipContainer,{marginTop:15}]}>
        <Title style={{shadowOpacity:0.4, shadowOffset:{width:1, height:1}}}>Technologies</Title>
        <View style={styles.techMapContainer}>
          {matchPerson.technologies.map((tech, i) => {
            return (
              <View style={styles.chipView} key={i}>
                <Chip mode="contained" height={25} textStyle={styles.chipText}>
                  {tech.technologyName}
                </Chip>
              </View>
            );
          })}
        </View>
      </Card.Content>
      
      <Card.Actions style={styles.buttonActions}>
        {selected ? (
          <Button
            onPress={() => cancelButton(selected)}
            mode="contained"
            color="white"
          >
            Volver atras
          </Button>
        ) : null}
        <Button
          onPress={() => okButton(selected, matchPerson)}
          icon="account-check"
        >
          {selected ? "Seleccionar" : "Mejor este!"}
        </Button>
      </Card.Actions>



    </View>
  );
};

export default CardCustom;

const screenWidth = Dimensions.get("window").width / 1.05;
const screenHeigth = Dimensions.get("window").height / 2.4;

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "white",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 1,
    shadowRadius: 2,
    marginTop: 20,
    marginBottom:1,
    width: screenWidth,
    height: screenHeigth,
    marginHorizontal: 10,
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
  
    flex:1,
    justifyContent: "space-evenly",
    alignItems:"flex-end",
    marginRight: 15,
    marginTop: -4,
  },
  
});
