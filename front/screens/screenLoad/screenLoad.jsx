import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, Animated, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./screenLoadStyle";
import {primaryGreen} from "../../utils/Colors"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import logoGlobant from '../../utils/Globant.png';
import logoCircularGlobant from '../../utils/globant-logo-circular.png';

const AnimatedText = Animated.createAnimatedComponent(Text);
const AnimatedImage = Animated.createAnimatedComponent(Image)

const ScreenLoad = ({ navigation }) => {

  const [animateY, setAnimateY] = useState(new Animated.Value(0));
  const [animateYwelcome, setAnimateYwelcome] = useState(new Animated.Value(0));
  const [animateLogo, setAnimateLogo] = useState(new Animated.Value(0));
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (!animated) {
      Animated.parallel([
        Animated.spring(animateY, {
          toValue: hp("50%"),
          duration: 3500,
          bounciness: 22, //default 8
          speed: 0.5, //default 12
          useNativeDriver: false,
        }),
        Animated.spring(animateYwelcome, {
          toValue: hp("50%"),
          duration: 3500,
          bounciness: 22, //default 8
          speed: 0.5, //default 12
          useNativeDriver: false,
        }),
        Animated.timing(animateLogo, {
          toValue: 0.8,
          duration: 1000,
          delay: 3000,
          useNativeDriver: false,
        })
      ]).start();
    }

    setAnimated(true);
    setTimeout(function () {
      navigation.navigate("SignIn");
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#ffc78f", "#ff9c38"]}
        style={styles.background}
      />

      <AnimatedImage
        source={logoCircularGlobant}
        style={{
            marginTop: hp("10%"),
            opacity: animateLogo,
        }}
      />

      <AnimatedText
        style={{
          top: animateY,
          position: "absolute",
          fontSize: hp("10%"),
          // fontStyle: "italic",
          fontWeight: "bold",
          color: '#BFD732',
          opacity: 1,
          right: wp("10%"),
          // zIndex: 2,
        }}
      >
        ME
      </AnimatedText>

      <AnimatedText
        style={{
          bottom: animateYwelcome,
          position: "absolute",
          fontSize: hp("7%"),
          // fontStyle: "italic",
          fontWeight: "bold",
          color:"#303030",
          opacity: 1,
          left: wp("5%"),
          // zIndex: 3,
        }}
      >
        MENTOR
      </AnimatedText>
    
      <AnimatedImage
        source={logoGlobant}
        style={{
            width: wp("100%"),
            height: hp("10%"),
            marginTop: hp("50%"),
            opacity: animateLogo,
        }}
      />


      <StatusBar style="auto" />
    </View>
  );
};

export default ScreenLoad;
