//REACT
import React, { useState, useEffect, useRef } from "react";
import { useRoute } from "@react-navigation/native";
import { ScrollView, View, Dimensions, Animated } from "react-native";

//SCREENS
import Header from "../header/Header";


//STYLE
import styles from "./menteesStyle";
import { FAB, Divider, Text } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { primaryGreen } from "../../utils/Colors";

//REDUX
import { useSelector, useDispatch } from "react-redux";
import {getSingleUser} from "../../state/singleUser/thunks"

//COMPONENTS
import UserList from "../../shared/components/UserList/UserList";
import Mentor from "../../screens/Mentor/Mentor"

const { height, width } = Dimensions.get("window");

const Mentees = ({ navigation }) => {
  const isMentor = useSelector((state) => state.toggleRole);
  const [startAnimate, setStartAnimate] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const translation = useRef(new Animated.Value(100)).current;
  const yTranslation = useRef(new Animated.Value(100)).current;
  useEffect(() => {
    if (!startAnimate) {
      Animated.timing(translation, {
        toValue: width-150,
        duration: 2000,
        useNativeDriver: false,
      }).start();
      Animated.timing(yTranslation, {
        toValue: height-200,
        duration: 2000,
        useNativeDriver: false,
      }).start();
    }

    setStartAnimate(true);
  }, []);
  //VER LO USEEFFECT
  const loginUser = useSelector((state) => state.loggedUser.user);
  const dispatch = useDispatch()
  const { colors } = useTheme();
  useEffect(() => {
    if (loginUser?.mentees.length == 0) {
      setVisible(true);
    }
  }, []);
  const menteesToShow = () => {
    let mentees = loginUser._id ? [...loginUser.mentees] || []: [];
    const length = mentees.length;
    if (length !== 4) {
      for (let i = 0; i < 5 - length; i++) {
        mentees.push(null);
      }
    }
    return mentees;
  };

  if(loginUser?.role?.includes("mentee") && loginUser?.role?.length==1) return <Mentor navigation={navigation}/>
  if(loginUser?.role?.length>1 && isMentor==false) return <Mentor navigation={navigation}/>

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Header navigation={navigation} />
          <Text style={styles.title}>
            {loginUser.role == "mentor" ? "MIS MENTEES" : "MI MENTOR"}
          </Text>
          <View style={[styles.body, { backgroundColor: colors.background }]}>
            <View style={styles.usersContainer}>
              {loginUser.mentees?.length == 0 ? (
                <View style={{ alignContent: "center", marginVertical: 250 }}>
                  <Divider style={{ backgroundColor: "grey", height: 2 }} />
                  <View
                    style={{
                      alignItems: "center",
                      height: 80,
                      justifyContent: "center",
                    }}
                  >
                    <Text style={{ fontSize: 30 }}>
                      No tenes ningún {loginUser.role == "mentor" ? "Mentee" : "Mentor"} todavía.
                    </Text>
                  </View>
                  <Divider style={{ backgroundColor: "grey", height: 2 }} />
                </View>
              ) : (
                <UserList users={menteesToShow()} navigation={navigation} />
              )}
            </View>
            {loginUser?.mentees?.length == 4 && (
              <View style={styles.noteContainer}>
                <Text style={styles.note}>
                  Solamente puedes tener hasta 5 mentees,
                </Text>
                <Text style={styles.note}>
                  elimina los que ya tienes para agregar nuevos.
                </Text>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
      {loginUser?.mentees?.length < 5 && (
        <Animated.View
          style={{
            position: "absolute",
            zIndex: 1,
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: yTranslation.interpolate({
              inputRange: [0, 375, height-200],
              outputRange: ["grey", "lightgrey", "transparent"],
            }),
            opacity: translation.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
            }),
            transform: [
              { translateX: translation },
              { translateY: yTranslation },

              {
                rotate: translation.interpolate({
                  inputRange: [0, 50, width-150],
                  outputRange: ["0deg", "180deg", "360deg"],
                }),
              },
            ],
          }}
        >
          <FAB
            style={styles.fab}
            icon="account-plus"
            onPress={() => navigation.navigate("SearchMatch")}
          />
        </Animated.View>
      )}
    </>
  );
};

export default Mentees;
