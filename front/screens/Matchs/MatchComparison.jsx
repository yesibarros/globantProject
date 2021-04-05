import * as React from "react";
import {
  Avatar,
  Button,
  Title,
  Paragraph,
  Card,
  Chip,
} from "react-native-paper";

import {
  Text,
  FlatList,
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";

import { useDispatch, useSelector } from "react-redux";
import { getMatchs } from "../../state/posibleMatch/thunks";
import CardCustom from "../../shared/cardCustom";

import matches from "./egMatch";

const MatchComparison = () => {
  // const dispatch = useDispatch();
  // const matches = useSelector((state) => state.matchs);

  const obj = {
    role: ["mentor"],
    location: "605fba8c3ccf24250dd12618",
    areas: ["605fba8d3ccf24250dd12652", "605fba8d3ccf24250dd12650"],
    technologies: [
      "605fba8c3ccf24250dd1264a",
      "605fba8c3ccf24250dd12647",
      "605fba8c3ccf24250dd12646",
    ],
  };

  // React.useEffect(() => {
  //     dispatch(getMatchs(obj))
  // }, [])

  const [posibleMatch, setPosibleMatch] = React.useState(matches[2]);

  return (
    <View>
      <CardCustom matchPerson={posibleMatch} />

      <ScrollView horizontal pagingEnabled={true} fadingEdgeLength={20}>
        {matches.map((option, i) => {
          return (
            <View style={styles.card} key={i}>
              <View style={styles.cardContent}></View>

              <Card.Title
                title={option.firstName + " " + option.lastName}
                subtitle={
                  option.role.toString().toUpperCase() +
                  " | " +
                  "Working since: " +
                  option.workingSince +
                  " | " +
                  option.location.locationName
                }
              />
              <Card.Content>
                <Text>AREAS</Text>
                <View style={styles.techMapContainer}>
                  {option.areas.map((area, j) => {
                    return (
                      <View style={styles.chipView}>
                        <Chip
                          key={j}
                          mode="outlined"
                          height={30}
                          textStyle={styles.chipText}
                        >
                          {area.areaName}
                        </Chip>
                      </View>
                    );
                  })}
                </View>
              </Card.Content>

              <Card.Content>
                <Text>TECH</Text>
                <View style={styles.techMapContainer}>
                  {option.technologies.map((tech, j) => {
                    return (
                      <View style={styles.chipView}>
                        <Chip
                          key={j}
                          mode="outlined"
                          height={30}
                          textStyle={styles.chipText}
                        >
                          {tech.technologyName}
                        </Chip>
                      </View>
                    );
                  })}
                </View>
              </Card.Content>

              <Card.Actions>
                <Button>Not really.. </Button>
                <Button>For sure!</Button>
              </Card.Actions>

              {/* <Avatar.Text
                size={35}
                label={option.firstName[0] + option.lastName[0]}
                />
                */}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MatchComparison;

const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height / 2.5;

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "lightgrey",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginTop: 40,
    width: screenWidth,
    height: screenHeigth,
  },
  cardContent: {
    marginVertical: 2,
  },
  techMapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  chipText: {
    textAlign: "justify",
    textAlignVertical: "center",
  },
  chipView: {
    margin: 2,
  },
});
