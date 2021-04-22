import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, Animated, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./screenLoadStyle";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import logo from '../../utils/Globant-Logo.png';

const AnimatedText = Animated.createAnimatedComponent(Text);

const ScreenLoad = ({ navigation }) => {

  const [animateY, setAnimateY] = useState(new Animated.Value(0));
  const [animateYwelcome, setAnimateYwelcome] = useState(new Animated.Value(0));
  const [animateLogo, setAnimateLogo] = useState(new Animated.Value(0));
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!animated) {
      Animated.spring(animateY, {
        toValue: hp("50%"),
        duration: 3500,
        bounciness: 22, //default 8
        speed: 0.5, //default 12
        useNativeDriver: false,
      }).start();

      Animated.spring(animateYwelcome, {
        toValue: hp("100%") / 2.3,
        duration: 3500,
        bounciness: 22, //default 8
        speed: 0.5, //default 12
        useNativeDriver: false,
      }).start();
    }

    setAnimated(true);

    // setTimeout(function () {
    //   navigation.navigate("SignIn");
    // }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#ffc78f", "#ff9c38"]}
        style={styles.background}
      />
      <AnimatedText
        style={{
          top: animateY,
          position: "absolute",
          fontSize: hp("7%"),
          fontStyle: "italic",
          fontWeight: "bold",
          color: "white",
          right: wp("13%"),
          zIndex: 2,
        }}
      >
        ME
      </AnimatedText>

      <AnimatedText
        style={{
          bottom: animateYwelcome,
          position: "absolute",
          fontSize: hp("7%"),

          fontStyle: "italic",
          fontWeight: "bold",
          color: "white",
          left: wp("8%"),
          zIndex: 3,
        }}
      >
        MENTOR
      </AnimatedText>
    
        <Image
          source={logo}
          style={{
              width: wp("100%"),
              height: hp("10%"),
              marginTop: hp("60%"),
              zIndex: 4,
          }}
        />


      <StatusBar style="auto" />
    </View>
  );
};

export default ScreenLoad;
