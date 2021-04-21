import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  Dimensions,
} from "react-native";
import { IconButton, Button } from "react-native-paper";
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
import { color } from "react-native-reanimated";

export default function Progress({ route, navigation }) {
  const { colors } = useTheme();

  const [viewModal, setViewModal] = useState(false);
  const idCurrent = route && route.params && route.params.idCurrent;
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
        style={[
          {
            height: hp("80%"),
            borderTopLeftRadius: 60,
            backgroundColor: "white",
          },
          { backgroundColor: colors.background },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: hp("11%"),
          }}
        >
          <Text style={[styles.titleProgress, { color: colors.text }]}>
            Objetivos
          </Text>
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
          <View
            style={[
              styles.viewContainer,
              { backgroundColor: colors.background },
            ]}
          >
            <View
              style={{
                height: hp("40%"),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={[styles.modalInstruction, { color: colors.text }]}>
                Titulo del objetivo:
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
                value={titleObjective}
                onChangeText={(text) => setTitleObjective(text)}
              />
              <Text style={[styles.modalInstruction, { color: colors.text }]}>
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

        {goals && goals.length > 0 ? (
          <FlatList
            data={goals}
            style={{ height: hp("50%") }}
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
        {/* <View style={{ marginTop: hp("12.9%") }}> */}
        <TabBar state={state} navigation={navigation} />
        {/* </View> */}
      </View>
    </View>
  );
}
