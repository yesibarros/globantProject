import React, { useEffect, useState } from "react";
import {
  StatusBar,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  ActivityIndicator,
} from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import styles from "./searchStyles";
import TabBar from "../../routes/Tab/TabBar";
import { Avatar, Chip, IconButton } from "react-native-paper";
import Swiper from "react-native-deck-swiper";
import { Transitioning, Transition } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getMatchs } from "../../state/posibleMatch/thunks";
import { useSelector, useDispatch } from "react-redux";
import { setMatch } from "../../state/posibleMatch/actions";
import { useTheme } from "@react-navigation/native";
const { width } = Dimensions.get("window");

const stackSize = 4;

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
  const loginUser = useSelector((state) => state.loggedUser.user);
  const matches = useSelector((state) => state.matchs.allMatches);
  const [index, setIndex] = React.useState(0);
  const [isLoading, setIsLoeading] = useState(true);
  const isMentor = useSelector((state) => state.toggleRole);

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
              <Avatar.Image size={hp("15%")} source={{ uri: card.img }} />
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
        height: hp("44%"),
        width: wp("87%"),
        marginHorizontal: wp("1.5%"),
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
              margin={hp("0.2%")}
              key={j}
              style={{ height: hp("4%"), alignItems: "center" }}
              mode="contained"
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
              margin={hp("0.2%")}
              key={i}
              style={{ height: hp("4%"), alignItems: "center" }}
              mode="contained"
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
        flex: 1,
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
                swipeBack	
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
              size={hp("12%")}
              style={{ marginTop: hp("4%") }}
              backgroundColor="transparent"
              underlayColor="transparent"
              activeOpacity={0.3}
              color="#ffc78f"
              onPress={() => swiperRef.current.swipeLeft()}
            />
            <MaterialCommunityIcons.Button
              name="thumb-up"
              size={hp("12%")}
              style={{ marginTop: hp("4.5%") }}
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

      <TabBar navigation={navigation} />
    </View>
  );
}
