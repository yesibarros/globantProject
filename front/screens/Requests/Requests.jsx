//REACT
import React, { useState, useEffect } from "react";

//REACT-NATIVE
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

//STYLE
import styles from "./requestsStyle";
import { useTheme } from "@react-navigation/native";

//ROUTES
import TabBar from "../../routes/Tab/TabBar";

//SCREEN
import RequestCard from "./RequestCard";
import Header from "../header/Header";

//REACT-REDUX
import { useDispatch, useSelector } from "react-redux";
import { getRequests } from "../../state/requests/Thunks";

const Requests = ({ navigation }) => {
  const [showReceived, setShowReceived] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const { colors } = useTheme();
  const dispatch = useDispatch();
  const solicitudes = useSelector((state) => state.requests);
  const user = useSelector((state) => state.loggedUser.user);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getRequests()).then(() => {
      setIsLoading(false);
    });
  }, [user._id]);

  const filteredRequests = showReceived
    ? solicitudes.filter((r) => r?.to?._id === user._id)
    : solicitudes.filter((r) => r?.to?._id !== user._id);

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
            SOLICITUDES
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => {
              setShowReceived(true);
            }}
          >
            <Text
              style={[
                styles.buttons,
                showReceived && styles.underline,
                { color: colors.text },
              ]}
            >
              RECIBIDAS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShowReceived(false);
            }}
          >
            <Text
              style={[
                styles.buttons,
                !showReceived && styles.underline,
                { color: colors.text },
              ]}
            >
              ENVIADAS
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsContainer}>
          {filteredRequests.length != 0 ? (
            <FlatList
              data={filteredRequests}
              keyExtractor={(request) => request._id}
              renderItem={(request) => (
                <RequestCard
                  request={request.item}
                  received={showReceived}
                  navigation={navigation}
                />
              )}
            />
          ) : (
            <View style={styles.n}>
              <Text style={styles.nText}>
                No tenes solicitudes {showReceived ? "recibidas" : "enviadas"}
              </Text>
            </View>
          )}
        </View>
      </View>
      <TabBar navigation={navigation} />
    </View>
  );
};

export default Requests;
