//REACT
import React, { useState, useEffect } from "react";

//REACT-NATIVE
import { View, Text, ActivityIndicator } from "react-native";
import { FlatList } from "react-native-gesture-handler";

//STYLE
import styles from "./NotificationsStyle";

//REACT-NAVIGATION
import { useTheme } from "@react-navigation/native";

//ROUTES
import TabBar from "../../routes/Tab/TabBar";

//SCREEN
import NotificationCard from "./NotificationCard";
import Header from "../header/Header";

//REACT- REDUX
import { useSelector, useDispatch } from "react-redux";
import { setMenuBadge } from "../../state/menuBadge/menuBadge";

const Notifications = ({ navigation }) => {
  const loginUser = useSelector((state) => state.loggedUser.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const notifications = useSelector((state) => state.notifications);

  const { colors } = useTheme();

  useEffect(() => {
    dispatch(setMenuBadge(false));
    setIsLoading(false);
  }, [notifications]);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: "#009387" }}>
      <Header navigation={navigation} />
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: colors.text }]}>
            NOTIFICACIONES
          </Text>
        </View>
        {!notifications?.length ? (
          <View style={styles.noNotificationsContainer}>
            <Text style={styles.noNotificationsText}>
              ¡Estás al día! No hay nuevas notificaciones.
            </Text>
          </View>
        ) : (
          <View style={styles.notificationsContainer}>
            <FlatList
              data={notifications}
              keyExtractor={(item) => item.data.date}
              inverted
              renderItem={({ item }) => (
                <NotificationCard notification={item} navigation={navigation} />
              )}
            />
            <View style={styles.titleContainer}>
              <Text style={[{ color: "#c4c4c4" }]}>
                Desliza para la izquierda para eliminar
              </Text>
            </View>
          </View>
        )}
      </View>
      <TabBar navigation={navigation} />
    </View>
  );
};

export default Notifications;
