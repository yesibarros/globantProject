//REACT
import React from "react";

//REACT-NATIVE
import { ScrollView, View, Text } from "react-native";

//SCREENS
import Header from "../header/Header";

//STYLES
import styles from "./mentorStyle";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//UTILS
import { primaryGreen } from "../../utils/Colors";

//REACT-NATIVE-PAPER
import { Button } from "react-native-paper";

//REACT-REDUX
import { useSelector } from "react-redux";

//COMPONENTS
import UserCard from "../../shared/components/UserList/UserCard";

const Mentor = ({ navigation }) => {
  const loginUser = useSelector((state) => state.loggedUser.user);

  const { colors } = useTheme();

  const [mentor] = loginUser.mentor || null;

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Header navigation={navigation} />
          <Text style={styles.title}>Mi mentor</Text>
          <View style={[styles.body, { backgroundColor: colors.background }]}>
            <View style={styles.usersContainer}>
              <UserCard user={mentor} />
              {!mentor && (
                <Button
                  icon="account-plus"
                  mode="contained"
                  color={primaryGreen}
                  onPress={() => navigation.navigate("SearchMatch")}
                  style={{ marginTop: 20, marginHorizontal: "3%" }}
                >
                  Buscar mentor
                </Button>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Mentor;
