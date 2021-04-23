//REACT
import React, { useState } from "react";

//REACT NATIVE
import { View, Text, Animated, Modal } from "react-native";

// STYLES
import styles from "./tutorialStyle";

const AnimatedText = Animated.createAnimatedComponent(Text);

const Tutorial = ({ navigation }) => {
  const [springValue, setSpringValue] = useState(new Animated.Value(0.3));
  const [rotateValue, setRotateValue] = useState(new Animated.Value(0.3));
  const [Visible, setVisible] = useState(true);
  let [messagePosition, setMessagePosition] = useState(0);

  const messagesTutorial = [
    { message: "¡Bienvenido! Primero una breve reseña" },
    { message: "En la app podras elejir a tu mentor" },
    { message: "Tendras objetivos que cumplir" },
    { message: "Podras visualizar tu progreso" },
    { message: "¡Podes convertirte en mentor tambien!" },
  ];

  const reset = () => {
    setVisible(false);
    navigation.navigate("Mi perfil");
  };

  const AnimationRotate = () => {
    Animated.sequence([
      Animated.timing(rotateValue, {
        toValue: 100,
        duration: 400,
        useNativeDriver: false,
      }),
      Animated.timing(rotateValue, {
        toValue: 0,
        duration: 0,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const AnimationSpring = () => {
    Animated.spring(springValue, {
      toValue: 1,
      friction: 5,
      useNativeDriver: false,
    }).start();
  };

  const SpringAndRotate = () => {
    Animated.parallel([AnimationSpring(), AnimationRotate()]).start();
  };

  const AnimationSpringDown = () => {
    Animated.parallel([
      Animated.spring(springValue, {
        toValue: 0.3,
        friction: 5,
      }),
      AnimationRotate(),
    ]).start();
  };

  const interpolateRotateAnimation = rotateValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Modal visible={Visible} animationType="slide" transparent={true}>
        <View style={styles.viewContainer}>
          <AnimatedText
            style={{
              transform: [
                { scale: springValue },
                { rotate: interpolateRotateAnimation },
              ],
              width: "75%",
              marginTop: 60,
              borderRadius: 50,
              textAlign: "center",
              alignSelf: "center",
              fontSize: 30,
              fontStyle: "italic",
              color: "#000",
            }}
            onPress={SpringAndRotate()}
          >
            {messagesTutorial[messagePosition] === undefined
              ? reset()
              : messagesTutorial[messagePosition].message}
          </AnimatedText>
          <View style={styles.btnNextAndOmit}>
            <View style={styles.btn}>
              <AnimatedText
                style={styles.nextView}
                onPress={() => AnimationSpringDown()}
                onPress={() => {
                  setMessagePosition(messagePosition + 1);
                }}
              >
                <Text style={styles.text}>SIGUIENTE</Text>
              </AnimatedText>
            </View>
            <View style={styles.btn}>
              <AnimatedText
                style={styles.nextView}
                onPress={() => AnimationSpringDown()}
                onPress={() => {
                  setMessagePosition(messagePosition + 1);
                }}
              >
                <Text style={styles.text} onPress={() => reset()}>
                  OMITIR INTRO
                </Text>
              </AnimatedText>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Tutorial;
