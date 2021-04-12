import React, { Component } from "react";
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import CardCustom from "../../shared/cardCustom";

const deviceWidth = Dimensions.get("window").width;

const MatchScrollView = ({ filterAllMatches, okButton }) => {
  const numItems = filterAllMatches.length;
  const itemWidth = 280 / numItems - (numItems - 1) * 10;
  const animVal = new Animated.Value(0).current;

  let barArray = [];
  filterAllMatches.forEach((image, i) => {
    const scrollBarVal = animVal.interpolate({
      inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
      outputRange: [-itemWidth, itemWidth],
      extrapolate: "clamp",
    });

    const thisBar = (
      <View
        key={`bar${i}`}
        style={[
          styles.track,
          {
            width: itemWidth,
            marginLeft: i === 0 ? 0 : 10,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.bar,
            {
              width: itemWidth,
              transform: [{ translateX: scrollBarVal }],
            },
          ]}
        />
      </View>
    );
    barArray.push(thisBar);
  });

  return (
    <View style={styles.container} flex={1}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={10}
        pagingEnabled
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: animVal } } },
        ])}
      >
        {filterAllMatches.map((option, i) => {
          return (
            <CardCustom matchPerson={option} key={i} okButton={okButton} />
          );
        })}
      </ScrollView>
      <View style={styles.barContainer}>{barArray}</View>
    </View>
  );
};

export default MatchScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  barContainer: {
    position: "absolute",
    zIndex: 2,
    top: 40,
    flexDirection: "row",
  },
  track: {
    backgroundColor: "#ccc",
    overflow: "hidden",
    height: 2,
  },
  bar: {
    backgroundColor: "#5294d6",
    height: 2,
    position: "absolute",
    left: 0,
    top: 0,
  },
});
