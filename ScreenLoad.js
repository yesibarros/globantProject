import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Animated, Dimensions } from "react-native";


const AnimatedText = Animated.createAnimatedComponent(Text);

const ScreenLoad = () => {
    const { height, width } = Dimensions.get("window");

    const [animateY, setAnimateY] = useState(new Animated.Value(0));
    const [animateYwelcome, setAnimateYwelcome] = useState(new Animated.Value(0));
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        if (!animated) {
        Animated.timing(animateY, {
            toValue: height / 2,
            duration: 6000,
        }).start();

        Animated.timing(animateYwelcome, {
            toValue: height / 2 - 15,
            duration: 6000,
        }).start();
        }

        setAnimated(true);
    }, []);
    return (
        <View style={styles.container}>
        <AnimatedText
            style={{
            top: animateY,
            position: "absolute",
            fontSize: 35,
            fontStyle: "italic",
            fontWeight: "bold",
            }}
        >
            MENTOR ME
        </AnimatedText>

        <AnimatedText
            style={{
            bottom: animateYwelcome,
            position: "absolute",
            fontSize: 35,
            fontStyle: "italic",
            fontWeight: "bold",
            }}
        >
            WELCOME
        </AnimatedText>

        <StatusBar style="auto" />
        </View>
    );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ScreenLoad