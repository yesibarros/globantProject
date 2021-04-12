import React, { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Avatar, Chip, IconButton } from "react-native-paper";
import Swiper from "react-native-deck-swiper";
import { Transitioning, Transition } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getMatchs } from "../../state/posibleMatch/thunks";
import { useSelector, useDispatch } from "react-redux";
import { setMatch } from "../../state/posibleMatch/actions";
import { useTheme } from "@react-navigation/native";
const { width } = Dimensions.get("window");
import { primaryGreen } from "../../utils/Colors";

const stackSize = 4;
const colors = {
  red: "#EC2379",
  blue: "#0070FF",
  gray: "#777777",
  white: "#ffffff",
  black: "#000000",
};
const ANIMATION_DURATION = 200;

const transition = (
  <Transition.Sequence>
    <Transition.Out
      type="slide-bottom"
      durationMs={ANIMATION_DURATION}
      interpolation="easeIn"
    />
    <Transition.Together>
      <Transition.In
        type="fade"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
      />
      <Transition.In
        type="slide-bottom"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
        interpolation="easeOut"
      />
    </Transition.Together>
  </Transition.Sequence>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const matches = useSelector((state) => state.matchs.allMatches);
  const [index, setIndex] = React.useState(0);
  const [isLoading, setIsLoeading] = useState(true);

  const onSwiped = () => {
    {
      transitionRef.current && transitionRef.current.animateNextTransition();
    }
    setIndex((index + 1) % matches.length);
  };

  useEffect(() => {
    dispatch(getMatchs());
    setIsLoeading(false);
  }, []);
  const Card = ({ card }) => {
    return (
      <>
        {card && (
          <View style={[styles.card, { backgroundColor: colors.background }]}>
            <View style={styles.cardTitleView}>
              <Text style={[styles.cardTitleText, { color: colors.text }]}>
                {card.firstName + " " + card.lastName}
              </Text>
              <Text style={[styles.cardSubtitleText, { color: colors.text }]}>
                {"Working since: " + matches[index].workingSince}
              </Text>
              <Text style={[styles.cardSubtitleRole, { color: colors.text }]}>
                {card.role.join(" | ")}
              </Text>
              <Avatar.Image size={130} source={{ uri: card.img }} />
            </View>
            <CardDetails index={index} />
          </View>
        )}
      </>
    );
  };

  const CardDetails = ({ index }) => (
    <View
      key={matches[index].id}
      style={{
        flex: 0.6,
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Text style={[styles.tecnoAndAreaText, { color: colors.text }]}>
        AREAS
      </Text>
      <View style={styles.mapsContainer}>
        {matches[index].areas.map((area, j) => {
          return (
            <Chip
              margin={2}
              key={j}
              style={{ height: 35 }}
              mode="contained"
              textStyle={styles.chipText}
            >
              {area.areaName}
            </Chip>
          );
        })}
      </View>
      <Text style={[styles.tecnoAndAreaText, { color: colors.text }]}>
        TECNOLOGIAS
      </Text>
      <View style={styles.mapsContainer}>
        {matches[index].technologies.map((tech, i) => {
          return (
            <Chip
              margin={2}
              key={i}
              style={{ height: 35 }}
              mode="contained"
              textStyle={styles.chipText}
            >
              {tech.technologyName}
            </Chip>
          );
        })}
      </View>
    </View>
  );

  const preSelectMatch = (currentMatch) => {
    dispatch(setMatch(currentMatch));
    navigation.navigate("MatchComparison");
  };

  return (
    <View
      style={{
        flex: 0.93,
      }}
    >
      {isLoading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <ActivityIndicator size="large" color="orange" />
        </View>
      ) : (
        <>
          <IconButton
            icon="menu"
            color={colors.icon}
            size={35}
            style={{
              position: "absolute",
              zIndex: 1,
            }}
            onPress={() => navigation.openDrawer && navigation.openDrawer()}
          />
          <MaterialCommunityIcons
            name="crop-square"
            size={width}
            style={{
              opacity: 0.05,
              transform: [{ rotate: "45deg" }, { scale: 1.8 }],
              position: "absolute",
              marginVertical: 110,
            }}
          />
          <SafeAreaView style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.container}>
              <Swiper
                onSwipedRight={(index) => preSelectMatch(matches[index])}
                ref={swiperRef}
                cards={matches}
                cardIndex={index}
                renderCard={(match) => <Card card={match} />}
                infinite
                onSwiped={onSwiped}
                backgroundColor="transparent"
                onTapCard={() =>
                  swiperRef.current && swiperRef.current.swipeLeft()
                }
                cardVerticalMargin={50}
                stackSize={stackSize}
                stackScale={10}
                animateOverlayLabelsOpacity
                animateCardOpacity
                disableTopSwipe
                disableBottomSwipe
                overlayLabels={{
                  left: {
                    title: "NO",
                    style: {
                      label: {
                        marginTop: -40,
                        marginRight: -40,
                        backgroundColor: "#ffc78f",
                        color: colors.white,
                        fontSize: 40,
                      },
                      wrapper: {
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "flex-start",
                        marginTop: 20,
                        marginLeft: -20,
                      },
                    },
                  },
                  right: {
                    title: "SI",
                    style: {
                      label: {
                        backgroundColor: "#009387",
                        marginTop: -40,
                        marginLeft: -30,
                        color: colors.white,
                        fontSize: 40,
                      },
                      wrapper: {
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        marginTop: 20,
                        marginLeft: 20,
                      },
                    },
                  },
                }}
              />
            </View>
          </SafeAreaView>

          <Transitioning.View
            ref={transitionRef}
            transition={transition}
          ></Transitioning.View>
          <View style={styles.bottomContainerButtons}>
            <MaterialCommunityIcons.Button
              name="thumb-down"
              size={94}
              style={{ marginTop: 24 }}
              backgroundColor="transparent"
              underlayColor="transparent"
              activeOpacity={0.3}
              color="#ffc78f"
              onPress={() => swiperRef.current.swipeLeft()}
            />
            <MaterialCommunityIcons.Button
              name="thumb-up"
              size={94}
              backgroundColor="transparent"
              underlayColor="transparent"
              activeOpacity={0.3}
              color="#009387"
              onPress={() => {
                preSelectMatch(matches[index]);
              }}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    flex: 0.22,
  },
  card: {
    backgroundColor: "white",
    flex: 0.84,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 30,
  },
  cardTitleView: {
    flex: 0.41,
    alignItems: "center",
    justifyContent: "space-around",
  },
  cardTitleText: {
    fontSize: 35,
    color: primaryGreen,
  },
  cardSubtitleText: {
    color: colors.text,
    fontStyle: "italic",
    fontSize: 17,
  },
  cardSubtitleRole: {
    shadowOpacity: 0.2,
    shadowOffset: { width: 1, height: 1 },
    color: "gray",
    fontSize: 20,
    backgroundColor: "transparent",
  },
  mapsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 0.6,
    justifyContent: "center",
    alignContent: "center",
  },
  tecnoAndAreaText: {
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 15,
    paddingBottom: 5,
  },
});
