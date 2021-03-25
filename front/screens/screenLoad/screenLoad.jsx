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
        Animated.timing(animateY, {
            toValue: height / 2,
            duration: 3000,
        }).start();

        Animated.timing(animateYwelcome, {
            toValue: height / 2 + 35,
            duration: 3000,
        }).start();
        }

        setAnimated(true);
        //EL SETTIMEOUT ESTA BIEN, PERO HAY QUE MODIFICAR QUE SEA UN STACK NAVIGATION EN APP
        setTimeout(function(){ navigation.navigate('Profile')}, 5000);
        
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
                right: 70
                }}
            >
                ME 
            </AnimatedText>

            
            <AnimatedText
                style={{
                bottom: animateYwelcome,
                position: "absolute",
                fontSize: 50,
                fontStyle: "italic",
                fontWeight: "bold",
                color: "white",
                }}
            >
                MENTOR
            </AnimatedText>
        
            {/* <LinearGradient
            ESTO GENERA QUE LA ANIMACION COMIENZE CORTADA AL MEDIO
                // Background Linear Gradient
                colors={['#ff9c38','#663300']}
                style={styles.bottomBackground}
            /> */}

        <StatusBar style="auto" />
        </View>
    );
    }



export default ScreenLoad