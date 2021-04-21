import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Modal,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { Title, IconButton, Card, Button } from "react-native-paper";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useTheme } from "@react-navigation/native";
import { state } from "../../utils/state";
import TabBar from "../../routes/Tab/TabBar";
import styles from "./progressStyle";
import CardProgress from "./CardProgress";
import { useDispatch, useSelector } from "react-redux";
import { getObjectives, sendObjective } from "../../state/objetivos/thunks";
import Header from "../header/Header";

export default function Progress({ route, navigation }) {
  const [viewModal, setViewModal] = useState(false);
  const idCurrent = route && route.params && route.params.idCurrent;
  const { colors } = useTheme();
  const { height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const logginUser = useSelector((state) => state.loggedUser.user);
  const goals = useSelector((state) => state.objetivos);
  const id = idCurrent || logginUser._id;
  const [objective, setObjective] = useState("");
  const [titleObjective, setTitleObjective] = useState("");

  useEffect(() => {
    dispatch(getObjectives(id));
  }, [id]);

  const handleObjective = () => {
    let obj = {
      objectiveName: titleObjective,
      description: objective,
      mentor: logginUser._id,
      mentee: idCurrent,
    };
    dispatch(sendObjective(obj)).then((data) =>
      dispatch(getObjectives(idCurrent))
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#009387" }}>
      <Header navigation={navigation} />

      <View
        style={{
          height: hp("100%"),
          borderTopLeftRadius: 60,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: hp("11%"),
          }}
        >
          <Text style={styles.titleProgress}>Objetivos</Text>
          {/* logginUser.role && logginUser.role[0] === "mentor" */}
          {true ? (
            <View
              style={{
                position: "absolute",
                width: wp("95%"),
              }}
            >
              <IconButton
                size={hp("5%")}
                color="#009387"
                icon="plus"
                style={{ alignSelf: "flex-end" }}
                onPress={() => {
                  setViewModal(true);
                }}
              />
            </View>
          ) : null}
        </View>

        <Modal visible={viewModal} transparent={true} animationType="slide">
          <View style={styles.viewContainer}>
            <View
              style={{
                height: hp("40%"),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.modalInstruction}>Titulo del objetivo:</Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    color: "#858585",
                    fontSize: hp("3%"),
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  },
                ]}
                multiline
                value={titleObjective}
                onChangeText={(text) => setTitleObjective(text)}
              />
              <Text style={styles.modalInstruction}>
                Descripción del objetivo:
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    color: "#858585",
                    fontSize: hp("3%"),
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                  },
                ]}
                multiline
                value={objective}
                onChangeText={(text) => setObjective(text)}
              />
            </View>

            <View
              style={{
                height: hp("12%"),
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Button
                style={styles.Button}
                onPress={() => {
                  setViewModal(false);
                }}
              >
                <Text
                  style={{
                    fontSize: hp("3%"),
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Cerrar
                </Text>
              </Button>

              <Button
                style={styles.Button}
                onPress={() => {
                  setViewModal(false);
                  return handleObjective();
                }}
              >
                <Text
                  style={{
                    fontSize: hp("3%"),
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  Enviar
                </Text>
              </Button>
            </View>
          </View>
        </Modal>

        <View style={{}}>
          {goals && goals.length > 0 ? (
            <FlatList
              data={goals}
              keyExtractor={(item) => item._id}
              renderItem={(goal) => {
                const last =
                  goal.item._id === goals[goals.length - 1]._id ? true : false;
                return <CardProgress item={goal.item} last={last} />;
              }}
            />
          ) : (
            <View style={styles.n}>
              <Text style={styles.nText}>No tienes objetivos establecidos</Text>
            </View>
          )}
        </View>
      </View>
      <View style={{}}>
        <TabBar state={state} navigation={navigation} />
      </View>
    </View>
  );
}
