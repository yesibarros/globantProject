import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { View, Text, Animated, Dimensions } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./screenLoadStyle"

const AnimatedText = Animated.createAnimatedComponent(Text);

const ScreenLoad = ({navigation}) => {

    const { height } = Dimensions.get("window");
    const [animateY, setAnimateY] = useState(new Animated.Value(0));
    const [animateYwelcome, setAnimateYwelcome] = useState(new Animated.Value(0));
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (!animated) {
        Animated.spring(animateY, {
            toValue: height / 2 + 35,
            duration: 3500,
            bounciness: 22, //default 8
            speed: 0.5, //default 12
            useNativeDriver: false 
        }).start();

        Animated.spring(animateYwelcome, {
            toValue: height / 2,
            duration: 3500,
            bounciness: 22, //default 8
            speed: 0.5, //default 12
            useNativeDriver: false
        }).start();
        }

        setAnimated(true);
        setTimeout(function(){ navigation.navigate('Profile')}, 5500);
        
    }, []);
    return (
        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                colors={["#ffc78f", '#ff9c38']}
                style={styles.background}
            />
            <AnimatedText
                style={{
                top: animateY,
                position: "absolute",
                fontSize: 50,
                fontStyle: "italic",
                fontWeight: "bold",
                color: "white",
                right: 70,
                zIndex: 1
                }}
            >
                ME 
            </AnimatedText>

            <LinearGradient
                // Background Linear Gradient
                colors={['#ff9c38','#663300']}
                style={styles.bottomBackground}
            >
                <AnimatedText
                    style={{
                    bottom: animateYwelcome,
                    position: "absolute",
                    fontSize: 50,
                    fontStyle: "italic",
                    fontWeight: "bold",
                    color: "white",
                    left: 70,
                    zIndex: 1
                    }}
                >
                    MENTOR
                </AnimatedText>
            </LinearGradient>

        <StatusBar style="auto" />
        </View>
    );
    }



export default ScreenLoad